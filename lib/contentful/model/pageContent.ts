import { HeroObj, IntroductionObj } from "./content";
import { PromoListObj } from "./promos";

export type componentsCollection = {
    items: (HeroObj | IntroductionObj | PromoListObj)[];
}

export type PageObj = {
    title: string;
    componentsCollection: componentsCollection;
}

export type PageCollectionObj = {
    pageCollection: {
        items: PageObj[];
    }
}

