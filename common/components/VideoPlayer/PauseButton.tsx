import React from "react";

interface PauseButtonProps {
  onClick: () => void;
}

export const PauseButton: React.FC<PauseButtonProps> = ({ onClick }) => (
  <button onClick={onClick}>
    <svg
      fill="none"
      height="18"
      viewBox="0 0 16 18"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.75 0C0.335786 0 0 0.335786 0 0.75V17.25C0 17.6642 0.335786 18 0.75 18H5.25C5.66421 18 6 17.6642 6 17.25V0.75C6 0.335786 5.66421 0 5.25 0H0.75Z"
        fill="white"
      />
      <path
        d="M10.75 0C10.3358 0 10 0.335786 10 0.75V17.25C10 17.6642 10.3358 18 10.75 18H15.25C15.6642 18 16 17.6642 16 17.25V0.75C16 0.335786 15.6642 0 15.25 0H10.75Z"
        fill="white"
      />
    </svg>
  </button>
);
