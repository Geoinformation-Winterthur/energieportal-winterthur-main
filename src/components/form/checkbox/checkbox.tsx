import styles from "./checkbox.module.scss";

interface CheckboxProps {
  label: string;
  checked: boolean;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({
  label,
  checked,
  error,
  onChange,
}: CheckboxProps) => {
  return (
    <div className={styles["checkbox"]}>
      <div className={styles["checkbox__inner"]}>
        <input
          className={styles["checkbox__input"]}
          id={label}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor={label}>{label}</label>
      </div>
      {error && <p className={styles["checkbox__error"]}>{error}</p>}
    </div>
  );
};
