import React, {useMemo} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { LinkObject } from '@/lib/contentful/model/content';

export type FooterProps = {
  copyrightText: string;
  logoUrl: string;
  navigationLinks: LinkObject[];
}

export default function Footer({
  copyrightText,
  logoUrl,
  navigationLinks,
}: FooterProps) {
  
  // replace {year} with current year in copyrightText
  const copyRightText = useMemo(() => {
    
    const currentYear = new Date().getFullYear();
    
    // if copyrightText does not contain {year}, append current year at the end
    if (!copyrightText.includes('{year}')) {
      return `©${currentYear} Wynn Resorts Holdings, LLC. All rights reserved.`;
    }

    // otherwise, replace {year} with current year
    return copyrightText.replace('{year}', currentYear.toString());

  }, [copyrightText]);

  // chunk it into 2 columns
  const cols = useMemo(() => {
    const midIndex = Math.ceil(navigationLinks.length / 2);
    return [navigationLinks.slice(0, midIndex), navigationLinks.slice(midIndex)];
  }, [navigationLinks]);

  return (
    <footer className='bg-[#4b2a0b] py-20 mt-auto w-full'>
      <div className='container flex flex-col max-w-5xl w-full mx-auto gap-8'>
        {/* nav */}
        <div className='flex flex-col md:flex-row px-8 md:px-0 justify-between'>
          <div className="relative w-[132px] h-[60px] flex flex-col">
            <Link href="https://google.com" className="relative w-full h-full">
              <Image src={logoUrl} alt="Logo" fill className="object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
            </Link>
          </div>
          <div className='flex-1 flex flex-row gap-12 justify-start md:justify-end pt-8 md:pt-0'>
            {cols.map((col, idx) => <NavCols key={idx} links={col} />)}
          </div>
        </div>
        {/* empty line */}
        <div></div>
        {/* bottom foot */}
        <div className="text-center flex-col flex border-t-[0.5px] border-white pt-8">
          <div className="relative text-xs text-white font-bold mb-2">Do Not Sell Or Share My Data</div>
          <div className="text-center lg:text-center scroll-m-60 px-8 lg:px-0">
            <p className="text-xs text-white font-normal">{copyRightText} <a href="https://www.wynnlasvegas.com/privacy-notice" rel="" className="inline-flex items-center justify-center gap-2 text-sm font-semibold underline decoration-1 underline-offset-2 text-white !text-xs" aria-label="Data & Privacy">Data &amp; Privacy</a>.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function NavCols({ links }: { links: LinkObject[] }) {
  return (
    <ul className='flex flex-col items-start gap-2'>
      {links.map((link, index) => (
        <li key={index} className='text-sm text-white font-medium list-none transition-all duration-300 hover:border-white focus-halo border-transparent border-b-1'>
          <a href={link.url} className='inline-flex items-center justify-center gap-2 outline-none focus-outline relative text-white text-sm font-light' aria-label={link.alt}>{link.displayName}</a>
        </li>
      ))}
    </ul>
  )
}