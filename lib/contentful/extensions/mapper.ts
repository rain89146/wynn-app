import { HeaderProps } from "@/components/header";
import { HeaderCollectionObj } from "../model/header";
import { NavigationCollectionObj } from "../model/navigation";
import { FooterProps } from "@/components/footer";
import { HeroProps } from "@/components/hero";
import { HeroObj, IntroductionObj } from "../model/content";
import { IntroductionProps } from "@/components/introduction";
import { PromoListObj, PromoObj } from "../model/promos";
import { PromoSectionProps } from "@/feature/Promo/PromoSection";
import logger from "@/lib/winston/logger";

/**
 * Convert to header props
 * @param headerCollection 
 * @param navigationCollection 
 * @returns 
 */
export function ToHeaderProps(headerCollection: HeaderCollectionObj, navigationCollection: NavigationCollectionObj): HeaderProps {
    const headerProps: HeaderProps = {
        logo: "",
        menuItems: [],
    }

    const header = headerCollection.items[0];
    const navigation = navigationCollection.items[0];

    if (!header || !navigation) {
        logger.error("Header or navigation data is missing");
        return headerProps;
    }

    headerProps.logo = header.logo?.url || "";
    headerProps.menuItems = navigation.subCategoryCollection.items.map(item => {
        return {
            displayName: item.displayName,
            url: item.url,
            alt: item.alt,
        }
    }) || [];

    return headerProps;
}

/**
 * Convert to footer props
 * @param headerCollection 
 * @param footerCollection 
 * @returns 
 */
export function ToFooterProps(headerCollection: HeaderCollectionObj,footerCollection: NavigationCollectionObj): FooterProps {
    const footerProps: FooterProps = {
        copyrightText: "",
        logoUrl: "",
        navigationLinks: [],
    }

    const footer = footerCollection.items[0];
    const header = headerCollection.items[0];

    if (!footer || !header) {
        logger.error("Footer or header data is missing");
        return footerProps;
    }

    footerProps.copyrightText = footer.copyrightText || "";
    footerProps.logoUrl = header.logo?.url || "";
    footerProps.navigationLinks = footer.subCategoryCollection.items.map(item => {
        return {
            displayName: item.displayName,
            url: item.url,
            alt: item.alt,
        }
    }) || [];

    return footerProps;
}

/**
 * Convert to hero props
 * @param heroObj 
 * @returns
 */
export function ToHeroProps(heroObj: HeroObj): HeroProps{
    const heroProps: HeroProps = {
        heading: "",
        subheading: "",
        imageUrl: "",
    }

    if (!heroObj) {
        logger.error("Hero data is missing");
        return heroProps;
    }

    heroProps.heading = heroObj.heading;
    heroProps.subheading = heroObj.subheading;
    heroProps.imageUrl = heroObj.backgroundImage.url;

    return heroProps;
}

/**
 * Convert to introduction props
 * @param introObj 
 * @returns 
 */
export function ToIntroductionProps(introObj: IntroductionObj): IntroductionProps {
    const introProps: IntroductionProps = {
        title: "",
        description: "",
        type: 'primary',
        animation: false,
    }

    if (!introObj) {
        logger.error("Introduction data is missing");
        return introProps;
    }

    introProps.title = introObj.title || "";
    introProps.description = introObj.description;
    introProps.type = introObj.type || 'primary';
    introProps.animation = introObj.animated === "true" ? true : false;

    return introProps;
}

/**
 * Convert to promo section props
 * @param promoListObj 
 * @returns 
 */
export function ToPromoSectionProps(promoListObj: PromoListObj): PromoSectionProps {
    const promoSectionProps: PromoSectionProps = {
        promos: [],
        intro: null,
    }

    if (!promoListObj) {
        logger.error("Promo list data is missing");
        return promoSectionProps;
    }

    promoSectionProps.intro = promoListObj.intro ? ToIntroductionProps(promoListObj.intro) : null;
    promoSectionProps.promos = promoListObj.promosCollection.items.map((promo: PromoObj) => {
        const {title, description, image, ctaLink, imagePosition} = promo;

        return {
            title,
            description,
            imageUrl: image.url,
            imagePosition,
            ctaLink: {
                displayName: ctaLink.displayName,
                url: ctaLink.url
            }
        }
    }) || [];
        
    return promoSectionProps;
}