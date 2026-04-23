import { Suspense } from 'react';
import { ComponentRenderer } from "@/components/componentRender";
import { ContentfulClient } from "@/lib/contentful/contentful";
import { PageSkeleton } from '@/components/skeleton';
import logger from '@/lib/winston/logger';

export default function Home() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <HomeContent />
    </Suspense>
  );
}

async function HomeContent() {
  const slug = "corp-home-page";
  const res = await ContentfulClient.getPageContent(slug);
  if (!res) {
    logger.error("Failed to fetch home page content");
    return <p className="text-center py-20 text-gray-500">Failed to load content.</p>;
  }

  return <ComponentRenderer components={res} />;
}