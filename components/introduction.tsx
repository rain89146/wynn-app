'use client';

import { SectionLayout } from './layouts';
import { AnimationWrapper } from './animation';

export type IntroductionProps = {
  title?: string;
  description: string;
  type?: 'primary' | 'secondary';
  animation?: boolean;
}

export function Introduction({ title, description, type, animation }: IntroductionProps) {
  return (
    <SectionLayout>
      <div className='flex flex-col items-center w-full px-8 md:px-0'>
        {/* title */}
        {title && (
          animation ? (
            <AnimationWrapper
              className='flex flex-col w-full pb-3 text-center justify-center font-serif'
              delay={0}
            >
              {type === 'primary' ? (
                <h1 className='text-3xl font-medium'>{title}</h1>
              ) : (
                <h1 className='text-2xl font-medium'>{title}</h1>
              )}
            </AnimationWrapper>
          ) : (
            <div className='flex flex-col w-full pb-3 text-center justify-center font-serif'>
              {type === 'primary' ? (
                <h1 className='text-3xl font-medium'>{title}</h1>
              ) : (
                <h1 className='text-2xl font-medium'>{title}</h1>
              )}
            </div>
          )
        )}
        {/* description */}
        {animation ? (
          <AnimationWrapper
            className='text-center [&_*]:whitespace-break-spaces'
            delay={title ? 0.2 : 0}
          >
            {description.split('\n').map((line, index) => (
              <p key={index} className={`${type === 'primary' ? 'text-lg' : 'text-md'}`}>
                {line}
              </p>
            ))}
          </AnimationWrapper>
        ) : (
          <div className='text-center [&_*]:whitespace-break-spaces'>
            {description.split('\n').map((line, index) => (
              <p key={index} className={`${type === 'primary' ? 'text-lg' : 'text-md'}`}>
                {line}
              </p>
            ))}
          </div>
        )}
      </div>
    </SectionLayout>
  )
}
