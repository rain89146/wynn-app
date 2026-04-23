import { ComponentRenderer } from '@/components/componentRender';
import { ContentfulClient } from '@/lib/contentful/contentful';
import logger from '@/lib/winston/logger';
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from 'react';
import { PageSkeleton } from '@/components/skeleton';

type Props = {
  params: Promise<{ destination: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { destination } = await params;

  const res = await ContentfulClient.getPageContent(destination);
  const page = res?.pageCollection?.items?.[0];

  if (!res || !page) {
    logger.error(`Failed to fetch page content for destination: ${destination}`);
    return {
      title: "Page Not Found",
      description: "",
    };
  }

  const {title} = res.pageCollection.items[0];

  return {
    title: title || destination,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ destination: string; }>;
}) {
  const { destination } = await params;

  return (
    <Suspense fallback={<PageSkeleton />}>
      <DestinationPage destination={destination} />
    </Suspense>
  )
}

async function DestinationPage({destination}: {destination: string}) {
  const res = await ContentfulClient.getPageContent(destination);

  if (!res) {
    logger.error("Failed to fetch home page content");
    return <p className="text-center py-20 text-gray-500">Failed to load content.</p>;
  }

  // redirect to 404 if no content found for the slug
  if (res.pageCollection?.items.length === 0) {
    logger.warn(`No content found for slug: ${destination}`);
    notFound();
  }

  return (
    <>
      <ComponentRenderer components={res} />
      <div></div>
    </>
  )
}
