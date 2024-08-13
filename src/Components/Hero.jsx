import React from "react";
import Section from "./Section";
import { curve, robot, heroBackground } from "../assets";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import {heroIcons} from "../constants";
import { ScrollParallax } from "react-just-parallax";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
const Hero = () => {
  const parallaxRef = React.useRef(null);
  return (
    <>
      <Section
        className="pt-[12rem] -mt-[1.25rem] "
        crosses 
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div className="container relative" ref={parallaxRef}>
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <h1 className="h1 mb-6 ">
              MAPPY 
              <span className="inline-block relative">
                CREW
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-1/2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>{" "}
              <br />
            </h1>
            <p className="text-lg text-text-secondary text-gray-400">
              Navigate Your Savings with Precision
            </p>
            <p className="text-2xl mt-5 text-gray-400 text-text-secondary">
            Welcome to the Future of Real-Time Discounts
            </p>
          </div>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="flex justify-center items-center aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-[80%] max-w-6xl h-auto"
                  width={400}
                  height={490}
                  alt="AI"
                />
              </div>
              <ScrollParallax>
              <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
              </ScrollParallax>
              <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="NEW WAY OF SHOPPING"
                  />
                </ScrollParallax>
             
            </div>
            <BackgroundCircles className= " hidden" />
          </div>
          <Gradient/>
          {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
           */}
        </div>
        
      </Section>
    </>
  );
};

export default Hero;
