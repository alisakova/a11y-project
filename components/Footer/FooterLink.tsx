import { FunctionComponent } from "react";

interface Props {
  title: string;
  link: string;
}

export const FooterLink: FunctionComponent<Props> = ({ title, link = "/" }) => {
  return (
    <a href={link} className="text-blue-800 mb-4 last:mb-0">
      <span className="border-b hover:border-transparent">{title}</span>
    </a>
  );
};
