import classNames from "classnames";
import { FunctionComponent, useEffect, useRef } from "react";

interface Props {
  tabId: string;
  ariaControls: string;
  title: string;
  handleTab: (id: string) => void;
  activeTabId: string;
  focusedTabId: string;
}

export const Tab: FunctionComponent<Props> = ({
  tabId,
  ariaControls,
  title,
  handleTab,
  activeTabId,
  focusedTabId,
}) => {
  const tabRef = useRef<HTMLButtonElement>(null);
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      if (focusedTabId === tabId && tabRef && tabRef.current) {
        tabRef.current.focus();
      }
    } else {
      if (didMount) {
        didMount.current = true;
      }
    }
  }, [focusedTabId]);

  return (
    <button
      ref={tabRef}
      aria-selected={tabId === activeTabId}
      onClick={() => handleTab && handleTab(tabId)}
      id={tabId}
      role="tab"
      aria-controls={ariaControls}
      tabIndex={tabId === activeTabId ? 0 : -1}
      className={classNames("min-w-160px p-4", {
        "rounded-4px bg-lightPurple": activeTabId === tabId,
      })}
    >
      <span
        className={classNames({
          "border-b hover:border-transparent": activeTabId !== tabId,
        })}
      >
        {title}
      </span>
    </button>
  );
};
