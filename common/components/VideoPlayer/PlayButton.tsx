import React from "react";

interface PlayButtonProps {
  onClick: () => void;
}

export const PlayButton: React.FC<PlayButtonProps> = ({ onClick }) => (
  <button onClick={onClick}>
    <svg
      fill="none"
      height="20"
      viewBox="0 0 17 20"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.13434 0.105966C0.902589 -0.0323392 0.614397 -0.0354616 0.379701 0.0977895C0.145005 0.231041 0 0.480115 0 0.75V19.25C0 19.5199 0.145005 19.769 0.379701 19.9022C0.614397 20.0355 0.902589 20.0323 1.13434 19.894L16.6343 10.644C16.8611 10.5087 17 10.2641 17 10C17 9.73592 16.8611 9.4913 16.6343 9.35597L1.13434 0.105966Z"
        fill="#C7CAD1"
      />
    </svg>
  </button>
);
