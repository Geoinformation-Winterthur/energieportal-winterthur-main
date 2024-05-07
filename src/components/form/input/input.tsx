import clsx from 'clsx';
import styles from "./input.module.scss";
import { KeyboardEventHandler } from 'react';

interface InputProps {
  type?: string;
  label?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  autofocus?: boolean;
  error?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
}

export const Input = ({
  label,
  placeholder,
  type,
  name,
  value,
  autofocus,
  error,
  onChange,
  onBlur,
  onKeyDown
}: InputProps) => {
  return (
    <div
      className={clsx(styles["input"], error ? styles["input--error"] : "")}
    >
      <label className={styles["input__label"]} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles["input__input"]}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        autoFocus={autofocus}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};
