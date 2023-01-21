import { observer } from "mobx-react";
import React from "react";
import { Input } from "../../atoms/Input";
import { InputContainer } from "../../atoms/InputContainer";
import { InputIcon } from "../../atoms/InputIcon";

const PasswordInput: React.FC<TextInputProps> = ({
  inputRef,
  iconRef,
  icon: Icon,
  onClickIcon,
  ...props
}) => {
  return (
    <InputContainer>
      <InputIcon icon={Icon} iconRef={iconRef} onClick={onClickIcon} />

      <Input {...props} type={"text"} inputRef={inputRef} />
    </InputContainer>
  );
};

const ObservedComponent = observer(PasswordInput);

export default ObservedComponent;
