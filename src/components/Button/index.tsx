import React from "react";

type NavButtonProps = {
  children: React.ReactNode;
  onSelect: () => void;
  isSelected: boolean;
};

export default function NavButton({
  children,
  onSelect,
  isSelected,
}: NavButtonProps) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
