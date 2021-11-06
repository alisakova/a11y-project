import { SubscribeForm } from "@/components/Footer/SubscribeForm";
import { FooterLink } from "@/components/Footer/FooterLink";
import { SocialLink } from "@/components/Footer/SocialLink";

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
              ariaLabel="Связаться по почте"
            />
            <SocialLink
              link="https://t.me/theartsmuseum"
              iconAlt="Телеграм"
              iconSrc="/social/telegram.svg"
              ariaLabel="Телеграм"
            />
            <SocialLink
              link="https://www.facebook.com/theartsmuseum/"
              iconAlt="Facebook"
              iconSrc="/social/facebook.svg"
              ariaLabel="Facebook"
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
