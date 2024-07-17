import Heros from "./Heros";
import About from "./About";
import OurServices from "./OurServices";
import WhyUs from "./WhyUs"
import Faq from "./Faq";
import Trusted from "./Trusted";
import Service from "./Service";
import Banner from "./Banner";
import Footer from "./Footer";
import HeroVideo from "./HeroVideo";
import { S2 } from "./s2";
import MegaNavbar from "./MegaNavbar";
export default function Home(){
    return(
        <p>
            <Banner/>
            <Heros/>
            {/* <HeroVideo/> */}
            <About/>
            {/* <S2/> */}
            <Service/>
            <WhyUs/>
            <Faq/>
            <Trusted/>
            <Footer/>
        </p>
    )
}