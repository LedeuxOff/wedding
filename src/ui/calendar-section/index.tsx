import { useInView } from "react-intersection-observer";

export const CalendarSection = () => {
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

  return (
    <div className="max-w-[1100px] flex flex-col justify-center pt-16 px-16">
      <div className="flex gap-4 relative">
        <img
          ref={ref1}
          className={`absolute left-[-160px] top-16 w-[200px] sm:top-16 sm:left-[-300px] sm:w-[300px] z-[-1] transition-all duration-1000 ease-out transform ${
            inView1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
          alt="flower-2-img"
          src="/public/images/flower-2-image.png"
        />
        <img
          ref={ref3}
          className={`absolute w-[96px] right-[12px] top-[16px] sm:right-[28px] sm:top-[32px] transition-all duration-1000 ease-out transform ${
            inView3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-40"
          }`}
          alt="heart-img"
          src="/public/images/heart-line-image.png"
        />
        <div
          ref={ref2}
          className={`flex gap-4 relative transition-all duration-1000 ease-out transform ${
            inView2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-4">
            <span className="font-[500] text-[24px] sm:text-[32px]">ПН</span>
            <span className="font-[400] text-[24px] sm:text-[32px]">11</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="font-[500] text-[24px] sm:text-[32px]">ВТ</span>
            <span className="font-[400] text-[24px] sm:text-[32px]">12</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="font-[500] text-[24px] sm:text-[32px]">СР</span>
            <span className="font-[400] text-[24px] sm:text-[32px]">13</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="font-[500] text-[24px] sm:text-[32px]">ЧТ</span>
            <span className="font-[400] text-[24px] sm:text-[32px]">14</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="font-[500] text-[24px] sm:text-[32px]">ПТ</span>
            <span className="font-[400] text-[24px] sm:text-[32px]">15</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="font-[500] text-[24px] sm:text-[32px] text-red-800">
              СБ
            </span>
            <span className="font-[400] text-[24px] sm:text-[32px]">16</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="font-[500] text-[24px] sm:text-[32px] text-red-800">
              ВС
            </span>
            <span className="font-[400] text-[24px] sm:text-[32px]">17</span>
          </div>
        </div>
      </div>
      <span
        className={`great-vibes text-right text-[48px] text-red-800 mt-12 mr-2 transition-all duration-1000 ease-out transform ${
          inView3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-40"
        }`}
      >
        Август
      </span>
    </div>
  );
};
