import React from 'react'
import { PrimaryHero } from './hero';
import { Introduction } from './introduction';

import { ToHeroProps, ToIntroductionProps, ToPromoSectionProps } from '@/lib/contentful/extensions/mapper';
import { HeroObj, IntroductionObj } from '@/lib/contentful/model/content';
import { PageCollectionObj } from '@/lib/contentful/model/pageContent';
import { PromoListObj } from '@/lib/contentful/model/promos';
import { PromoSection } from '@/feature/Promo/PromoSection';

export function ComponentRenderer({components}: {components: PageCollectionObj}) {
  const {componentsCollection} = components.pageCollection.items[0];
  const items = componentsCollection?.items || [];

  // container to hold the rendered components
  const content: React.ReactElement[] = items.map((components, index) => {
    const {__typename} = components;
    switch (__typename) {
      case "Hero":
        // cast components to HeroObj
        const heroProps = ToHeroProps(components as HeroObj);
        return <PrimaryHero key={index} {...heroProps} />;
      case "Introduction":
        const introProps = ToIntroductionProps(components as IntroductionObj);
        return <Introduction key={index} {...introProps} />;
      case "PromoList":
        const promoSectionProps = ToPromoSectionProps(components as PromoListObj);
        return <PromoSection key={index} {...promoSectionProps} />;
      default:
        return <div key={index}>Unknown component type: {__typename}</div>;
    }
  })

  return <>{content}</>;
}
