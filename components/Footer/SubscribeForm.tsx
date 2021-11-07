import { Button } from "@/components/Button";
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Alert } from "@/components/Alert";

export const SubscribeForm = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const agreementInputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; agreement?: string }>({
    email: "",
    agreement: "",
  });
  const [isFormSent, setIsFormSent] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (errors.email) {
      setErrors({
        ...errors,
        email: "",
      });
    }
    setEmail(event.target.value);
  };
  const handleAgreementChange = () => {
    if (errors.agreement) {
      setErrors({
        ...errors,
        agreement: "",
      });
    }
    setIsAgreed((prevIsAgreed) => !prevIsAgreed);
  };
  const handleSubmitButton = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!email && emailInputRef?.current) {
      emailInputRef.current.focus();
    } else if (!isAgreed && agreementInputRef?.current) {
      agreementInputRef.current.focus();
    }
    if (!email || !isAgreed) {
      setErrors({
        ...(!email && { email: "Поле email обязательно для заполнения" }),
        ...(!isAgreed && {
          agreement: "Согласие на обработку данных обязательно для заполнения",
        }),
      });
    } else if (
      // eslint-disable-next-line max-len
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        email
      )
    ) {
      setErrors({
        ...errors,
        email: "Для email используйте формат test@mail.ru",
      });
      emailInputRef?.current?.focus();
    } else {
      setIsFormSent(true);
      setEmail("");
      setIsAgreed(false);
    }
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    if (isFormSent) {
      timer = setTimeout(() => {
        setIsFormSent(false);
      }, 5000);
    }
    return () => {
      timer && clearTimeout(timer);
    };
  }, [isFormSent]);

  return (
    <form>
      {isFormSent && (
        <Alert variant="success">Вы успешно подписались на новости</Alert>
      )}
      {(errors.email || errors.agreement) && (
        <Alert variant="error">
          Форма не была отправлена, есть ошибки в полях
        </Alert>
      )}
      <div className="grid grid-cols-[min-content,1fr]">
        <div>
          <label htmlFor="email" className="block mb-2 flex items-center">
            Email
          </label>
          <input
            ref={emailInputRef}
            required
            value={email}
            onChange={handleInputChange}
            id="email"
            type="email"
            placeholder="Введите email"
            aria-describedby="email-error email-pattern"
            aria-invalid={!!errors.email}
            className={classNames(
              "border py-3 mr-5 px-4 bg-transparent w-full rounded-4px sm:w-60",
              {
                "border-red-600": errors.email,
              }
            )}
            autoComplete="email"
          />
          <span id="email-pattern" className="text-gray-800" aria-hidden={true}>
            Пример заполнения: test@mail.ru
          </span>
        </div>
        <ErrorMessage
          className={classNames("col-span-2", {
            hidden: !errors.email,
          })}
          errorId="email-error"
          errorText={errors.email || ""}
        />
        <div className="mt-4 col-span-2">
          <div className="flex items-center">
            <input
              ref={agreementInputRef}
              aria-describedby="agreement-error"
              aria-invalid={!!errors.agreement}
              checked={isAgreed}
              onChange={handleAgreementChange}
              id="agreement"
              type="checkbox"
              className="w-6 h-6 mr-2 cursor-pointer"
              required
            />
            <label htmlFor="agreement" className="cursor-pointer">
              Согласен на обработку персональных данных
            </label>
          </div>
          <ErrorMessage
            className={classNames({
              hidden: !errors.agreement,
            })}
            errorId="agreement-error"
            errorText={errors.agreement || ""}
          />
        </div>
        <Button
          onClick={handleSubmitButton}
          type="submit"
          text="Подписаться"
          className="w-full mt-4 sm:mt-0 sm:w-auto focus:outline-blue row-start-1 row-end-2 col-start-2 col-end-3
          justify-self-start self-center"
        />
      </div>
    </form>
  );
};
