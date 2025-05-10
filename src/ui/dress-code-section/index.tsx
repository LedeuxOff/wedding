export const DressCodeSection = () => {
  return (
    <div className="max-w-[620px] flex flex-col gap-4 items-center px-4 relative">
      <img
        alt="flower-image"
        src="/public/images/flower-1-image.png"
        className="absolute top-[-100px] w-[200px] left-[-90px] sm:w-[400px] sm:left-[-240px] sm:top-[-240px]"
      />
      <span className="great-vibes text-red-800 text-[48px]">Дресс-код</span>
      <span className="text-center w-max-[520px]">
        Пожалуйста, приходите в красивой одежде, которая соответствует
        торжественному настроению. Мы будем рады, если вы поддержите цветовую
        палитру нашей свадьбы.
      </span>
      <div className="flex justify-between w-full max-w-[400px] mt-8">
        <img
          className="w-[64px] h-[64px] rounded-full"
          alt="black"
          src="/public/images/dress-code/black.png"
        />
        <img
          className="w-[64px] h-[64px] rounded-full"
          alt="black"
          src="/public/images/dress-code/green.png"
        />
        <img
          className="w-[64px] h-[64px] rounded-full"
          alt="black"
          src="/public/images/dress-code/brown.png"
        />
        <img
          className="w-[64px] h-[64px] rounded-full"
          alt="black"
          src="/public/images/dress-code/gray.png"
        />
        <img
          className="w-[64px] h-[64px] rounded-full"
          alt="black"
          src="/public/images/dress-code/red.png"
        />
      </div>
    </div>
  );
};
