import { CtaLinkObj, ImageObj, IntroductionObj } from "./content";

export type PromoObj = {
    title: string;
    description: string;
    imagePosition: "left" | "right";
    image: ImageObj;
    ctaLink: CtaLinkObj;
    __typename: "Promo";
}

export type promosCollectionObj = {
    items: PromoObj[];
}

export type PromoListObj = {
    name: string;
    intro?: IntroductionObj;
    promosCollection: promosCollectionObj;
    __typename: "PromoList";
}