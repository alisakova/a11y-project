import { FunctionComponent } from "react";
import { ErrorIcon } from "@/components/ErrorIcon";

interface Props {
  errorId: string;
  errorText: string;
}

export const ErrorMessage: FunctionComponent<Props> = ({
  errorId,
  errorText,
}) => {
  return (
    <span id={errorId} className="text-red-600 flex items-center mt-2">
      <ErrorIcon className="w-4 h-4 mr-2" />
      {errorText}
    </span>
  );
};
