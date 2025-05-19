import { useInView } from "react-intersection-observer";

export const LocationSection = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="max-w-[1100px] flex flex-col gap-8 justify-center pt-24 px-4">
      <div
        ref={ref1}
        className={`bg-red-800 rounded-[8px] p-3 relative overflow-hidden transition-all duration-700 ease-out transform ${
          inView1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-30"
        }`}
      >
        <div className="bg-red-800 rounded-full absolute top-[-32px] sm:top-[-80px] right-[50%] w-[64px] h-[64px] sm:w-[128px] sm:h-[128px] z-10 translate-x-[50%]" />
        <img
          className="max-w-[520px] w-full rounded-[8px] overflow-hidden"
          alt="location-image"
          src="/images/location-image.webp"
        />
      </div>
      <div
        ref={ref2}
        className={`flex flex-col p-4 gap-8 items-center border rounded-[8px] border-gray-300 shadow-2xl relative transition-all duration-700 ease-out transform ${
          inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-30"
        }`}
      >
        <span className="great-vibes text-[48px] text-red-800">Локация</span>
        <div className="border-b w-full text-center border-gray-300 font-[500] text-[18px]">
          Green House
        </div>
        <a
          target="_blank"
          href="https://yandex.ru/maps/?ll=37.289132%2C56.193576&mode=poi&poi%5Bpoint%5D=37.285133%2C56.193596&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D205743994460&z=17.2"
          className="bg-red-800 text-white px-12 py-4 rounded-[16px]"
        >
          Открыть карту
        </a>
      </div>
    </div>
  );
};
