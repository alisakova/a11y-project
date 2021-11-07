import { FunctionComponent } from "react";

interface NavItemProps {
  id: string;
  title: string;
}

const NavItem: FunctionComponent<NavItemProps> = ({ id, title }) => {
  return (
    <li className="mr-10 last:mr-0 mb-2 text-blue-800">
      <a href={id} className="group">
        <span className="border-b border-current group-hover:border-transparent">
          {title}
        </span>
      </a>
    </li>
  );
};

const navItems = [
  {
    id: "#visitors",
    title: "Посетителям",
  },
  {
    id: "#events",
    title: "Выставки и события",
  },
  {
    id: "#museum",
    title: "Музей",
  },
  {
    id: "#online",
    title: "Онлайн-трансляции",
  },
  {
    id: "#lectures",
    title: "Экскурсии и лекции в прямом эфире",
  },
];

export const MainNav = () => {
  return (
    <nav className="mb-8 container m-auto" aria-label="Секции на странице">
      <ul className="flex items-center flex-wrap text-lg">
        {navItems.map(({ id, title }) => (
          <NavItem key={id} id={id} title={title} />
        ))}
      </ul>
    </nav>
  );
};
