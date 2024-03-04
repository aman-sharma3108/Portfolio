import React,{useEffect} from "react";
import Navbar from "../components/Navbar";
import HeroOne from "../components/HeroOne";
import HeroTwo from "../components/HeroTwo";
import HeroThree from "../components/HeroThree";
import AboutUs from "../components/AboutUs";
import Services from "../components/Service";
import CTABanner from "../components/CTABanner";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import Clients from "../components/Clients";
import "../components/Analytics";
import ReactGA from 'react-ga';

export default function Index(){
    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.event({
        category: 'Button',
        action: 'Click',
        label: 'Contact Us Button'
    });
    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.classList.add('light');
      }, []);
    return(
        <>
            <Navbar/>
            <HeroTwo/>
            <AboutUs/>
            <Services/>
            <CTABanner/>
            <Experience/>
            <Projects/>
            {/*<Clients/>  */}
            <GetInTouch/>
            <Footer/>
        </>
    )
}