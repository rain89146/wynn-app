export class UnableToRetrieveSpaceIdException extends Error {
    constructor() {
        super('Contentful space ID is not defined in environment variables.');
        this.name = 'UnableToRetrieveSpaceIdException';
    }
}

export class UnableToRetrieveAccessTokenException extends Error {
    constructor() {
        super('Contentful access token is not defined in environment variables.');
        this.name = 'UnableToRetrieveAccessTokenException';
    }
}

export class ContentfulFetchException extends Error {
    constructor(message: string) {
        super(`Contentful fetch error: ${message}`);
        this.name = 'ContentfulFetchException';
    }
}