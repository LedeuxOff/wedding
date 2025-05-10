export const DetailsSection = () => {
  return (
    <div className="max-w-[480px] flex flex-col gap-8 items-center px-4 pt-16 relative">
      <span className="great-vibes text-[48px] text-red-800">
        Важные детали
      </span>
      <div className="bg-red-800 rounded-[16px] p-4 flex flex-col gap-4 items-center">
        <span className="great-vibes text-[48px] text-white">Подарки</span>
        <span className="text-center text-white">
          Мы молодая семья, у которой уже есть набор красивого постельного белья
          и посуды. Поэтому лучший подарок для нас в конверте.
        </span>
      </div>

      <div className="bg-red-800 rounded-[16px] p-4 flex flex-col gap-4 items-center">
        <span className="great-vibes text-[48px] text-white">Цветы</span>
        <span className="text-center text-white">
          После свадьбы мы собираемся в свадебное путешествие, поэтому вместо
          букета мы были бы рады бутылке вашего любимого напитка.
        </span>
      </div>
    </div>
  );
};
