'use client';

import { AnimatedList } from "@/components/animation";
import { Introduction, IntroductionProps } from "@/components/introduction";
import { LandscapeSectionLayout } from "@/components/layouts";
import { Promo, PromoProps } from "@/components/promo"

export type PromoSectionProps = {
  promos: PromoProps[]
  intro?: IntroductionProps|null;
}

export function PromoSection({ promos, intro }: PromoSectionProps) {
  return (
    <LandscapeSectionLayout className="bg-[#f0ece9]">
      {intro && <Introduction {...intro} />}
      <AnimatedList
        items={promos}
        renderItem={(promo) => <Promo {...promo} />}
        className="flex flex-col gap-10"
      />
    </LandscapeSectionLayout>
  );
}