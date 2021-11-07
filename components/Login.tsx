import { Button } from "@/components/Button";
import { MouseEvent, useRef, useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { Alert } from "@/components/Alert";
import { Input } from "@/components/Input";

export const Login = () => {
  const loginInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ login?: string; password?: string }>({
    login: "",
    password: "",
  });
  const [isFormSent, setIsFormSent] = useState(false);

  const handleSubmitClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!login && loginInputRef?.current) {
      loginInputRef.current.focus();
    } else if (!password && passwordInputRef?.current) {
      passwordInputRef.current.focus();
    }
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
    <form>
      <SectionTitle title="Вход" />
      {isFormSent && (
        <Alert variant="success">
          Вы успешно залогинились! Можете закрыть модальное окно
        </Alert>
      )}
      {(errors.login || errors.password) && (
        <Alert variant="error">
          Форма не была отправлена, есть ошибки в полях
        </Alert>
      )}
      <div className="mb-10">
        <Input
          ref={loginInputRef}
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
          ref={passwordInputRef}
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
        className="w-full text-xl bg-lightPurple text-black hover:!bg-indigo-300"
      />
    </form>
  );
};
