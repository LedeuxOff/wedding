import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const TimerSection = () => {
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
      <span className="great-vibes text-[48px] text-red-800">
        До свадьбы осталось
      </span>
      <div className="flex justify-between gap-4 mt-8">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-red-800 rounded-full w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] flex justify-center items-center text-white font-[500]">
            {timeLeft.days}
          </div>
          <span>Дней</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="bg-red-800 rounded-full w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] flex justify-center items-center text-white font-[500]">
            {timeLeft.hours}
          </div>
          <span>Часов</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="bg-red-800 rounded-full w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] flex justify-center items-center text-white font-[500]">
            {timeLeft.minutes}
          </div>
          <span>Минут</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="bg-red-800 rounded-full w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] flex justify-center items-center text-white font-[500]">
            {timeLeft.seconds}
          </div>
          <span>Секунд</span>
        </div>
      </div>
    </div>
  );
};
