import styles from "./textarea.module.scss";

interface TextAreaProps {
  label?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = ({
  label,
  placeholder,
  name,
  value,
  onChange,
}: TextAreaProps) => {
  return (
    <div
      className={`
        ${styles["textarea"]}
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
        placeholder={placeholder}
      />
    </div>
  );
};
