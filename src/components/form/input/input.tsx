import styles from "./input.module.scss";

interface InputProps {
  type?: string;
  label?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  autofocus?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
}

export const Input = ({
  label,
  placeholder,
  type,
  name,
  value,
  autofocus,
  onChange,
  onBlur,
  error,
}: InputProps) => {
  return (
    <div
      className={`
        ${styles["input"]}
        ${error ? styles["input--error"] : ""}
      `}
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
      />
      {error && <p className={styles["input__error"]}>{error}</p>}
    </div>
  );
};
