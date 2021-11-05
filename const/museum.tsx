{
  /* eslint-disable max-len */
}
import { CardList } from "@/components/CardList";
import { TextContent } from "@/components/TextContent";

const buildings = [
  {
    img: "/museum/card1.png",
    imgAlt: "План мемориальной квартиры Рихтера",
    title: "МЕМОРИАЛЬНАЯ КВАРТИРА С.Т. РИХТЕРА",
    text: "ул. Большая Бронная, 2/6, 16 этаж, кв. 58",
    link: "/",
    linkText: "Подробнее",
    ariaLabelForLink: "Подробнее про мемориальную квартиру Рихтера",
  },
  {
    img: "/museum/card2.png",
    imgAlt: "План ЦЭВ «МУСЕЙОН»",
    title: "ЦЭВ «МУСЕЙОН»",
    text: "Колымажный пер., 6/2, 3 (вход с Малого Знаменского переулка)",
    link: "/",
    linkText: "Подробнее",
    ariaLabelForLink: "Подробнее про ЦЭВ «МУСЕЙОН»",
  },
  {
    img: "/museum/card3.png",
    imgAlt: "План усадьбы Лопухиных",
    title: "УСАДЬБА ЛОПУХИНЫХ",
    text: "Малый Знаменский пер., 3/5с4",
    link: "/",
    linkText: "Подробнее",
    ariaLabelForLink: "Подробнее про Усадьбу Лопухиных",
  },
  {
    img: "/museum/card4.png",
    imgAlt: "План учебного музея",
    title: "УЧЕБНЫЙ МУЗЕЙ",
    text: "ул. Чаянова, 15",
    link: "/",
    linkText: "Подробнее",
    ariaLabelForLink: "Подробнее про учебный музей",
  },
  {
    img: "/museum/card5.png",
    imgAlt: "План отдела личных коллекций",
    title: "ОТДЕЛ ЛИЧНЫХ КОЛЛЕКЦИЙ",
    text: "ул. Волхонка, 10",
    link: "/",
    linkText: "Подробнее",
    ariaLabelForLink: "Подробнее про отдел личных коллекций",
  },
  {
    img: "/museum/card6.png",
    imgAlt: "План галереи",
    title: "ГАЛЕРЕЯ",
    text: "ул. Волхонка, 14",
    link: "/",
    linkText: "Подробнее",
    ariaLabelForLink: "Подробнее про галерею",
  },
];

const history = [
  "Государственный музей изобразительных искусств имени А.С. Пушкина – одно из крупнейших в России художественных собраний зарубежного искусства с древнейших времен до наших дней.",
  "В современной экспозиции представлены обширная учебная коллекция тонированных гипсовых слепков с произведений Античности, Средних веков и эпохи Возрождения, а также собрание подлинных произведений живописи, скульптуры, графики и декоративно-прикладного искусства.",
  "В залах первого этажа Главного здания представлены: произведения искусства Древнего Египта, Античности, собрание европейской живописи VIII–XVIII веков; два зала – Итальянский и Греческий дворики – занимают слепки. На втором этаже Главного здания в залах размещены слепки произведений искусства Древней Греции, Рима, Средних веков и Возрождения.",
  "В начале 2017 года музей определил новое направление своей деятельности – Пушкинский XXI, – ориентированное на современное российское и западное искусство во всех аспектах – выставочном, образовательном и исследовательском. Таким образом, ГМИИ им. А.С. Пушкина представляет собой открытую, интерактивную сцену, демонстрирующую развитие мировой культуры с древности до наших дней, живое, знакомое с детства пространство для получения знаний и общения.",
];

export const tabs = [
  {
    tabId: "headingBuildings",
    ariaControls: "section1",
    tabTitle: "Здания",
  },
  {
    tabId: "headingHistory",
    ariaControls: "section2",
    tabTitle: "История",
  },
];

export const tabsContent = [
  {
    id: "section1",
    ariaLabelledBy: "headingBuildings",
    children: <CardList list={buildings} />,
  },
  {
    id: "section2",
    ariaLabelledBy: "headingHistory",
    children: <TextContent text={history} link="/" linkText="Читать далее" />,
  },
];
