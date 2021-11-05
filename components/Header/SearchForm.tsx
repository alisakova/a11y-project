import { MouseEvent } from "react";

export const SearchForm = () => {
  const handleSearchButton = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    // TODO: remove submit on form
    <form role="search" className="mr-4 relative mb-5 sm:mb-0">
      {/*TODO: change bg color, make it more contrast */}
      <input
        className="w-full pl-4 pr-10 min-w-295px rounded-26px h-12 bg-inputBg border border-lightPurple"
        type="search"
        aria-label="Поисковый запрос"
      />
      <button
        onClick={handleSearchButton}
        className="absolute w-8 h-8 top-1/2 flex items-center justify-center -translate-y-1/2 right-2"
        type="submit"
      >
        <img src="/search.svg" alt="Поиск" />
      </button>
    </form>
  );
};
