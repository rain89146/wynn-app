import { PrimaryHero } from "@/components/hero";
import { Introduction, IntroductionProps } from "@/components/introduction";
import { PromoSection, PromoSectionProps } from "@/feature/Promo/PromoSection";

export default function Home() {

  const heroSection = {
    heading: "Welcome to Wynn Resorts",
    subheading: "Elegant accommodations, world-class dining, exceptional experiences",
    imageUrl: "https://owsc.wynnresortsmacau.com/hero-translations/facab78f33d30ee6687e62bc731cb6dd.jpeg"
  }
  
  const introSection: IntroductionProps = {
    title: undefined,
    description: "The award-winning Wynn Resorts welcomes guests to Las Vegas and Boston in the United States, as well as in the Special Administrative Region of Macau and Cotai. Wynn Resorts’ newest experience for discerning guests will premiere when Wynn Al Marjan Island opens its doors in Spring 2027.",
    type: "primary",
  }

  const promoSection: PromoSectionProps = {
    promos: [
      {
        title: "Wynn and Encore Las Vegas",
        description: "Wynn and Encore Las Vegas comprises two luxury hotel towers with a total of 4,748 spacious hotel rooms, suites, and villas. ",
        imageUrl: "https://cdn.wynnresorts.com/image/upload/w_auto,f_auto,q_auto/w_auto,f_auto,q_auto/f_auto/q_auto/v1741619870/wynn-resorts/Corp%20Site/wrl-wlv-1248x998?width=3840&quality=100",
        imagePosition: "left",
        ctaLink: { displayName: "Learn More", url: "/destination/las-vegas", alt: "Las Vegas" }
      },
      {
        title: "Wynn Palace Cotai",
        description: "Wynn Palace Cotai is a luxury resort located in the Cotai Strip of Macau, offering elegant accommodations, world-class dining, and exceptional entertainment experiences.",
        imageUrl: "https://cdn.wynnresorts.com/image/upload/w_auto,f_auto,q_auto/w_auto,f_auto,q_auto/f_auto/q_auto/v1741619870/wynn-resorts/Corp%20Site/wrl-wpc-1248x998?width=3840&quality=100",
        imagePosition: "right",
        ctaLink: { displayName: "Learn More", url: "/destination/cotai", alt: "Cotai" }
      },
      {
        title: "Wynn Macau",
        description: "Wynn Macau is a luxury resort located in the heart of Macau, offering elegant accommodations, world-class dining, and exceptional entertainment experiences.",
        imageUrl: "https://cdn.wynnresorts.com/image/upload/w_auto,f_auto,q_auto/w_auto,f_auto,q_auto/f_auto/q_auto/v1741619870/wynn-resorts/Corp%20Site/wrl-wmc-1248x998?width=3840&quality=100",
        imagePosition: "left",
        ctaLink: { displayName: "Learn More", url: "/destination/macau", alt: "Macau" }
      },
      {
        title: "Encore Boston Harbor",
        description: "Encore Boston Harbor is a luxury resort located in the heart of Boston, offering elegant accommodations, world-class dining, and exceptional entertainment experiences.",
        imageUrl: "https://cdn.wynnresorts.com/image/upload/w_auto,f_auto,q_auto/w_auto,f_auto,q_auto/f_auto/q_auto/v1741619870/wynn-resorts/Corp%20Site/wrl-ebh-1248x998?width=3840&quality=100",
        imagePosition: "right",
        ctaLink: { displayName: "Learn More", url: "/destination/boston", alt: "Boston" }
      }
    ],
    intro: {
      title: "Our Resorts",
      type: 'secondary',
      description: "Wynn Resorts is recognized globally for offering high-end guest experiences that are simply unmatched: elegant accommodations, world-class dining, thrilling casinos that cater to every level of guest, sensational entertainment, coveted designer boutiques, idyllic poolscapes, and much more, all enhanced by a keen attention to thoughtful, personalized service."
    },
  }

  return (
    <>
      <PrimaryHero {...heroSection} />
      <Introduction {...introSection} />
      <PromoSection {...promoSection}/>
    </>
  );
}
