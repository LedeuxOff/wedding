export const DayPlanSection = () => {
  return (
    <div className="max-w-[720px] flex flex-col gap-4 items-center pt-24 px-4 relative">
      <span className="great-vibes text-[48px] text-red-800">План дня</span>
      <img
        className="absolute rotate-[180deg] top-[-70px] right-[-200px] sm:right-[-300px] w-[500px]"
        alt="flower-image"
        src="/public/images/flower-1-image.png"
      />
      <div className="flex gap-1 relative mt-[-48px]">
        <div className="absolute flex flex-col top-66 left-[-90px] max-w-[130px] sm:max-w-[220px] sm:left-[-200px]">
          <span className="great-vibes text-red-800 text-[48px] leading-12">
            15:30
          </span>
          <span className="font-[500]">ЦЕРЕМОНИЯ</span>
          <span className="leading-5">
            Не исключено, что вам потребуются платочки для этого трогательного
            момента
          </span>
        </div>
        <div className="absolute flex flex-col top-144 left-[-90px] max-w-[130px] sm:max-w-[220px] sm:left-[-200px]">
          <span className="great-vibes text-red-800 text-[48px] leading-12">
            21:30
          </span>
          <span className="font-[500]">НОЧНОЙ КОСТЁР</span>
          <span className="leading-5">
            Любовь, тёплый плед и песни под гитару перед настоящим костром
          </span>
        </div>
        <img
          className="msx-h-[904px]"
          alt="day-plan-image"
          src="/public/images/pulse-image.png"
        />
        <div className="absolute flex flex-col top-28 right-[-120px] max-w-[130px] sm:max-w-[220px] sm:right-[-240px]">
          <span className="great-vibes text-red-800 text-[48px] leading-12">
            14:00
          </span>
          <span className="font-[500]">ФУРШЕТ</span>
          <span className="leading-5">
            Cбор гостей в нашей прекрасной локации
          </span>
        </div>

        <div className="absolute flex flex-col top-102 right-[-120px] max-w-[130px] sm:max-w-[220px] sm:right-[-240px]">
          <span className="great-vibes text-red-800 text-[48px] leading-12">
            16:00
          </span>
          <span className="font-[500]">СВАДБЕНЫЙ УЖИН</span>
          <span className="leading-5">
            Вкусная еда и весёлая программа от нашего крутого ведущего
          </span>
        </div>

        <div className="absolute flex flex-col top-172 right-[-120px] max-w-[130px] sm:max-w-[220px] sm:right-[-240px]">
          <span className="great-vibes text-red-800 text-[48px] leading-12">
            22:30
          </span>
          <span className="font-[500]">ФИНАЛ</span>
          <span className="leading-5">
            Даже такая вечеринка может закончиться
          </span>
        </div>
      </div>
    </div>
  );
};
