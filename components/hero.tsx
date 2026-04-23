'use client';

import Image from 'next/image'
import { motion } from 'framer-motion'

export type HeroProps = {
  heading: string;
  subheading: string;
  imageUrl: string;
}

export function PrimaryHero({ heading, subheading, imageUrl }: HeroProps) {
  return (
    <div className="relative flex flex-col items-center justify-center h-[60vh] w-full overflow-hidden">
      {/* content */}
      <div className='w-full max-w-5xl h-full absolute z-10'>
        <div className='w-full h-full relative flex flex-col justify-end py-10 px-8 md:px-0'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <h1 className='text-5xl font-medium text-white font-serif'>{heading}</h1>
            <p className='text-lg text-white mt-2'>{subheading}</p>
          </motion.div>
        </div>
      </div>
      {/* background image — Ken Burns effect */}
      <motion.div
        className='absolute h-full w-full'
        initial={{ scale: 1.08, x: 8 }}
        animate={{ scale: 1, x: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: false }}
      >
        <Image
          src={imageUrl}
          alt=''
          fill
          priority
          className='object-cover object-center'
        />
      </motion.div>
      {/* backdrop */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-b from-transparent to-black'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeIn' }}
      />
    </div>
  )
}
