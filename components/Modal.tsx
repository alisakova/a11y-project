import { SectionTitle } from "@/components/SectionTitle";
import { useEffect } from "react";

export const Modal = ({ isVisible, setIsVisible = () => {}, children }) => {
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.classList.add("overflow");
    }

    return () => {
      if (html) {
        html.classList.remove("overflow");
      }
    }
  }, []);

  return (
    <div className="w-full h-screen absolute top-0 left-0 z-1001 bg-modalBg">
      <div
        className="w-full h-screen flex items-center justify-center"
      >
        <div
          tabIndex={-1}
          aria-modal="true"
          aria-labelledby="modalHeading"
          role="dialog"
          className="max-w-3xl w-full relative z-1002 bg-white py-[70px] px-[150px]"
        >
          <SectionTitle title="Вход" />
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Закрыть"
            className="cursor-pointer absolute top-5 right-5 w-10 h-10 text-xl"
          >
            X
          </button>
          {children}
        </div>
      </div>
    </div>
  )
}