import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  const [imageWidth, setImageWidth] = useState(
    window.innerWidth < 760 ? "80%" : "50%"
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }

    // Update image width based on screen size
    if (window.innerWidth < 760) {
      setImageWidth("80%");
    } else {
      setImageWidth("50%");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1 });
    gsap.to("#btnz", { opacity: 1, y: -50, delay: 1 });

    gsap.to("#hero-img", {
      scale: 1.06,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      transformOrigin: "50% 50%",
    });
  }, []);

  return (
    <section className="relative w-full bg-black nav-height">
      <div className="relative flex-col w-full h-5/6 flex-center">
        <p
          id="hero"
          className="absolute top-6 left-1/2 z-10 -translate-x-1/2 hero-title"
        >
          iPhone 16 Pro
        </p>
        <div
          className="flex justify-center items-center sm:w-5/12 md:w-6/12 sm:translate-x-0 sm:translate-y-0"
          style={{ width: imageWidth }}
        >
          <img
            id="hero-img"
            className="pointer-events-none"
            src={videoSrc}
            alt="hero"
          />
        </div>
      </div>

      <div
        id="btnz"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
      </div>
    </section>
  );
};

export default Hero;
