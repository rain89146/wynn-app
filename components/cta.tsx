import { LinkObject } from "@/lib/contentful/model/content";
import Link from "next/link";

export function PrimaryLinkCta({ctaLink}: {ctaLink: LinkObject}) {
  return (
    <Link href={ctaLink.url} aria-label={ctaLink.alt} rel="noopener">
        <div className='py-3 px-6 bg-[#006f62] text-white font-medium inline-block uppercase'>
            {ctaLink.displayName}
        </div>
    </Link>
  )
}