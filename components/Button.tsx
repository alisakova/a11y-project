import classNames from "classnames";
import { FunctionComponent, MouseEvent } from "react";

const buttonClassName =
  "bg-mainPurple text-white px-5 py-3 rounded-8px hover:bg-[#300085] focus:outline-blue";

interface Props {
  type?: "button" | "submit" | "reset";
  link?: string;
  text: string;
  className?: string;
  ariaLabel?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FunctionComponent<Props> = ({
  type = "button",
  link = "",
  text,
  className = "",
  ariaLabel = "",
  onClick,
}) => {
  if (link) {
    return (
      <a
        href={link}
        className={classNames(buttonClassName, className)}
        aria-label={ariaLabel}
      >
        {text}
      </a>
    );
  }
  return (
    <button
      onClick={(event) => onClick && onClick(event)}
      type={type}
      className={classNames(buttonClassName, className)}
      aria-label={ariaLabel}
    >
      {text}
    </button>
  );
};
