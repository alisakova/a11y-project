import { SearchForm } from "@/components/Header/SearchForm";
import { LanguageSwitcher } from "@/components/Header/LanguageSwitcher";
import { Modal } from "@/components/Modal";
import { Login } from "@/components/Login";
import { useState } from "react";

export const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <header className="py-10 flex items-center justify-between container mx-auto">
      <a href="/">
        <img className="max-w-13rem" src="/logo.png" alt="Логотип государственного музея изобразительных искусств имени А.С. Пушкина" />
      </a>
      <div className="flex items-center">
        <SearchForm />
        <LanguageSwitcher />
        <button className="ml-10" aria-haspopup="dialog" onClick={() => setIsModalVisible(true)}>
          <img src="/user.svg" alt="" />
        </button>
        {isModalVisible && (
          <Modal setIsVisible={setIsModalVisible}>
            <Login />
          </Modal>
        )}
      </div>
    </header>
  )
}