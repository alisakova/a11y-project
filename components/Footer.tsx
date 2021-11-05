import { SubscribeForm } from "@/components/SubscribeForm";
import { FunctionComponent } from "react";

interface FooterLinkProps {
  title: string;
  link: string;
}

const FooterLink: FunctionComponent<FooterLinkProps> = ({
  title,
  link = "/",
}) => {
  return (
    <a
      href={link}
      className="text-blue-800 mb-4 last:mb-0"
    >
      <span className='border-b hover:border-transparent'>{title}</span>
    </a>
  );
};

interface SocialLinkProps {
  iconSrc: string;
  link: string;
  iconAlt: string;
}

const SocialLink: FunctionComponent<SocialLinkProps> = ({
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

export const Footer = () => {
  return (
    <footer className="bg-footerBg py-20">
      <div className="container m-auto flex justify-between flex-col lg:flex-row">
        <div className="flex flex-col items-start">
          <FooterLink
            link="https://pushkinmuseum.art/museum4all/index.php?lang=ru"
            title="Посетителям с ограниченными возможностями"
          />
          <FooterLink
            link="https://pushkinmuseum.art/visitors/tickets/index.php?lang=ru"
            title="Билеты и льготы"
          />
          <FooterLink
            link="https://pushkinmuseum.art/museum/documents/corruption/index.php?lang=ru"
            title="Противодействие коррупции"
          />
          <h2 className="text-xl mt-10 mb-4">Соц. сети</h2>
          <div className="flex items-center">
            <SocialLink
              link="mailto:pushkin@mail.ru"
              iconAlt="Почта"
              iconSrc="/social/mail.svg"
            />
            <SocialLink
              link="https://t.me/theartsmuseum"
              iconAlt="Телеграм"
              iconSrc="/social/telegram.svg"
            />
            <SocialLink
              link="https://www.facebook.com/theartsmuseum/"
              iconAlt="Facebook"
              iconSrc="/social/facebook.svg"
            />
          </div>
        </div>
        <div className="mt-5 lg:mt-0 lg:w-1/2">
          <h2 className="text-xl mb-9">Подписка на новости</h2>
          <SubscribeForm />
        </div>
      </div>
    </footer>
  );
};
