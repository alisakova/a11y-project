export const LanguageSwitcher = () => {
  return (
    <nav aria-label="Выбрать язык">
      <span className="rounded-4px p-4 bg-lightPurple mr-2 border border-lightPurple text-xl">
        <span aria-hidden="true">RU</span>
        <span className="visually-hidden">Русский</span>
      </span>
      <a
        href="/en"
        hrefLang="en"
        aria-label="Английский"
        className="rounded-4px p-4 bg-lightPurple border border-lightPurple hover:bg-indigo-300 focus:bg-indigo-400 text-xl"
      >
        <span className="border-b border-black">EN</span>
      </a>
    </nav>
  )
}