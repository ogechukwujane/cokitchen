import React from "react";
import { useEffect, useRef, useState } from "react";
import sortIcon from "../assets/sort-icon.svg";

import S from "../styles/components/dropdown.module.scss";

export const Dropdown = ({
  options,
  className,
  value,
  label = "Select item",
  onSelect,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelectOption = (value, index) => {
    if (onSelect) {
      onSelect(value, index);
      setOpenDropdown(false);
    }
  };

  const clickOutside = (e) => {
    if (dropdownRef.current?.contains(e.target)) return;
    setOpenDropdown(false);
  };

  useEffect(() => {
    window.addEventListener("mousedown", clickOutside);
    return () => window.removeEventListener("mousedown", clickOutside);
  }, []);

  return (
    <div className={`${S.Dropdown__wrap} ${className}`} ref={dropdownRef}>
      <button className={S.content__wrap}>
        <div
          className={S.dropdown__button}
          onClick={() => setOpenDropdown(!openDropdown)}
        >
          {!value ? (
            <p className={S.label}>{label}</p>
          ) : (
            <p className={S.text}>{value}</p>
          )}
          <img src={sortIcon} alt="" />
        </div>
      </button>
      {openDropdown && (
        <div className={S.dropdown}>
          {options.map((value, index) => (
            <p
              className={S.dropdown__text}
              key={index}
              onClick={() => handleSelectOption(value, index)}
            >
              {value}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
