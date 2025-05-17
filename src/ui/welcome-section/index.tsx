import { useInView } from "react-intersection-observer";

export const WelcomeSection = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: ref4, inView: inView4 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="max-w-[1100px] flex flex-col items-center relative pt-32 px-16">
      <img
        ref={ref3}
        src="/public/images/flower-1-image.png"
        className={`absolute rotate-[180deg] w-[300px] md:w-[360px] right-[-170px] md:right-[-230px] top-[-240px] md:top-[-240px] transition-all duration-1000 ease-out transform ${
          inView3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      />

      <div className="max-w-[570px] flex flex-col items-center relative">
        <div
          ref={ref2}
          className={`flex flex-col items-center absolute top-[-48px] z-100 transition-all duration-1000 ease-out transform ${
            inView2 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <span className="great-vibes text-[48px] leading-9 text-red-800">
            Никита
          </span>
          <span className="great-vibes text-[36px] leading-9 text-red-800">
            &
          </span>
          <span className="great-vibes text-[48px] leading-9 text-red-800">
            Анастасия
          </span>
        </div>
        <img
          ref={ref1}
          src="/public/images/main-image.jpg"
          alt="main-image"
          className={`w-full max-w-[420px] grayscale rounded-[8px] transition-all duration-1400 ease-out transform ${
            inView1 ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div
        ref={ref4}
        className={`max-w-[570px] flex flex-col items-center gap-2 mt-12 relative transition-all duration-1000 ease-out transform ${
          inView4 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <span className="great-vibes text-[48px] text-red-800 text-center">
          Дорогие гости!
        </span>
        <span className="text-center text-[18px]">
          Мы приглашаем Вас разделить с нами радостный день, в который мы станем
          семьёй!
        </span>
      </div>
    </div>
  );
};
