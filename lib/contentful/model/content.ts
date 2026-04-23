
export type IntroductionObj = {
    title?: string;
    description: string;
    type?: 'primary' | 'secondary';
    animated?: "true" | "false";
    __typename: "Introduction";
}

export type CtaLinkObj = {
    displayName: string;
    url: string;
    slug?: string;
}

export type ImageObj = {
    title: string;
    url: string;
    width?: number;
    height?: number;
}

export type HeroObj = {
    heading: string;
    subheading: string;
    backgroundImage: ImageObj;
    __typename: "Hero";
}

export type LinkObject = {
  displayName: string;
  url: string;
  alt?: string;
}