import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Effects = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const phoneRef = useRef(null);
  const colsRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const colsChildren = colsRef.current
      ? Array.from(colsRef.current.children)
      : [];

    // الحالة الابتدائية
    gsap.set([titleRef.current, phoneRef.current], { opacity: 0, y: 50 });
    if (colsChildren.length) {
      gsap.set(colsChildren, { opacity: 0, y: 50 });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // 1) العنوان
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    // 2) الصورة
    tl.to(
      phoneRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "+=0.1"
    );

    // 3) الفقرات مع stagger
    if (colsChildren.length) {
      tl.to(
        colsChildren,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.15,
        },
        "+=0.1"
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative py-20 w-full bg-black">
      <div className="px-4 mx-auto max-w-6xl text-center">
        {/* Titles */}
        <div ref={titleRef}>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Audio Mix.
          </h2>
          <h3 className="mt-2 text-3xl font-bold text-white md:text-4xl">
            Make your voice heard.
          </h3>
        </div>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-[#eceaea7c] md:text-base">
          Powered by advanced intelligence and Spatial Audio capture, Audio Mix
          lets you adjust the way voices sound in your videos using three
          different voice options. Want to decrease background sound? Or just
          focus on the voices that are in frame? Simply select the mix and
          adjust intensity to get the sound you want after video capture.
        </p>

        {/* Phone mockup */}
        <div ref={phoneRef} className="mx-auto mt-10 w-full max-w-5xl">
          <div className="relative rounded-[2.5rem] bg-black p-3 shadow-2xl">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src="/assets/images/audio__focwd6fsy1e2_xlarge.jpg"
                alt="Audio Mix"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="absolute top-2 left-1/2 w-24 h-2 rounded-full -translate-x-1/2 pointer-events-none bg-white/10" />
          </div>
        </div>

        {/* Three columns */}
        <div
          ref={colsRef}
          className="grid grid-cols-1 gap-8 mx-auto mt-12 max-w-5xl text-left text-[##eceaea7c] md:grid-cols-3"
        >
          <div>
            <h4 className="text-white">In‑frame</h4>
            <p className="mt-2 text-sm leading-relaxed">
              Only captures the voices of the people on camera, even if people
              off‑camera are talking during the recording.
            </p>
          </div>
          <div>
            <h4 className="text-white">Studio</h4>
            <p className="mt-2 text-sm leading-relaxed">
              Makes voices sound like you’re recording in a professional studio
              with background noise dampened while you talk. Great for vloggers.
            </p>
          </div>
          <div>
            <h4 className="text-white">Cinematic</h4>
            <p className="mt-2 text-sm leading-relaxed">
              Captures all on‑camera voices around you and smoothens them toward
              the center — like sound is formatted for the movies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Effects;
