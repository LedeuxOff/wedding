import { useInView } from "react-intersection-observer";

export const DetailsSection = () => {
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
    <div className="max-w-[570px] flex flex-col gap-8 items-center px-4 pt-16 relative">
      <span
        ref={ref1}
        className={`great-vibes text-[48px] text-red-800 relative duration-1000 ease-out transform ${
          inView1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Важные детали
      </span>
      <div
        ref={ref2}
        className={`bg-red-800 rounded-[16px] p-4 flex flex-col gap-4 items-center relative duration-1000 ease-out transform ${
          inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      >
        <span className="great-vibes text-[48px] text-white">Подарки</span>
        <span className="text-center text-white">
          Мы молодая семья, у которой уже есть набор красивого постельного белья
          и посуды. Поэтому лучший подарок для нас в конверте.
        </span>
      </div>

      <div
        ref={ref3}
        className={`bg-red-800 rounded-[16px] p-4 flex flex-col gap-4 items-center relative duration-1000 ease-out transform ${
          inView3 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        }`}
      >
        <span className="great-vibes text-[48px] text-white">Цветы</span>
        <span className="text-center text-white">
          Приятным комплиментом для нас вместо цветов будет бутылочка хорошего
          вина.
        </span>
      </div>
    </div>
  );
};
