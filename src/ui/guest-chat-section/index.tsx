import { useInView } from "react-intersection-observer";

export const GuestChatSection = () => {
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
          inView1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      >
        Чат для гостей
      </span>
      <span
        ref={ref2}
        className={`text-center text-black relative duration-1000 ease-out transform ${
          inView2 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        }`}
      >
        Вступайте в наш общий чат в Telegram, чтобы делиться впечатлениями,
        эмоциями, фото и видео.
      </span>

      <img
        ref={ref3}
        alt="tg-qr"
        src="/public/images/telegram-qr.jpg"
        className={`w-full max-w-[420px] duration-1000 ease-out transform ${
          inView3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      />

      <a
        className="bg-red-800 rounded-[16px] px-8 py-4 text-white"
        href="https://t.me/+C_tYU-NizzI0NmMy"
        target="_blank"
      >
        Вступить в чат
      </a>

      <div className="mt-8 flex flex-col items-center">
        <span className="great-vibes text-[48px] text-red-800">Ждём Вас!</span>
        <img
          alt="heart-image"
          src="/public/images/heart-image.png"
          className="w-[100px]"
        />
      </div>
    </div>
  );
};
