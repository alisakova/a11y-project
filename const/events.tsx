import { CardList } from "@/components/CardList";

export const allEvents = [
  {
    img: "/card1.png",
    imgAlt:
      // eslint-disable-next-line max-len
      "Одна из картин Рихтера. Разделена на 2 части. В левой части просто зеленый фон. В правой части сидит человек с белыми волосами в черном костюме",
    title: "Святослав Рихтер в кругу друзей. Москва — Коктебель",
    titleLink: "/",
    subtitle: "Выставка до 20 ноября",
    text: "Очень интересная выставка с интересными картинами",
    link: "/",
    linkText: "Купить билет",
    ariaLabelForLink: "Купить билет на выставку Святослава Рихтера",
  },
  {
    img: "/card4.png",
    imgAlt:
      "Высокие березы в лесу, в центре есть небольшое свечение, придающее таинственность картине",
    title: "Метью Брандт. Таинственный лес",
    titleLink: "/",
    subtitle: "Только сегодня 14 ноября",
    text: "Первая выставка известного американского художника",
    link: "/",
    linkText: "Купить билет",
    ariaLabelForLink: "Купить билет на выставку Мэтью Брандта",
  },
  {
    img: "/card5.jpeg",
    imgAlt:
      // eslint-disable-next-line max-len
      "Картинка Мунка 'Вечер на улице Карла Юхана'. Слева на картине толпа людей, а справа линия дороги, уводящие зрителя вглубь картины",
    title: "От Мунка до Босха. Самые загадочные картины мира",
    titleLink: "/",
    subtitle: "Только 14 и 15 ноября",
    text: "Выставка приглашает соприкоснуться с тайнами произведений известных художников",
    link: "/",
    linkText: "Купить билет",
    ariaLabelForLink: "Купить билет на выставку от Мунка до Босха",
  },
];

export const todayEvents = [
  {
    img: "/card4.png",
    imgAlt: "Превью для выставки Мэтью Брандта",
    title: "Метью Брандт. Таинственный лес",
    titleLink: "/",
    subtitle: "Только сегодня 14 ноября",
    text: "Первая выставка известного американского художника",
    link: "/",
    linkText: "Купить билет",
    ariaLabelForLink: "Купить билет на выставку Мэтью Брандта",
  },
  {
    img: "/card5.jpeg",
    imgAlt: "Превью для выставки от Мунка до Босха",
    title: "От Мунка до Босха. Самые загадочные картины мира",
    titleLink: "/",
    subtitle: "Только 14 и 15 ноября",
    text: "Выставка приглашает соприкоснуться с тайнами произведений известных художников",
    link: "/",
    linkText: "Купить билет",
    ariaLabelForLink: "Купить билет на выставку от Мунка до Босха",
  },
];

export const tomorrowEvents = [
  {
    img: "/card6.jpeg",
    imgAlt: "Превью для выставки И.И. Шишкина",
    title: "Выставка 'Иван Иванович Шишкин. 1832-1898",
    titleLink: "/",
    subtitle: "Завтра 15 ноября",
    text: "Выставка гения русской живописи и знатока уникальных форм природы",
    link: "/",
    linkText: "Купить билет",
    ariaLabelForLink: "Купить билет на выставку И.И. Шишкина",
  },
];

export const tabs = [
  {
    tabId: "heading1",
    ariaControls: "panel1",
    tabTitle: "Все",
  },
  {
    tabId: "heading2",
    ariaControls: "panel2",
    tabTitle: "Сегодня",
  },
  {
    tabId: "heading3",
    ariaControls: "panel3",
    tabTitle: "Завтра",
  },
];

export const tabsContent = [
  {
    id: "panel1",
    ariaLabelledBy: "heading1",
    children: <CardList list={allEvents} />,
  },
  {
    id: "panel2",
    ariaLabelledBy: "heading2",
    children: <CardList list={todayEvents} />,
  },
  {
    id: "panel3",
    ariaLabelledBy: "heading3",
    children: <CardList list={tomorrowEvents} />,
  },
];
