import { FunctionComponent } from "react";

interface Props {
  text: string[];
  link: string;
  linkText: string;
}

export const TextContent: FunctionComponent<Props> = ({
  text,
  link,
  linkText,
}) => {
  return (
    <>
      {text.map((paragraph, index) => (
        <p className="mb-4 text-xl last:mb-0" key={index}>
          {paragraph}
        </p>
      ))}
      <a
        href={link}
        className="text-blue-800 border-b hover:border-transparent text-xl mt-10 inline-block"
      >
        {linkText}
      </a>
    </>
  );
};
