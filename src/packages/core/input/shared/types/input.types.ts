import { InputStore } from "../store";

export interface IStore {
  value: string | number;
  type?: "email" | "passwordOpen" | "passwordClosed" | "text";
  placeholder: string;
}

export interface IProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  store: InputStore;
}
