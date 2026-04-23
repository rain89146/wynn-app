export type NavigationLinkObj = {
    alt: string;
    url: string;
    displayName: string;
    slug?: string;
    name: string;
}

export type SubCategoryObj = {
    items: NavigationLinkObj[];
}

export type NavigationItemObj = {
    name: string;
    slug: string;
    copyrightText?: string;
    subCategoryCollection: SubCategoryObj;
    __typename: "Navigation" | "Footer";
}

export type NavigationCollectionObj = {
    items: NavigationItemObj[];
}