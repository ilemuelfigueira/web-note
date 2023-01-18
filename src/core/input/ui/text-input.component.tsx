import Input from "../shared/ui/input.component";
import React from "react";

import { InputStore } from "../shared/store";
import { observer } from "mobx-react";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  store: InputStore;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ store, ...props }) => {
  const inputRef = React.createRef<HTMLInputElement>();
  const iconRef = React.createRef<HTMLButtonElement>();

  return (
    <Input {...props} iconRef={iconRef} inputRef={inputRef} type={store.type} />
  );
};

export default observer(PasswordInput);
