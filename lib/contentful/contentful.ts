import logger from "../winston/logger";
import { ContentfulFetchException, UnableToRetrieveAccessTokenException, UnableToRetrieveSpaceIdException } from "./exceptions";
import { HeaderCollectionObj } from "./model/header";
import { NavigationCollectionObj } from "./model/navigation";
import { PageCollectionObj } from "./model/pageContent";

export class ContentfulClient {
    
    // fetch entries from contentful using GraphQL API
    private static async fetchEntries<T>(query: string, preview: boolean = false, variables?: Record<string, unknown>): Promise<T | null> {
        try {
            const spaceId = process.env.CONTENTFUL_SPACE_ID;
            if (!spaceId) throw new UnableToRetrieveSpaceIdException();
            
            const accessToken = preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN;
            if (!accessToken) throw new UnableToRetrieveAccessTokenException();
            
            const url = `https://graphql.contentful.com/content/v1/spaces/${spaceId}`;
            const config = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify({ query, variables }),
                signal: AbortSignal.timeout(5000),
            }

            const response = await fetch(url, config);
            const data = await response.json();

            if (!response.ok) throw new ContentfulFetchException(data.errors ? JSON.stringify(data.errors) : 'Unknown error');

            return data.data as T;
        } catch (error) {
            logger.error(`ContentfulClient: FetchEntries: Error: ${error}`);
            return null;
        }
    }

    //  fetch navigation data (header and navigation) for the site
    static async getNavigation(navigationSlug: string, headerSlug: string, footerSlug: string): Promise<{headerCollection: HeaderCollectionObj, navigationCollection: NavigationCollectionObj, footerCollection: NavigationCollectionObj}|null> {
        try {
            const query = `
                query GetNavigation($navigationSlug: String!, $headerSlug: String!, $footerSlug: String!) {
                    navigationCollection(where: { slug: $navigationSlug }, limit: 1) {
                        items {
                            __typename
                            name
                            slug
                            subCategoryCollection {
                                items {
                                ... on Link {
                                    name
                                    slug
                                    displayName
                                    alt
                                    url
                                }
                                }
                            }
                        }
                    }
                    headerCollection(where: { slug: $headerSlug }, limit: 1) {
                        items {
                            __typename
                            siteName
                            slug
                            logo {
                                title
                                url
                                contentType
                            }
                        }
                    }
                    footerCollection(where: { slug: $footerSlug }, limit: 1) {
                        items {
                            __typename
                            name
                            slug
                            copyrightText
                            subCategoryCollection {
                                items {
                                ... on Link {
                                    name
                                    slug
                                    displayName
                                    alt
                                    url
                                }
                                }
                            }
                        }
                    }
                }
            `;
            return await ContentfulClient.fetchEntries(query, false, { navigationSlug, headerSlug, footerSlug });
        } catch (error) {
            logger.error(`ContentfulClient: getNavigation: Error: ${error}`);
            return null;
        }
    }

    // fetch home page content by slug
    static async getPageContent(pageSlug: string): Promise<PageCollectionObj | null> {
        try {
            const query = `
            query GetFullContentfulPage($pageSlug: String!) {
                pageCollection(where: { slug: $pageSlug }, limit: 1) {
                    items {
                    title
                    componentsCollection(limit: 15) {
                        items {
                        __typename
                        ... on Hero {
                            heading
                            subheading
                            backgroundImage {
                                title
                                url
                                width
                                height
                            }
                        }
                        ... on Introduction {
                            title
                            description
                            type
                            animated
                        }
                        ... on PromoList {
                            name
                            intro {
                            ... on Introduction {
                                title
                                description
                                type
                                animated
                            }
                            }
                            promosCollection(limit: 10) {
                            items {
                                __typename
                                ... on Promo {
                                title
                                description
                                imagePosition
                                image {
                                    title
                                    url
                                }
                                ctaLink {
                                    ... on Link {
                                    displayName
                                    url
                                    slug
                                    }
                                }
                                }
                            }
                            }
                        }
                        }
                    }
                    }
                }
            }`;
            return await ContentfulClient.fetchEntries(query, false, { pageSlug });
        } catch (error) {
            logger.error(`ContentfulClient: getHomePage: Error: ${error}`);
            return null;
        }
    }
}
