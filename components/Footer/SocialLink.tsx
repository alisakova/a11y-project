import { FunctionComponent } from "react";

interface Props {
  iconSrc: string;
  link: string;
  iconAlt: string;
  ariaLabel?: string;
}

export const SocialLink: FunctionComponent<Props> = ({
  link,
  iconSrc,
  ariaLabel,
  iconAlt,
}) => {
  return (
    <a href={link} className="mr-6 last:mr-0" aria-label={ariaLabel}>
      <img src={iconSrc} alt={iconAlt} aria-hidden={true} />
    </a>
  );
};
