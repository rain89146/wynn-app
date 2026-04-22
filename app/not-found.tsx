import { PrimaryLinkCta } from '@/components/cta'
import React from 'react'

export default function NotFound() {
  return (
    <div className='w-full'>
      <div>
        Not found
      </div>
      <PrimaryLinkCta ctaLink={{url: '/', alt: 'Back to Home', displayName: 'Back to Home'}} />
    </div>
  )
}
