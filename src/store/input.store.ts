import { action, makeObservable, observable } from "mobx";

class InputStore implements IInputStore {
  @observable value?: string | number = "";
  @observable type?: "email" | "passwordOpen" | "passwordClosed" | "text";
  @observable placeholder?: string;

  constructor(input?: IInputStore) {
    this.value = input?.value;
    this.type = input?.type || "text";
    this.placeholder = input?.placeholder;

    makeObservable(this);
  }

  @action enventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.value = e.target.value;
  };
}

export default InputStore;
