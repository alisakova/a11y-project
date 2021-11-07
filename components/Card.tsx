import { FunctionComponent } from "react";

export type Card = {
  title: string;
  subtitle?: string;
  text: string;
  img: string;
  imgAlt: string;
  titleLink?: string;
  link: string;
  linkText: string;
  ariaLabelForLink?: string;
};

interface Props {
  card: Card;
}

export const Card: FunctionComponent<Props> = ({ card }) => {
  const {
    title,
    subtitle,
    text,
    img,
    imgAlt,
    titleLink,
    link,
    linkText,
    ariaLabelForLink,
  } = card;

  return (
    <li className="w-full mb-5 flex flex-col items-start sm:mb-0 sm:w-1/2 lg:w-1/3 sm:p-5">
      <img
        src={img}
        alt={imgAlt}
        className="max-h-[20rem] mb-6 h-[200px] w-full object-cover"
      />
      {titleLink ? (
        <a
          href={titleLink}
          className="text-2xl mb-4 block text-blue-800 hover:text-blue-900"
        >
          <h3>{title}</h3>
        </a>
      ) : (
        <h3 className="text-2xl mb-4">{title}</h3>
      )}
      {subtitle && <p className="text-xl mb-2">{subtitle}</p>}
      <p className="mb-6">{text}</p>
      <a
        href={link}
        aria-label={ariaLabelForLink}
        className="mt-auto border-b text-blue-800 hover:border-transparent"
      >
        {linkText}
      </a>
    </li>
  );
};
