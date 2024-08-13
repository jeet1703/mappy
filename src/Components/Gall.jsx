import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Section from "./Section"; // Ensure Section is correctly imported
import { Gradient } from "./design/Hero";
import "../index.css"; // Ensure this points to where you added the custom CSS
import { images } from "../constants";
import { useMediaQuery } from 'react-responsive';

const Gall = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Adjust the maxWidth based on your breakpoints

  return (
    <Section id="Gallery" crosses className="!px-0 !py-10">
      <div className="max-w-screen-lg mx-auto text-center md:mt-20 md:mb-20">
        <h2 className="text-4xl md:text-6xl mb-16">Gallery</h2>
        <div className="gradient-border-wrapper">
          <div className="gradient-border-inner">
            <ImageGallery 
              items={images} 
              showBullets={false}
              showPlayButton={false} 
              showThumbnails={false}
              showFullscreenButton={false}
              showNav={!isMobile} // Conditionally show nav based on screen size
              autoPlay={true} // Enable auto play
              slideInterval={3000} // Change image every 5 seconds
              slideDuration={1000} // Transition duration is 1 second
            />
          </div>
        </div>
        <Gradient />
      </div>
    </Section>
  );
}

export default Gall;
