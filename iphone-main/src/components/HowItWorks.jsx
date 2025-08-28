import React, { useRef, useState } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MODEL_METRICS = {
  "iPhone 12 Pro": { gpu: "60% faster", cpu: "2x faster" },
  "iPhone 12 Pro Max": { gpu: "60% faster", cpu: "2x faster" },
  "iPhone 13 Pro": { gpu: "40% faster", cpu: "50% faster" },
  "iPhone 13 Pro Max": { gpu: "30% faster", cpu: "40% faster" },
  "iPhone 14 Pro": { gpu: "30% faster", cpu: "40% faster" },
  "iPhone 14 Pro Max": { gpu: "30% faster", cpu: "40% faster" },
  "iPhone 15 Pro": { gpu: "20% faster", cpu: "20% faster" },
  "iPhone 15 Pro Max": { gpu: "20% faster", cpu: "20% faster" },
};

const HowItWorks = () => {
  const videoRef = useRef();
  const [model, setModel] = useState("iPhone 12 Pro");

  useGSAP(() => {
    gsap.set("#gaming-sub", { opacity: 0, y: 24 });

    gsap.to("#gaming-sub", {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#controller-section",
        start: "top 95%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  const metrics = MODEL_METRICS[model] || { gpu: "—", cpu: "—" };

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="my-20 w-full flex-center">
          <img src={chipImg} alt="chip" width={400} height={400} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A18 Pro chip.
            <br /> A monster win for gaming.
          </h2>

          <p className="hiw-subtitle">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>
        {/* Compare bar - blended into black */}
        <div className="overflow-hidden relative p-5 mb-8 w-full bg-gradient-to-b rounded-2xl from-black/80 to-black/40 before:absolute before:inset-x-0 before:top-0 before:h-12 before:bg-gradient-to-b before:from-black before:to-transparent after:absolute after:inset-x-0 after:bottom-0 after:h-12 after:bg-gradient-to-t after:from-black after:to-transparent">
          <div className="flex relative flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-3 items-center">
              <span className="text-sm text-gray-400">Compare with</span>
              <select
                className="px-3 py-2 text-sm text-white rounded-lg backdrop-blur-sm outline-none bg-black/40"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              >
                {Object.keys(MODEL_METRICS).map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 gap-6 w-full md:w-auto md:grid-cols-2">
              <div className="px-4 py-3 rounded-xl backdrop-blur-sm bg-black/20">
                <p className="text-[10px] uppercase tracking-widest text-gray-400">
                  Up to
                </p>
                <p className="text-xl font-semibold text-white md:text-2xl">
                  {metrics.gpu}
                </p>
                <p className="text-[11px] text-gray-400">6‑core GPU</p>
              </div>
              <div className="px-4 py-3 rounded-xl backdrop-blur-sm bg-black/20">
                <p className="text-[10px] uppercase tracking-widest text-gray-400">
                  Up to
                </p>
                <p className="text-xl font-semibold text-white md:text-2xl">
                  {metrics.cpu}
                </p>
                <p className="text-[11px] text-gray-400">6‑core CPU</p>
              </div>
            </div>
          </div>
        </div>

        {/* Screen + video */}
        <div className="mt-10 mb-14 md:mt-20">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="relative z-10 bg-transparent"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="mt-3 font-semibold text-center text-gray">
            Honkai: Star Rail
          </p>
        </div>

        {/* Controller image with centered big title overlay */}
        <div
          id="controller-section"
          className="flex flex-col items-center mt-16 w-full"
        >
          <div className="relative w-full max-w-7xl">
            <img
              src="/assets/images/con1.jpg"
              alt="controller"
              className="mx-auto w-full object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.6)]"
            />
            <h3 className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-extrabold text-white text-4xl sm:text-5xl md:text-6xl lg:text-4xl mt-[9.5rem] tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
              Gaming.
              <br /> <span id="gaming-sub">In a whole new light.</span>
            </h3>
          </div>
        </div>

        <div className="flex flex-col gap-8 justify-between items-start px-4 mt-[8.5rem] md:gap-24 md:flex-row sm:px-8 lg:px-16 md:mt-0">
          <div className="flex flex-col flex-1 justify-center space-y-4 md:space-y-6">
            <p className="text-base font-normal leading-relaxed sm:text-lg md:text-xl text-gray md:font-semibold g_fadeIn">
              Gaming. In a whole new light.
              <span className="text-white">
                {" "}
                best graphic performance by far
              </span>
              .
            </p>

            <p className="text-base font-normal leading-relaxed sm:text-lg md:text-xl text-gray md:font-semibold g_fadeIn">
              Mobile{" "}
              <span className="text-white">
                {" "}
                games will look and feel so immersive
              </span>
              , with incredibly detailed environments and characters.
            </p>
          </div>

          <div className="flex flex-col flex-1 justify-center space-y-2 g_fadeIn md:space-y-4">
            <p className="text-base font-normal sm:text-lg md:text-xl text-gray md:font-semibold">
              New
            </p>
            <p className="my-2 text-2xl font-normal text-white sm:text-3xl md:text-4xl lg:text-5xl md:font-semibold">
              Pro-class GPU
            </p>
            <p className="text-base font-normal sm:text-lg md:text-xl text-gray md:font-semibold">
              with 6 cores
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
