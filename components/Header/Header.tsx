import { SearchForm } from "@/components/Header/SearchForm";
import { LanguageSwitcher } from "@/components/Header/LanguageSwitcher";
import { Modal } from "@/components/Modal";
import { Login } from "@/components/Login";
import { useRef, useState } from "react";

export const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModalButton = useRef<HTMLButtonElement>(null);

  return (
    <header className="py-10">
      <div className="container mx-auto flex flex-wrap items-center justify-between lg:flex-row">
        <img
          className="max-w-13rem"
          src="/logo.png"
          alt="Логотип государственного музея изобразительных искусств имени А.С. Пушкина"
        />
        <div className="flex flex-col sm:items-center sm:flex-row flex-wrap w-full lg:w-auto">
          <SearchForm />
          <div className="flex items-center">
            <LanguageSwitcher />
            <button
              ref={openModalButton}
              className="ml-10"
              aria-haspopup="dialog"
              aria-label="Открыть форму входа"
              onClick={() => setIsModalVisible(true)}
            >
              <img src="/user.svg" alt="" />
            </button>
            {isModalVisible && (
              <Modal
                setIsVisible={setIsModalVisible}
                openModalButton={openModalButton}
              >
                <Login />
              </Modal>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
