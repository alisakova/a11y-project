import { Button } from "@/components/Button";
import { ChangeEvent, FunctionComponent, MouseEvent, useState } from "react";
import classNames from "classnames";
import { SectionTitle } from "@/components/SectionTitle";
import { ErrorMessage } from "@/components/ErrorMessage";
import { SuccessfulAlert } from "@/components/SuccessfulAlert";

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
        <ErrorMessage errorId={`${id}-error`} errorText={errors[id]} />
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
      <SectionTitle title="Вход" />
      {isFormSent && (
        <SuccessfulAlert text="Вы успешно залогинились! Можете закрыть модальное окно" />
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
