import { Button } from "@/components/Button";
import { FunctionComponent, MouseEvent } from "react";

interface InputProps {
  type: string;
  id: string;
  label: string;
}

const Input: FunctionComponent<InputProps> = ({ type = "text", id, label }) => {
  return (
    <>
      <label htmlFor={id} className="block mb-2 text-lg">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="bg-inputBg border-lightPurple border h-16 w-full rounded-8px px-4 text-lg"
      />
    </>
  );
};

export const Login = () => {
  const handleSubmitClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <form action="">
      <div className="mb-10">
        <Input type="text" id="login" label="Логин" />
      </div>
      <div className="mb-10">
        <Input type="password" id="password" label="Пароль" />
      </div>
      <Button
        onClick={handleSubmitClick}
        type="submit"
        text="Вход"
        className="w-full text-xl bg-lightPurple text-black"
      />
    </form>
  );
};
