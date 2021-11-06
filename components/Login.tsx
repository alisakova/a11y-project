import { Button } from "@/components/Button";
import { ChangeEvent, FunctionComponent, MouseEvent, useState } from "react";
import classNames from "classnames";

interface InputProps {
  type: string;
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  errors: Record<string, string>;
  setErrors: (value: Record<string, string>) => void;
  required?: boolean;
  autocomplete?: string;
}

const Input: FunctionComponent<InputProps> = ({
  type = "text",
  id,
  label,
  value,
  onChange,
  errors,
  setErrors,
  required = false,
  autocomplete = "",
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (errors[event.target.id]) {
      setErrors({
        ...errors,
        [event.target.id]: "",
      });
    }
    const value = event.target?.value;
    onChange && onChange(value);
  };

  return (
    <>
      <label htmlFor={id} className="block mb-2 text-lg flex items-center">
        {label}
        {errors?.[id] && (
          // eslint-disable-next-line max-len
          <span className="ml-3 flex items-center justify-center inline-block w-4 h-4 rounded-50% bg-red-600 text-white">
            x
          </span>
        )}
      </label>
      <input
        onChange={handleInputChange}
        value={value}
        type={type}
        id={id}
        aria-describedby={`${id}-error`}
        aria-invalid={!!errors[id]}
        required={required}
        autoComplete={autocomplete}
        className={classNames(
          "bg-inputBg border-lightPurple border h-16 w-full rounded-8px px-4 text-lg",
          {
            "border-red-600": errors?.[id],
          }
        )}
      />
      {errors?.[id] && (
        <span id={`${id}-error`} className="text-red-600">
          {errors[id]}
        </span>
      )}
    </>
  );
};

export const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ login?: string; password?: string }>({
    login: "",
    password: "",
  });
  const [isFormSent, setIsFormSent] = useState(false);

  const handleSubmitClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!login || !password) {
      setErrors({
        ...(!login && { login: "Поле логин обязательно для заполнения" }),
        ...(!password && {
          password: "Поле пароль обязательно для заполнения",
        }),
      });
    } else {
      setIsFormSent(true);
    }
  };

  return (
    <form action="">
      {isFormSent && (
        <div
          role="alert"
          aria-live="polite"
          className="bg-green-200 border border-green-800 p-5 mb-4 rounded-4px flex"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-check-circle mr-4"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          Вы успешно залогинились! Можете закрыть модальное окно
        </div>
      )}
      <div className="mb-10">
        <Input
          type="text"
          id="login"
          label="Логин"
          value={login}
          onChange={setLogin}
          errors={errors}
          setErrors={setErrors}
          autocomplete="name"
          required
        />
      </div>
      <div className="mb-10">
        <Input
          type="password"
          id="password"
          label="Пароль"
          value={password}
          onChange={setPassword}
          errors={errors}
          setErrors={setErrors}
          autocomplete="current-password"
          required
        />
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
