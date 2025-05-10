export const WelcomeSection = () => {
  return (
    <div className="max-w-[1100px] flex flex-col items-center relative pt-32 px-16">
      <img
        src="/public/images/flower-1-image.png"
        className="absolute rotate-[180deg] w-[300px] md:w-[360px] right-[-160px] top-[-240px] md:top-[-240px]"
      />

      <div className="flex flex-col items-center relative">
        <div className="flex flex-col items-center absolute top-[-48px] z-100">
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
          src="/public/images/main-image.jpg"
          alt="main-image"
          className="w-full max-w-[420px] grayscale rounded-[8px]"
        />
      </div>

      <div className="flex flex-col items-center gap-2 mt-12">
        <span className="great-vibes text-[48px] text-red-800">
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
