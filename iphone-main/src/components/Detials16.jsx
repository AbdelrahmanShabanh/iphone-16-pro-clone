import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";
import gsap from "gsap";

// كومبوننت لعرض بوكسات على صف واحد مع سكرول بأسهم
const Detiels16 = () => {
  const trackRef = useRef(null);
  const cardsRef = useRef([]);
  const paragraphsRef = useRef(null);

  const cards = [
    {
      id: 1,
      img: "/assets/images/display__f5509jfp9nyq_xlarge.jpg",
      title: "The thinnest borders on any Apple product",
    },
    {
      id: 2,
      img: "/assets/images/thin__eqeewfn1mgsy_xlarge_1.jpg",
      title: "Premium Grade 5 titanium is exceptionally durable",
    },
    {
      id: 3,
      img: "/assets/images/color__eaawe4bmivki_xlarge.jpg",
      title: "Four striking colors, from Black Titanium to Desert Titanium",
    },
    {
      id: 4,
      img: "/assets/images/recycle__bjo9ezsrw6vm_xlarge.jpg",
      title: "Designed with the environment in mind",
    },
  ];

  const scrollByCard = (direction) => {
    const container = trackRef.current;
    if (!container) return;

    const firstCard = container.querySelector("[data-card]");
    const gap = 16; // gap-4
    // move approximately one viewport width so the next set of cards reaches the screen edges
    const styles = getComputedStyle(container);
    const paddingLeftPx = parseFloat(styles.paddingLeft || "0");
    const paddingRightPx = parseFloat(styles.paddingRight || "0");
    const step =
      container.clientWidth - paddingLeftPx - paddingRightPx ||
      (firstCard ? firstCard.clientWidth + gap : 300);

    container.scrollBy({
      left: direction === "right" ? step : -step,
      behavior: "smooth",
    });
  };

  // انيميشن للكروت والباراجراف
  useGSAP(() => {
    // انيميشن للكروت - تظهر واحد تلو التاني
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          scale: 1,
          x:10
        },
        {
          opacity: 1,
          y: 0,
          x:10,
          scale: 1,
          duration: 1,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // انيميشن للباراجراف - تظهر من تحت لفوق
    if (paragraphsRef.current) {
      gsap.fromTo(
        paragraphsRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paragraphsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section
      className="relative w-full bg-gradient-to-b from-[#1c1410] to-[#0f0b08] overflow-hidden"
      style={{ paddingTop: "18rem", paddingBottom: "2rem" }}
    >
     
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black to-transparent pointer-events-none sm:h-40" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none sm:h-40" />
      <div className="relative px-0">
        <div
          ref={trackRef}
          className="flex overflow-x-auto gap-3 sm:gap-4 md:gap-6 no-scrollbar px-2 sm:px-4 md:px-8 lg:pl-[13.5rem] lg:pr-[13.5rem]"
          style={{
            scrollSnapType: "x mandatory",
            scrollPaddingLeft: "13.5rem",
            scrollPaddingRight: "13.5rem",
          }}
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              data-card
              ref={(el) => (cardsRef.current[index] = el)}
              className="overflow-hidden rounded-2xl shrink-0"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="flex overflow-hidden justify-center items-center w-full">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-[450px] object-contain rounded-2xl"
                />
              </div>
              <p className="px-4 mt-4 text-sm font-normal text-left text-[#664d40] sm:text-base">
                {card.title}
              </p>
            </div>
          ))}
        </div>

        {/* arrows */}
        <div
          className="flex absolute right-4 gap-2 items-center sm:right-8 md:right-16 lg:right-16 sm:gap-3"
          style={{ bottom: "-10rem" }}
        >
          <button
            aria-label="Previous"
            onClick={() => scrollByCard("left")}
            className="control-btn bg-gray-300/60 hover:bg-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-5 h-5 text-black rotate-180"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollByCard("right")}
            className="control-btn bg-gray-300/60 hover:bg-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-5 h-5 text-black"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* paragraphs under cards */}
      <div
        ref={paragraphsRef}
        className="flex flex-col lg:flex-row lg:justify-between gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-8 md:px-16 lg:px-[13.5rem]"
        style={{ marginTop: "13rem", marginBottom: "5rem" }}
      >
        <div className="lg:max-w-[300px]">
          <p className="text-[#af9b91] text-xs sm:text-sm md:text-base leading-relaxed">
            New display technology allows us to route display data under
            <br className="hidden sm:block" />
            active pixels with no distortion, resulting in thinner borders for
            <br className="hidden sm:block" />
            larger 6.3-inch and 6.9-inch Super Retina XDR displays that feel
            <br className="hidden sm:block" />
            great in the hand.
          </p>
        </div>
        <div className="lg:max-w-[300px]">
          <p className="text-[#af9b91] text-xs sm:text-sm md:text-base leading-relaxed">
            iPhone 16 Pro is splash, water, and dust resistant.3 It also has
            <br className="hidden sm:block" />
            our latest-generation Ceramic Shield material that's two times
            <br className="hidden sm:block" />
            tougher than any smartphone glass. Talk about durable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Detiels16;
