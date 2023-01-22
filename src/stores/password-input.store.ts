import { action, computed, makeObservable } from "mobx";
import { Eye, EyeClosed } from "phosphor-react";
import InputStore from "./input.store";

class PasswordInputModel extends InputStore {
  constructor(input: IInputStore) {
    super(input);

    makeObservable(this);
  }

  @computed
  get Icon() {
    return this.isPasswordOpen ? Eye : EyeClosed;
  }

  @computed
  get isPasswordOpen() {
    return this.type === "passwordOpen";
  }

  @action
  toogleVisibility() {
    this.type = this.isPasswordOpen ? "passwordClosed" : "passwordOpen";
  }
}

export default PasswordInputModel;
