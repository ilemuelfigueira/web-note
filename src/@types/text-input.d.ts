interface TextInputProps extends Omit<React.InputHTMLAttributes<React.HTMLInputElement>, "type"> {
  onClickIcon?: VoidFunction;
  icon?: IPhosphorIcon;
  inputRef?: React.RefObject<HTMLInputElement>;
  iconRef?: React.RefObject<HTMLButtonElement>;
}