import Input from "../shared/ui/input.component";
import React from "react";

import { InputStore } from "../shared/store";
import { observer } from "mobx-react";
import { Envelope } from "phosphor-react";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  store: InputStore;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ store, ...props }) => {
  const inputRef = React.createRef<HTMLInputElement>();
  const iconRef = React.createRef<HTMLButtonElement>();

  return (
    <Input
      {...props}
      Icon={Envelope}
      onClickIcon={() => inputRef.current?.focus()}
      iconRef={iconRef}
      inputRef={inputRef}
      type={"email"}
    />
  );
};

export default observer(PasswordInput);
