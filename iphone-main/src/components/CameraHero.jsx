import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const CameraHero = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const text = "New 48MP Ultra Wide camera.Viva la resolution.";
  const subtext = "  Iphone 16 Pro ";

  const container = useRef(null);
  const frameRef = useRef(null);
  const paragraphRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: `${window.innerHeight * 5}px`,
          pin: true,
          scrub: 1,
        },
      });
      tl.fromTo(
        "#img-container",
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          scale: 2.5,
          x: 68,
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 120% 100%, 0% 100%)",
          scale: 0.52,
          ease: "power2.out",
          duration: 1,
          x: 0,
        }
      );
      tl.fromTo(
        "#caption-container",
        {
          y: 100,
          opacity: 1,
          ease: "power2.out",
          duration: 0.2,
        },
        {
          y: 0,
          opacity: 0,
          ease: "power2.out",
          duration: 0.2,
        },
        "+=0.2"
      );
      tl.fromTo(
        "#iphone-frame",
        {
          opacity: 0,
          scale: 0.6,
          clipPath: "polygon(0% 0%, 100% 0%, 120% 100%, 0% 100%)",
        },
        {
          opacity: 1,
          scale: 0.6,
          clipPath: "polygon(0% 0%, 100% 0%, 120% 100%, 0% 100%)",
          ease: "power2.out",
          duration: 0.6,
        },
        "-=0.5"
      );

      //   tl.fromTo(
      //     "#left-paragraph",
      //     {
      //       y: 10,
      //       opacity: 0,
      //     },
      //     {
      //       y: 0,
      //       opacity: 1,
      //       ease: "power2.out",
      //       duration: 0.8,
      //     },
      //     "+=0.2"
      //   );

      // Phase 5: Right paragraph appears from bottom
      //   tl.fromTo(
      //     ".paragraphs-container",
      //     {
      //       y: 10,
      //       opacity: 0,
      //     },
      //     {
      //       y: 0,
      //       opacity: 1,
      //       ease: "power2.out",
      //       duration: 0.8,
      //     },
      //     "+=0.2"
      //   );

      if (paragraphRef.current) {
        tl.fromTo(
          paragraphRef.current,
          {
            opacity: 0,
            y: 100,
            delay: 0.5,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.8,
            ease: "power2.out",
          
          }
        );
      }

      //   tl.fromTo(
      //     ".letter",
      //     {
      //       y: 100,
      //       opacity: 1,
      //     },
      //     {
      //       y: 0,
      //       opacity: 0,
      //       stagger: 0.2,
      //       ease: "sine.inOut",
      //       duration: 0.8,
      //     },
      //     "<+=0.1"
      //   );
      //   tl.fromTo(
      //     ".sub-letter",
      //     {
      //       y: 100,
      //       opacity: 1,
      //     },
      //     {
      //       y: 0,
      //       opacity: 0,
      //       ease: "sine.inOut",
      //       duration: 0.8,
      //     },
      //     ">-=1"
      //   );
      //   tl.fromTo(
      //     "#second-img-container",
      //     {
      //       clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
      //       scale: 1.4,
      //     },
      //     {
      //       clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      //       scale: 1,
      //       ease: "power2.out",
      //       duration: 1,
      //     },
      //     ">+=1"
      //   );
      //   tl.to("#second-img-container", {
      //     scale: 1,
      //     duration: 1.5,
      //   });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="flex overflow-hidden relative flex-col justify-center items-center h-screen bg-black"
    >
      <div
        id="img-container"
        className="flex absolute inset-0 z-0 justify-center w-full h-full"
      >
        <img
          src="/assets/images/hero_camera_screen_zoom__bltohecbqbv6_xlarge.jpg"
          alt=""
          className="object-cover object-center w-full h-full origin-center"
        />
      </div>
      {/* iPhone frame - appears at the end */}
      <div
        id="iphone-frame"
        ref={frameRef}
        className="flex absolute inset-0 z-20 justify-center items-center opacity-0"
        style={{
          clipPath: "polygon(5% 10%, 95% 10%, 95% 90%, 5% 90%)",
        }}
      >
        <img
          ref={frameRef}
          src="/assets/images/hero_camera_hw__l3esjbq1awy2_xlarge.png"
          alt="iPhone Frame"
          className="object-contain w-full h-full"
        />
      </div>
      <div
        id="caption-container"
        className="flex absolute inset-0 z-50 flex-col justify-center items-center"
      >
        <h1 className="overflow-hidden leading-none">
          <span className="font-bold letter text-[2rem] text-center text-white inline-block">
            {text}
          </span>
        </h1>
        <h1 className="overflow-hidden leading-none text-shadow-lg text-shadow-black">
          <span className="font-bold text-[1rem] sub-letter text-center text-white inline-block">
            {subtext}
          </span>
        </h1>
      </div>
      {/* Paragraphs container - appears at the end */}
      <div
        ref={paragraphRef}
        className="flex absolute right-0 left-0 bottom-4 z-40 justify-between px-8 opacity-0 lg:px-16"
      >
        {/* Left paragraph */}
        <div className="max-w-md">
          <p className="text-[#af9b91] text-sm sm:text-base leading-relaxed">
            iPhone 16 Pro adds a second 48MP camera to the Pro camera system.
            The new 48MP Ultra Wide camera has a more advanced quad-pixel sensor
            for super-high-resolution 48MP 
          </p>
        </div>

        {/* Right paragraph */}
        <div className="max-w-md">
          <p className="text-[#af9b91] text-sm sm:text-base leading-relaxed">
            So you can capture a mesmerizing new level of detail in macro photos
            and sweeping, wide-angle shots.
          </p>
        </div>
      </div>
      {/* <div
        id="second-img-container"
        className="flex absolute inset-0 z-50 justify-center items-center w-full h-full"
      >
        <img
          src="/assets/images/hero_camera_screen_zoom__bltohecbqbv6_xlarge.jpg"
          alt=""
          className="object-cover object-center w-full h-full"
        />
      </div> */}
    </div>
  );
};

export default CameraHero;
