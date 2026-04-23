import { PrimaryLinkCta } from '@/components/cta'
import { SectionLayout } from '@/components/layouts'
import React from 'react'

export default function NotFound() {
  return (
    <div className='w-full border-t-1 border-gray-200'>
      <SectionLayout>
        <div className='flex flex-col items-center justify-center gap-10 py-20'>
          <div>
            Not found
          </div>
          <PrimaryLinkCta ctaLink={{url: '/', alt: 'Back to Home', displayName: 'Back to Home'}} />
        </div>
      </SectionLayout>
    </div>
  )
}
