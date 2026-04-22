import { HeroProps, PrimaryHero } from '@/components/hero';
import {Introduction, IntroductionProps} from '@/components/introduction';

export default async function page({
  params,
}: {
  params: Promise<{ destination: string; }>;
}) {
  const { destination } = await params;

  // fetch data from Contentful based on destination
  const headerSection: HeroProps = {
    heading: "Wynn and Encore Las Vegas",
    subheading: "Elegant accommodations, world-class dining, exceptional experiences",
    imageUrl: "https://cdn.wynnresorts.com/image/upload/w_auto,f_auto,q_auto/w_auto,f_auto,q_auto/f_auto/q_auto/v1771522988/Encore%20Boston%20Harbor/Home%20Page/Heros/HP-Casino-Tables-James-Hero?width=1920&quality=100"
  }
  
  const intro: IntroductionProps = {
    animation: true,
    type: "primary",
    title: "There's nothing in the world like Las Vegas",
    description: "Wynn and Encore Las Vegas comprises two luxury hotel towers with a total of 4,748 spacious hotel rooms, suites, and villas. The resort features approximately 194,000 square feet of casino space, 20 signature dining experiences, 14 bars, two award-winning spas, approximately 513,000 square feet of meeting and convention space and 177,000 square feet of retail space, as well as two showrooms, two nightclubs, a beach club, and recreation and leisure facilities, including Wynn Golf Club, an 18-hole championship golf course. "
  }
  
  return (
    <>
      <PrimaryHero {...headerSection} />
      <Introduction {...intro} />
      <div></div>
    </>
  )
}
