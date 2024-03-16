type CheckBoxIconProps = {
  isChecked?: boolean;
  className?: string;
};

function CheckIcon({ isChecked, className }: CheckBoxIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      role="presentation"
      viewBox="0 0 17 18"
    >
      <polyline
        fill="none"
        points="1 9 7 14 15 4"
        stroke="currentColor"
        strokeDasharray={22}
        strokeDashoffset={isChecked ? 44 : 66}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}

export default CheckIcon;
