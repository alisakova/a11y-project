import {
  FunctionComponent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import { Tab } from "@/components/Tabs/Tab";
import { arrowKeys, directions } from "../../const/const";

export type Tab = {
  tabId: string;
  ariaControls: string;
  tabTitle: string;
};

export type TabContent = {
  id: string;
  ariaLabelledBy: string;
  children: ReactElement;
};

interface Props {
  tabsListAriaLabel?: string;
  tabs: Tab[];
  tabsContent: TabContent[];
}

export const Tabs: FunctionComponent<Props> = ({
  tabsListAriaLabel = "",
  tabs = [],
  tabsContent = [],
}) => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].tabId);
  const [focusedTabId, setFocusedTabId] = useState(tabs[0].tabId);
  const tabList = useRef<HTMLDivElement>(null);

  const handleTab = (tabId: string) => {
    setActiveTabId(tabId);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.keyCode;
      if (key === arrowKeys.end) {
        setFocusedTabId(tabs[tabs.length - 1].tabId); // focus on last tab
      }
      if (key === arrowKeys.home) {
        setFocusedTabId(tabs[0].tabId); // focus on first tab
      }
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      event.preventDefault();
      event.stopPropagation();
      const key = event.keyCode;
      const currentTabId = (event?.target as Element)?.id;
      if (key === arrowKeys.left || key === arrowKeys.right) {
        const currentTabIndex = tabs.findIndex(
          ({ tabId }) => tabId === currentTabId
        );
        const nextFocusedTab = tabs[currentTabIndex + directions[key]]?.tabId;
        if (nextFocusedTab) {
          setFocusedTabId(nextFocusedTab);
        } else {
          if (key === arrowKeys.left) {
            setFocusedTabId(tabs[tabs.length - 1].tabId);
          } else if (key === arrowKeys.right) {
            setFocusedTabId(tabs[0].tabId);
          }
        }
      }
      if (key === arrowKeys.space) {
        setActiveTabId(currentTabId);
      }
    };

    if (tabList?.current) {
      tabList.current.addEventListener("keydown", handleKeyDown);
      tabList.current.addEventListener("keyup", handleKeyUp);
    }

    return () => {
      if (tabList?.current) {
        tabList.current.removeEventListener("keydown", handleKeyDown);
        tabList.current.removeEventListener("keyup", handleKeyUp);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={tabList}
        role="tablist"
        className="flex flex-wrap items-center mb-11"
        aria-label={tabsListAriaLabel}
      >
        {tabs.map(({ tabId, ariaControls, tabTitle }) => (
          <Tab
            key={tabId}
            focusedTabId={focusedTabId}
            activeTabId={activeTabId}
            handleTab={handleTab}
            tabId={tabId}
            title={tabTitle}
            ariaControls={ariaControls}
          />
        ))}
      </div>
      {tabsContent.map(({ id, ariaLabelledBy, children }) => (
        <div
          key={id}
          id={id}
          aria-labelledby={ariaLabelledBy}
          role="tabpanel"
          className={classNames({
            hidden: ariaLabelledBy !== activeTabId,
          })}
        >
          {children}
        </div>
      ))}
    </>
  );
};
