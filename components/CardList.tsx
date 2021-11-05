import { Card } from "@/components/Card";

export const CardList = ({ list = [] }) => {
  return (
    <ul className="flex flex-wrap -m-5">
      {list.map((card, index) => (
        <Card card={card} key={index} />
      ))}
    </ul>
  )
}