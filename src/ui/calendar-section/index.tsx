export const CalendarSection = () => {
  return (
    <div className="max-w-[1100px] flex flex-col justify-center pt-16 px-16">
      <div className="flex gap-4 relative">
        <img
          className="absolute left-[-160px] top-16 w-[200px] sm:top-16 sm:left-[-300px] sm:w-[300px] z-[-1]"
          alt="flower-2-img"
          src="/public/images/flower-2-image.png"
        />
        <img
          className="absolute w-[96px] right-[12px] top-[16px] sm:right-[28px] sm:top-[32px]"
          alt="heart-img"
          src="/public/images/heart-line-image.png"
        />
        <div className="flex flex-col items-center gap-4">
          <span className="font-[500] text-[24px] sm:text-[32px]">ПН</span>
          <span className="font-[400] text-[24px] sm:text-[32px]">11</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="font-[500] text-[24px] sm:text-[32px]">ВТ</span>
          <span className="font-[400] text-[24px] sm:text-[32px]">12</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="font-[500] text-[24px] sm:text-[32px]">СР</span>
          <span className="font-[400] text-[24px] sm:text-[32px]">13</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="font-[500] text-[24px] sm:text-[32px]">ЧТ</span>
          <span className="font-[400] text-[24px] sm:text-[32px]">14</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="font-[500] text-[24px] sm:text-[32px]">ПТ</span>
          <span className="font-[400] text-[24px] sm:text-[32px]">15</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="font-[500] text-[24px] sm:text-[32px] text-red-800">
            СБ
          </span>
          <span className="font-[400] text-[24px] sm:text-[32px]">16</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="font-[500] text-[24px] sm:text-[32px] text-red-800">
            ВС
          </span>
          <span className="font-[400] text-[24px] sm:text-[32px]">17</span>
        </div>
      </div>
      <span className="great-vibes text-right text-[48px] text-red-800 mt-12 mr-6">
        Август
      </span>
    </div>
  );
};
