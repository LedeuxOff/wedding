export const CalendarSection = () => {
  return (
    <div className="max-w-[1100px] flex justify-center pt-16">
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-4">
          <span className="font-[500] text-[32px]">ПН</span>
          <span className="font-[400] text-[32px]">11</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="font-[500] text-[32px]">ВТ</span>
          <span className="font-[400] text-[32px]">12</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="font-[500] text-[32px]">СР</span>
          <span className="font-[400] text-[32px]">13</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="font-[500] text-[32px]">ЧТ</span>
          <span className="font-[400] text-[32px]">15</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="font-[500] text-[32px]">ПТ</span>
          <span className="font-[400] text-[32px]">16</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="font-[500] text-[32px] text-red-800">СБ</span>
          <span className="font-[400] text-[32px]">17</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="font-[500] text-[32px] text-red-800">ВС</span>
          <span className="font-[400] text-[32px]">18</span>
        </div>
      </div>
    </div>
  );
};
