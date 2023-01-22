import { observer } from "mobx-react";
import React from "react";
import { Input } from "../../atoms/Input";
import { InputIcon } from "../../atoms/InputIcon";

import "./styles.css";

const PasswordInput: React.FC<TextInputProps> = ({
  inputRef,
  iconRef,
  icon: Icon,
  onClickIcon,
  ...props
}) => {
  return (
    <div className="input__container">
      <InputIcon icon={Icon} iconRef={iconRef} onClick={onClickIcon} />

      <Input {...props} type={"text"} inputRef={inputRef} />
    </div>
  );
};

const ObservedComponent = observer(PasswordInput);

export default ObservedComponent;
