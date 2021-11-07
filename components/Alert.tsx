import { FunctionComponent } from "react";
import { SuccessIcon } from "@/components/SuccessIcon";
import { ErrorIcon } from "@/components/ErrorIcon";
import classNames from "classnames";

interface Props {
  variant: "success" | "error";
}

export const Alert: FunctionComponent<Props> = ({
  children,
  variant = "success",
}) => {
  const isSuccessAlert = variant === "success";
  return (
    <div
      role="alert"
      aria-live="polite"
      className={classNames("border p-5 mb-4 rounded-4px flex", {
        "bg-green-200 border-green-800": isSuccessAlert,
        "bg-red-200 border-red-800": !isSuccessAlert,
      })}
    >
      {isSuccessAlert ? (
        <SuccessIcon className="mr-4" />
      ) : (
        <span className="text-red-800 inline-block mr-4">
          <ErrorIcon />
        </span>
      )}
      {children}
    </div>
  );
};
