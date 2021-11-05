import { SectionTitle } from "@/components/SectionTitle";
import { Tab, TabContent, Tabs } from "@/components/Tabs/Tabs";
import { FunctionComponent } from "react";

interface Props {
  title: string;
  sectionId: string;
  tabs: Tab[];
  tabsContent: TabContent[];
  tabsListAriaLabel?: string;
}

export const Events: FunctionComponent<Props> = ({
  title,
  sectionId,
  tabs,
  tabsContent,
  tabsListAriaLabel,
}) => {
  return (
    <section id={sectionId} className="mb-28">
      <SectionTitle title={title} />
      <Tabs
        tabs={tabs}
        tabsContent={tabsContent}
        tabsListAriaLabel={tabsListAriaLabel}
      />
    </section>
  );
};
