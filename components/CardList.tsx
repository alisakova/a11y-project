import { Card } from "@/components/Card";
import { FunctionComponent } from "react";

interface Props {
  list: any[];
}

export const CardList: FunctionComponent<Props> = ({ list = [] }) => {
  return (
    <ul className="flex flex-wrap sm:-m-5">
      {list.map((card, index) => (
        <Card card={card} key={index} />
      ))}
    </ul>
  );
};
