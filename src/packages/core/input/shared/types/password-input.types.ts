import { InputTypes } from "./";

export interface IStore {
  value: string | number;
  type?: "email" | "passwordOpen" | "passwordClosed" | "text";
  placeholder: string;
}

export interface IProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  store: InputTypes.IStore;
}
