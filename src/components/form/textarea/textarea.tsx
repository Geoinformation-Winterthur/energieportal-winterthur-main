import styles from "./textarea.module.scss";

interface TextAreaProps {
  label?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = ({
  label,
  placeholder,
  name,
  value,
  error,
  onChange,
  onBlur,
}: TextAreaProps) => {
  return (
    <div
      className={`
        ${styles["textarea"]}
        ${error ? styles["textarea--error"] : ""}
      `}
    >
      <label className={styles["textarea__label"]} htmlFor={name}>
        {label}
      </label>
      <textarea
        className={styles["textarea__textarea"]}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <p className={styles["textarea__error"]}>{error}</p>}
    </div>
  );
};
