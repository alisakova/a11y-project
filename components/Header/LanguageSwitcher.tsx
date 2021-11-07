export const LanguageSwitcher = () => {
  return (
    <nav aria-label="Выбрать язык" className="sm:ml-auto">
      <span className="rounded-4px p-4 bg-lightPurple mr-2 border border-lightPurple text-xl">
        <span aria-hidden="true">RU</span>
        <span className="visually-hidden">Выбранный язык: Русский</span>
      </span>
      <a
        href="/"
        hrefLang="en"
        aria-label="Английский язык"
        //eslint-disable-next-line max-len
        className="rounded-4px p-4 bg-lightPurple border border-lightPurple hover:bg-indigo-300 focus:bg-mainPurple focus:text-white group text-xl"
      >
        <span className="border-b border-black group-focus:border-white">
          EN
        </span>
      </a>
    </nav>
  );
};
