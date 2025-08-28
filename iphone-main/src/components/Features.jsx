import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGsap } from "../utils/animations";
import {exploreVideo } from "../utils";
import gsap from "gsap";

const Features = () => {
  const videoRef = useRef();
  // بنشغّل الفيديو لما يدخل الفيو بورت ونوقّفه لما يخرج
  useGSAP(() => {
    const video = videoRef.current;

    const onReady = () => {
      video.pause();
    };
    video.addEventListener("loadedmetadata", onReady);

    const st = gsap.timeline({
      scrollTrigger: {
        trigger: "#exploreVideo",
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => video.play(),
        onLeave: () => video.pause(),
        onEnterBack: () => video.play(),
        onLeaveBack: () => video.pause(),
      },
    });

    return () => {
      video.removeEventListener("loadedmetadata", onReady);
      st.scrollTrigger && st.scrollTrigger.kill();
    };
  }, []);
  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWithGsap("#features_title", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <section className="overflow-hidden relative h-full bg-black common-padding">
      <div className="screen-max-wdith">
        <div className="mb-12 w-full"></div>

        <div className="flex overflow-hidden flex-col justify-center items-center">
          <div className="mt-32 text-center">
            <h2 className="mb-4 text-5xl font-semibold lg:text-7xl">
              Strength. Beauty.
            </h2>
            {/* <h2
              className="text-5xl font-extrabold lg:text-7xl
              text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500
              drop-shadow-[0_0_8px_rgba(255,215,0,0.6)] drop-shadow-[0_0_16px_rgba(255,215,0,0.35)]"
            >
              Titanium.
            </h2> */}
          </div>

          <div className="flex flex-col gap-8 items-center mx-auto w-full max-w-7xl lg:flex-row lg:gap-16">
            {/* left text */}
            <div className="flex order-2 justify-center w-full lg:justify-end lg:w-1/3 lg:order-1">
              <p className="px-4 max-w-md text-center lg:text-right feature-text g_text lg:px-0">
                iPhone 16 Pro features a Grade 5 titanium design with a new,
                refined microblasted finish. Titanium has one of the highest
                strength-to-weight ratios of any metal, making these models
                incredibly strong and impressively light. iPhone 16 Pro comes in
                four stunning colors — including new Desert Titanium
              </p>
            </div>

            {/* center video */}
            <div className="flex relative order-1 justify-center items-center w-full lg:order-2 lg:w-1/3">
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <video
                  playsInline
                  id="exploreVideo"
                  className="object-cover object-center w-full h-auto rounded-2xl"
                  preload="metadata"
                  muted
                  ref={videoRef}
                >
                  <source src={exploreVideo} type="video/mp4" />
                </video>
              </div>
            </div>

            {/* right text */}
            <div className="flex order-3 justify-center w-full lg:justify-start lg:w-1/3">
              <p className="px-4 max-w-md text-center lg:text-left feature-text g_text lg:px-0">
                Internal design improvements — including a 100 percent recycled
                aluminum thermal substructure and back glass optimizations that
                further dissipate heat — enable up to 20 percent better
                sustained performance than iPhone 15 Pro. So you can do all the
                things you love — like high-intensity gaming — for longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
