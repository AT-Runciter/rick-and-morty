import { IconProps } from "./types";

export const Star = (props: IconProps) => {
  const { color = "currentColor" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
    >
      <circle cx="32" cy="32" r="32" fill="#272727" />
      <path
        d="M31.5185 9L36.7988 25.2381H53.886L40.0621 35.2738L45.3424 51.5119L31.5185 41.4762L17.6947 51.5119L22.9749 35.2738L9.15108 25.2381H26.2383L31.5185 9Z"
        fill={color}
      />
    </svg>
  );
};
