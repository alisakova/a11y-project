import { Button } from "@/components/Button";
import { ChangeEvent, MouseEvent, useState } from "react";
import classNames from "classnames";
import { ErrorMessage } from "@/components/ErrorMessage";
import { SuccessfulAlert } from "@/components/SuccessfulAlert";

export const SubscribeForm = () => {
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
    } else {
      setIsFormSent(true);
      setEmail("");
      setIsAgreed(false);
    }
  };

  return (
    <form>
      {isFormSent && (
        <SuccessfulAlert text="Вы успешно подписались на новости" />
      )}
      <div>
        <div>
          <label htmlFor="email" className="block mb-2 flex items-center">
            Email
          </label>
          <input
            required
            value={email}
            onChange={handleInputChange}
            id="email"
            type="email"
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
          <Button
            onClick={handleSubmitButton}
            type="submit"
            text="Подписаться"
            className="w-full mt-4 sm:mt-0 sm:w-auto"
          />
        </div>
        <span id="email-pattern" className="text-gray-800">
          Пример заполнения: test@mail.ru
        </span>
        <ErrorMessage
          className={classNames({
            hidden: !errors.email,
          })}
          errorId="email-error"
          errorText={errors.email || ""}
        />
      </div>
      <div className="mt-4">
        <div className="flex items-center">
          <input
            aria-checked={isAgreed}
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
    </form>
  );
};
