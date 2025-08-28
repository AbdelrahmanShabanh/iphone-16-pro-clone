import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import { ScrollTrigger } from "gsap/all";
import VideoCarousel from "./VideoCarousel";
gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  useGSAP(() => {
    gsap.set("#title", { opacity: 0, y: 30 });
    gsap.set(".link", { opacity: 0, y: 20 });

    gsap.to("#title", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#highlights",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#highlights",
        start: "top 78%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section
      id="highlights"
      className="overflow-hidden w-screen h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="justify-between items-end mb-12 w-full md:flex">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>

          <div className="flex flex-wrap gap-5 items-end">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
