import React from "react";
import { observer } from "mobx-react";
import { Envelope } from "phosphor-react";
import { Input } from "../../atoms/Input";
import { InputContainer } from "../../atoms/InputContainer";
import { InputIcon } from "../../atoms/InputIcon";

const EmailInput: React.FC<EmailInputProps> = ({
  inputRef,
  iconRef,
  icon: Icon = Envelope,
  ...props
}) => {
  return (
    <InputContainer>
      <InputIcon icon={Icon} iconRef={iconRef} />

      <Input {...props} type={"text"} inputRef={inputRef} />
    </InputContainer>
  );
};

const ObservedComponent = observer(EmailInput);

export default ObservedComponent;
