interface PasswordInputProps extends Omit<React.InputHTMLAttributes<React.HTMLInputElement>, "type"> {
  onClickIcon?: VoidFunction;
  openIcon?: IPhosphorIcon;
  closedIcon?: IPhosphorIcon;
  inputRef?: React.RefObject<HTMLInputElement>;
  iconRef?: React.RefObject<HTMLButtonElement>;
}

interface IPasswordInputStore {
  value: string | number;
  type?: "email" | "passwordOpen" | "passwordClosed" | "text";
  placeholder: string;
}