import classNames from "classnames";
import { useEffect, useRef } from "react";

export const Tab = ({ tabId, ariaControls, title, handleTab, index, activeTabIndex, fosucedTabIndex }) => {
  const tabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (fosucedTabIndex === index && tabRef && tabRef.current) {
      tabRef.current.focus();
    }
  }, []);

  return (
    <button
      ref={tabRef}
      aria-selected={index === activeTabIndex}
      onClick={() => handleTab(index)}
      id={tabId}
      role="tab"
      aria-controls={ariaControls}
      tabIndex={0}
      className={classNames("min-w-160px", {
        "rounded-4px bg-lightPurple p-4": activeTabIndex === index
      })}
    >
       <span className={classNames({
              "border-b hover:border-transparent": activeTabIndex !== index
            })}>
              {title}
       </span>
    </button>
  );
};