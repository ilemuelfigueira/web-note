interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.Ref<HTMLInputElement>;
}

interface IInputStore {
  value?: string | number;
  type?: "email" | "passwordOpen" | "passwordClosed" | "text";
  placeholder?: string;
}