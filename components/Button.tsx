import classNames from "classnames";

const buttonClassName = "bg-mainPurple text-white px-5 py-3 rounded-8px";

export const Button = ({ type = "", link = "", text, className = "", ariaLabel = "", onClick = () => {} }) => {
  if (link) {
    return <a href={link} className={classNames(buttonClassName, className)} aria-label={ariaLabel}>{text}</a>
  }
  return <button onClick={onClick} type={type} className={classNames(buttonClassName, className)} aria-label={ariaLabel}>{text}</button>
}