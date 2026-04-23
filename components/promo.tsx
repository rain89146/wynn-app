import Image from 'next/image';
import { PrimaryLinkCta } from './cta';
import { LinkObject } from '@/lib/contentful/model/content';

export type PromoProps = {
  title: string;
  description: string;
  imageUrl: string;
  imagePosition: 'left' | 'right';
  ctaLink: LinkObject;
}

export function Promo({ title, description, imageUrl, imagePosition, ctaLink }: PromoProps) {
  return (
    <div className={`flex flex-col ${imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white overflow-hidden`}>
      <div className="relative w-full md:w-[55%] aspect-[4/3]">
        <Image src={imageUrl} alt={ctaLink.alt || title} fill className="object-cover" loading='lazy' />
      </div>
      <div className="w-full h-auto md:w-1/2 self-stretch p-10 flex flex-col gap-6 justify-start">
        <h2 className="text-xl !leading-[30px] text-left font-serif font-medium text-[#775c3d]">{title}</h2>
        <p className="text-base font-light text-primary text-gray-700">{description}</p>
        <div className='mt-auto'>
          <PrimaryLinkCta ctaLink={ctaLink} />
        </div>
      </div>
    </div>
  )
}
