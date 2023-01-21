import "./styles.css";

const Input = ({ inputRef, ...props }: InputProps) => {
  return <input ref={inputRef} {...props} className="input" />;
};

export default Input;
