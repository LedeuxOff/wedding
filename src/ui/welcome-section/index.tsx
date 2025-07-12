import { guestData } from "../../config/guests-data";
import { useInView } from "react-intersection-observer";
import { useSearchParams } from "react-router-dom";

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

  const [searchParams] = useSearchParams();
  const inviteId = searchParams.get("id");

  const guestInviteData = guestData.find((item) => item.id === inviteId);

  return (
    <div className="max-w-[1100px] flex flex-col items-center relative pt-16 px-16 gap-16">
      <img
        ref={ref3}
        src="/images/flower-1-image.png"
        className={`absolute rotate-[180deg] w-[300px] md:w-[360px] right-[-170px] md:right-[-230px] top-[-240px] md:top-[-240px] transition-all duration-1000 ease-out transform ${
          inView3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      />

      <div
        ref={ref2}
        className={`flex flex-col items-center z-100 transition-all duration-1000 ease-out transform ${
          inView2 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <span className="great-vibes text-[64px] leading-9 text-red-800">
          Никита
        </span>
        <span className="great-vibes text-[48px] leading-9 text-red-800">
          и
        </span>
        <span className="great-vibes text-[64px] leading-9 text-red-800">
          Анастасия
        </span>
      </div>

      <div className="relative mt-8">
        <img
          ref={ref1}
          src="/images/img-border.png"
          alt="main-image"
          className={`absolute top-[9px] w-full max-w-[420px] scale-139 transition-all duration-1400 ease-out transform ${
            inView1 ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="max-w-[570px] flex flex-col items-center relative rounded-[8px] overflow-hidden shadow-md">
          <img
            ref={ref1}
            src="/images/main-image.jpg"
            alt="main-image"
            className={`w-full max-w-[280px] scale-130 transition-all duration-1400 ease-out transform ${
              inView1 ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      <div
        ref={ref4}
        className={`max-w-[570px] flex flex-col items-center gap-2 mt-12 relative transition-all duration-1000 ease-out transform ${
          inView4 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <span className="great-vibes text-[48px] text-red-800 text-center">
          {guestInviteData?.title || "Дорогие гости!"}
        </span>
        <span className="text-center text-[18px]">
          Приглашаем {guestInviteData?.count === 1 ? "Тебя" : "Вас"} разделить
          радостный день, в который мы станем семьёй!
        </span>
      </div>
    </div>
  );
};
