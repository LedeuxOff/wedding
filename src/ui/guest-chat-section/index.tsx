export const GuestChatSection = () => {
  return (
    <div className="max-w-[480px] flex flex-col gap-8 items-center px-4 pt-16 relative">
      <span className="great-vibes text-[48px] text-red-800">
        Чат для гостей
      </span>
      <span className="text-center text-black">
        Вступайте в наш общий чат в Telegram, чтобы делиться впечатлениями,
        эмоциями, фото и видео.
      </span>

      <a className="bg-red-800 rounded-[16px] px-8 py-4 text-white">
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
