import { SectionTitle } from "@/components/SectionTitle";
import { FunctionComponent, RefObject, useEffect, useRef } from "react";

interface Props {
  setIsVisible: (visible: boolean) => void;
  openModalButton: RefObject<HTMLButtonElement> | null;
  modalTitle?: string;
}

export const Modal: FunctionComponent<Props> = ({ setIsVisible, modalTitle, children, openModalButton }) => {
  const modal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modal && modal.current) {
      modal.current.focus();
    }
    const html = document.querySelector("html");
    if (html) {
      html.classList.add("overflow");
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsVisible(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      const  focusableElements =
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const modal = document.querySelector('#modal'); // select the modal by it's id
      if (modal) {
        const firstFocusableElement = modal.querySelectorAll(focusableElements)[0] as HTMLElement; // get first element to be focused inside modal
        const focusableContent = modal.querySelectorAll(focusableElements);
        const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement; // get last element to be focused inside modal

        let isTabPressed = event.key === 'Tab' || event.keyCode === 9;

        if (!isTabPressed) {
          return;
        }

        if (event.shiftKey) { // if shift key pressed for shift + tab combination
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement?.focus();
            event.preventDefault();
          }
        } else { // if tab key is pressed
          if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
            firstFocusableElement?.focus();
            event.preventDefault();
          }
        }
      }
    }
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      openModalButton?.current?.focus();
      document.removeEventListener("keyup", handleKeyUp);
      document.addEventListener("keydown", handleKeyDown);
      if (html) {
        html.classList.remove("overflow");
      }
    };
  }, []);

  return (
    <div className="w-full h-screen absolute top-0 left-0 z-1001 bg-modalBg">
      <div className="w-full h-screen flex items-center justify-center">
        <div
          id="modal"
          ref={modal}
          tabIndex={-1}
          aria-modal="true"
          aria-labelledby="modalHeading"
          role="dialog"
          className="max-w-3xl w-full relative z-1002 bg-white py-[70px] px-10 md:px-[150px]"
        >
          {modalTitle && <SectionTitle title={modalTitle} />}
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
  );
};
