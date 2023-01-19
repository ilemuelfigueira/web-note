import { action, makeObservable, observable } from "mobx";
import { InputTypes } from "../types";

type IStore = InputTypes.IStore;

class InputStore implements IStore {
  @observable value: string | number = "";
  @observable type?: "email" | "passwordOpen" | "passwordClosed" | "text";
  @observable placeholder: string;

  constructor(input: IStore) {
    this.value = input.value;
    this.type = input.type;
    this.placeholder = input.placeholder;

    makeObservable(this);
  }

  @action enventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.value = e.target.value;
  };
}

export default InputStore;
