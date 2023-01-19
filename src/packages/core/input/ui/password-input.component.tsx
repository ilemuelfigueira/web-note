import Input from "../shared/ui/input.component";
import React from "react";

import { PasswordInputStore } from "../shared/store";
import { observer } from "mobx-react";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  store: PasswordInputStore;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ store, ...props }) => {
  const inputRef = React.createRef<HTMLInputElement>();
  const iconRef = React.createRef<HTMLButtonElement>();

  return (
    <Input
      {...props}
      Icon={store.Icon}
      onClickIcon={() => store.toogleVisibility()}
      iconRef={iconRef}
      inputRef={inputRef}
      type={store.isPasswordOpen ? "text" : "password"}
    />
  );
};

export default observer(PasswordInput);
