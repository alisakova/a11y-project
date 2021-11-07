import { FunctionComponent } from "react";
import { ErrorIcon } from "@/components/ErrorIcon";
import classNames from "classnames";

interface Props {
  errorId: string;
  errorText: string;
  className?: string;
}

export const ErrorMessage: FunctionComponent<Props> = ({
  errorId,
  errorText,
  className = "",
}) => {
  return (
    <span
      id={errorId}
      className={classNames("text-red-600 flex items-center mt-2", className)}
    >
      <ErrorIcon className="min-w-[1rem] w-4 h-4 mr-2" />
      {errorText}
    </span>
  );
};
