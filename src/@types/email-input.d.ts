interface EmailInputProps extends Omit<React.InputHTMLAttributes<React.HTMLInputElement>, "type"> {
  icon?: IPhosphorIcon;
  inputRef?: React.RefObject<HTMLInputElement>;
  iconRef?: React.RefObject<HTMLButtonElement>;
}