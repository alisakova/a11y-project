import { FunctionComponent } from "react";

interface Props {
  title: string;
}

export const SectionTitle: FunctionComponent<Props> = ({ title }) => {
  return <h2 className="mb-10 text-5xl">{title}</h2>;
};
