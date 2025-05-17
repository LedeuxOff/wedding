import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const TimerSection = () => {
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

  const targetDate: Date = new Date("2025-08-16T00:00:00");

  const calculateTimeLeft = (): TimeLeft => {
    const now: Date = new Date();
    const difference: number = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-[1100px] flex flex-col justify-center pt-24 px-4">
      <span
        ref={ref3}
        className={`great-vibes text-center text-[48px] text-red-800 transition-all relative duration-1000 ease-out transform ${
          inView3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        До свадьбы осталось
      </span>
      <div className="flex justify-between gap-4 mt-8">
        <div
          ref={ref1}
          className={`flex flex-col items-center gap-4 relative transition-all duration-1000 ease-out transform ${
            inView1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
          }`}
        >
          <div className="bg-red-800 rounded-full w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] flex justify-center items-center text-white font-[500]">
            {timeLeft.days}
          </div>
          <span>Дней</span>
        </div>
        <div
          ref={ref2}
          className={`flex flex-col items-center gap-4 relative transition-all duration-1000 ease-out transform ${
            inView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="bg-red-800 rounded-full w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] flex justify-center items-center text-white font-[500]">
            {timeLeft.hours}
          </div>
          <span>Часов</span>
        </div>
        <div
          ref={ref1}
          className={`flex flex-col items-center gap-4 relative transition-all duration-1000 ease-out transform ${
            inView1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
          }`}
        >
          <div className="bg-red-800 rounded-full w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] flex justify-center items-center text-white font-[500]">
            {timeLeft.minutes}
          </div>
          <span>Минут</span>
        </div>
        <div
          ref={ref2}
          className={`flex flex-col items-center gap-4 relative transition-all duration-1000 ease-out transform ${
            inView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="bg-red-800 rounded-full w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] flex justify-center items-center text-white font-[500]">
            {timeLeft.seconds}
          </div>
          <span>Секунд</span>
        </div>
      </div>
    </div>
  );
};
