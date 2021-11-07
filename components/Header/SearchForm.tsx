import { MouseEvent, useEffect, useRef, useState } from "react";

export const SearchForm = () => {
  const searchButton = useRef<HTMLButtonElement>(null);
  const [isSearchRequestSent, setSearchRequestSent] = useState(false);
  const handleSearchButton = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSearchRequestSent(true);
  };

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Space") {
        setSearchRequestSent(true);
      }
    };
    if (searchButton?.current) {
      searchButton.current.addEventListener("keyup", handleKeyUp);
    }
    return () => {
      if (searchButton?.current) {
        searchButton.current.removeEventListener("keyup", handleKeyUp);
      }
    };
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    if (isSearchRequestSent) {
      timer = setTimeout(() => {
        setSearchRequestSent(false);
      }, 5000);
    }
    return () => {
      timer && clearTimeout(timer);
    };
  }, [isSearchRequestSent]);

  return (
    <form role="search" className="mr-4 relative mb-5 sm:mb-0">
      {isSearchRequestSent && (
        <div role="alert" aria-live="polite" className="visually-hidden">
          Если бы поиск работал, то сейчас открылась бы страница с результатами.
          Но он не работает, извините!
        </div>
      )}
      <input
        className="w-full pl-4 pr-10 min-w-295px rounded-26px h-12 bg-inputBg
        border border-mainPurple focus:outline-blue"
        type="search"
        placeholder="Введите запрос..."
        aria-label="Поисковый запрос"
      />
      <button
        ref={searchButton}
        onClick={handleSearchButton}
        className="absolute w-8 h-8 top-1/2 flex items-center justify-center -translate-y-1/2 right-2"
        type="submit"
      >
        <img src="/search.svg" alt="Поиск" />
      </button>
    </form>
  );
};
