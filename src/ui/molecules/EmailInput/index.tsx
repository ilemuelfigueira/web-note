import React from "react";
import { observer } from "mobx-react";
import { Envelope } from "phosphor-react";
import { Input } from "../../atoms/Input";
import { InputIcon } from "../../atoms/InputIcon";

import "./styles.css"

const EmailInput: React.FC<EmailInputProps> = ({
  inputRef,
  iconRef,
  icon: Icon = Envelope,
  ...props
}) => {
  return (
    <div className="input__container">
      <InputIcon icon={Icon} iconRef={iconRef} />

      <Input {...props} type={"text"} inputRef={inputRef} />
    </div>
  );
};

const ObservedComponent = observer(EmailInput);

export default ObservedComponent;
