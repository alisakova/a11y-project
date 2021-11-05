import { useEffect, useState } from "react";
import classNames from "classnames";
import { Tab } from "@/components/Tabs/Tab";

const arrowKeys = {
  end: 35,
  home: 36,
  left: 37,
  right: 39,
  enter: 13,
  space: 32
};

export const Tabs = ({ tabsListAriaLabel = "", tabs = [], tabsContent = [] }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [focusedTabIndex, setFocusedTabIndex] = useState(0);
  const handleTab = (index) => {
    setActiveTab(index);
  }

  return (
    <>
      {/*TODO: keyboard navigation: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role*/}
      <div role="tablist" className="flex items-center mb-11" aria-label={tabsListAriaLabel}>
        {tabs.map(({ tabId, ariaControls, tabIndex, tabTitle }, index) => (
          <Tab index={index} focusedTabIndex={focusedTabIndex} activeTabIndex={activeTab} handleTab={handleTab} tabId={tabId} title={tabTitle} ariaControls={ariaControls} />
        ))}
      </div>
      {tabsContent.map(({ id, ariaLabelledBy, children }, index) => (
        <section key={id} id={id} aria-labelledby={ariaLabelledBy} role="tabpanel" tabIndex={0} className={classNames({
          "hidden": index !== activeTab
        })}>
          {children}
        </section>
      ))}
    </>
  )
}