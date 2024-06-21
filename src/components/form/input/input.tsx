import clsx from 'clsx';
import { KeyboardEventHandler } from 'react';
import styles from "./input.module.scss";

interface InputProps {
  type?: string;
  label?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  autofocus?: boolean;
  error?: string;
  hideFromKeyboard?: boolean;
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
  hideFromKeyboard,
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
        // hide from keyboard focus
        tabIndex={hideFromKeyboard ? -1 : 0}
      />
      {error && <p className={styles["input__error"]}>{error}</p>}
    </div>
  );
};
