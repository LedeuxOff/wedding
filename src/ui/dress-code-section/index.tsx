import { useInView } from "react-intersection-observer";

export const DressCodeSection = () => {
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
    <div className="max-w-[570px] flex flex-col gap-4 items-center px-4 relative">
      <img
        ref={ref1}
        alt="flower-image"
        src="/images/flower-1-image.png"
        className={`absolute top-[-100px] w-[200px] left-[-90px] sm:w-[400px] sm:left-[-240px] sm:top-[-240px] duration-1000 ease-out transform ${
          inView1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      />
      <span
        ref={ref2}
        className={`great-vibes text-red-800 text-[48px] relative duration-1000 ease-out transform ${
          inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      >
        Дресс-код
      </span>
      <span
        className={`text-center w-max-[520px] relative duration-1000 ease-out transform ${
          inView2 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        }`}
      >
        Пожалуйста, приходите в красивой одежде, которая соответствует
        торжественному настроению. Мы будем рады, если вы поддержите цветовую
        палитру нашей свадьбы.
      </span>
      <div
        ref={ref3}
        className={`flex justify-between w-full max-w-[400px] mt-8 relative duration-1000 ease-out transform ${
          inView3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <img
          className="w-[64px] h-[64px] rounded-full"
          alt="black"
          src="/images/dress-code/black.png"
        />
        <img
          className="w-[64px] h-[64px] rounded-full"
          alt="black"
          src="/images/dress-code/green.png"
        />
        <img
          className="w-[64px] h-[64px] rounded-full"
          alt="black"
          src="/images/dress-code/brown.png"
        />
        <img
          className="w-[64px] h-[64px] rounded-full"
          alt="black"
          src="/images/dress-code/gray.png"
        />
        <img
          className="w-[64px] h-[64px] rounded-full"
          alt="black"
          src="/images/dress-code/red.png"
        />
      </div>
    </div>
  );
};
