import { ChangeEvent, forwardRef } from "react";
import classNames from "classnames";
import { ErrorMessage } from "@/components/ErrorMessage";

interface Props {
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

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      type = "text",
      id,
      label,
      value,
      onChange,
      errors,
      setErrors,
      required = false,
      autocomplete = "",
    },
    ref
  ) => {
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
          ref={ref}
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
  }
);

Input.displayName = "Input";
