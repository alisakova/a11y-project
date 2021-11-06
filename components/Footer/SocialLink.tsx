import { FunctionComponent } from "react";

interface Props {
  iconSrc: string;
  link: string;
  iconAlt: string;
}

export const SocialLink: FunctionComponent<Props> = ({
  link,
  iconSrc,
  iconAlt,
}) => {
  return (
    <a href={link} className="mr-6 last:mr-0 ">
      <img src={iconSrc} alt={iconAlt} role="presentation" />
    </a>
  );
};
