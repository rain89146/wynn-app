type LogoObj = {
    title: string;
    url: string;
    contentType: string;
}

type HeaderItem = {
    siteName: string;
    slug: string;
    logo: LogoObj;
    __typename: "Header";
}

export type HeaderCollectionObj = {
    items: HeaderItem[];
}