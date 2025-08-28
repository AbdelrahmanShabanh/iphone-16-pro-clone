import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// تسجيل ScrollTrigger مع GSAP
gsap.registerPlugin(ScrollTrigger);

const Wide = () => {
  const [activeFocal, setActiveFocal] = useState("13mm");
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const imageBoxRef = useRef(null);
  const focalOptionsRef = useRef(null);

  // تعريف الصور لكل focal length
  const focalImages = {
    macro: "/assets/images/macro__n1qy7scdy6qi_xlarge.jpg",
    "13mm": "/assets/images/13mm__dj995tp6l066_xlarge.jpg",
    "24mm": "/assets/images/24mm__evvsnq405iye_xlarge.jpg",
    "28mm": "/assets/images/28mm__du3mwh4nbeye_xlarge.jpg",
    "35mm": "/assets/images/35mm__c0a8s9ucto02_xlarge.jpg",
    "48mm": "/assets/images/48mm__dvculcs2aaie_xlarge.jpg",
    "120mm": "/assets/images/120mm__9cdxnei9bnmy_xlarge.jpg",
  };

  // تعريف focal lengths مع labels
  const focalLengths = [
    { value: "macro", label: "Macro" },
    { value: "13mm", label: "13 mm" },
    { value: "24mm", label: "24 mm" },
    { value: "28mm", label: "28 mm" },
    { value: "35mm", label: "35 mm" },
    { value: "48mm", label: "48 mm" },
    { value: "120mm", label: "120 mm" },
  ];

  // دالة تغيير الصورة مع animation
  const changeImage = (focalValue) => {
    if (focalValue === activeFocal) return;

    setActiveFocal(focalValue);

    // إضافة fade out effect
    gsap.to(imageRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        // تغيير الصورة
        if (imageRef.current) {
          imageRef.current.src = focalImages[focalValue];
        }
        // إضافة fade in effect
        gsap.to(imageRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      },
    });
  };

  // دالة تحميل العناصر مع animations
  useEffect(() => {
    // إخفاء العناصر في البداية
    gsap.set([titleRef.current, imageBoxRef.current, focalOptionsRef.current], {
      opacity: 0,
      y: 50,
    });

    // إنشاء timeline للـ animations مع ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // يبدأ عندما يصل أعلى العنصر إلى 80% من الشاشة
        end: "bottom 20%", // ينتهي عندما يصل أسفل العنصر إلى 20% من الشاشة
        toggleActions: "play none none reverse", // يلعب عند الدخول ويعكس عند الخروج
        markers: false, // إزالة العلامات للـ production
      },
    });

    // العنوان يظهر أولاً
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    });

    // مربع الصورة يظهر ثانياً
    tl.to(
      imageBoxRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // خيارات Focal Length تظهر ثالثاً
    tl.to(
      focalOptionsRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.2"
    );

    // تنظيف ScrollTrigger عند unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative py-20 w-full bg-black">
      <div className="px-4 mx-auto max-w-6xl">
        {/* العنوان */}
        <div ref={titleRef} className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Ultra Wide Camera
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Experience the world from a new perspective with our advanced Ultra
            Wide camera system
          </p>
        </div>

        {/* الحاوية الرئيسية */}
        <div className="flex flex-col gap-12 justify-center items-center lg:flex-row">
          {/* مربع الصورة */}
          <div
            ref={imageBoxRef}
            className="overflow-hidden relative w-full max-w-2xl bg-gray-900 rounded-2xl shadow-2xl aspect-square"
          >
            <img
              ref={imageRef}
              src={focalImages[activeFocal]}
              alt={`${activeFocal} focal length`}
              className="object-cover w-full h-full transition-opacity duration-500"
            />

            {/* Overlay للمعلومات */}
            <div className="absolute right-4 bottom-4 left-4">
              <div className="p-4 bg-black bg-opacity-70 rounded-lg backdrop-blur-sm">
                <h3 className="mb-1 text-lg font-semibold text-white">
                  {activeFocal === "macro"
                    ? "Macro"
                    : `${activeFocal} Ultra Wide`}
                </h3>
                <p className="text-sm text-gray-300">
                  {activeFocal === "macro"
                    ? "Capture stunning close-up details"
                    : "Wide-angle photography at its finest"}
                </p>
              </div>
            </div>
          </div>

          <div ref={focalOptionsRef} className="w-full max-w-md">
            <h3 className="mb-6 text-xl font-semibold text-center text-white lg:text-left">
              Focal Length Options
            </h3>

            <div className="space-y-3">
              {focalLengths.map((focal) => (
                <button
                  key={focal.value}
                  onClick={() => changeImage(focal.value)}
                  className={`w-full p-4 rounded-xl transition-all duration-300 ease-out transform hover:scale-105 ${
                    activeFocal === focal.value
                      ? "bg-white text-black shadow-lg"
                      : "bg-[#312d00] text-white hover:bg-[#5f5a24]"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">{focal.label}</span>
                    {activeFocal === focal.value && (
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wide;
