import { FunctionComponent } from "react";

interface Props {
  text: string;
}

export const SuccessfulAlert: FunctionComponent<Props> = ({ text }) => {
  return (
    <div
      role="alert"
      aria-live="polite"
      className="bg-green-200 border border-green-800 p-5 mb-4 rounded-4px flex"
    >
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-check-circle mr-4"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
      {text}
    </div>
  );
};
