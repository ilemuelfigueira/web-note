import React from "react";
import { observer } from "mobx-react";
import { Eye, EyeClosed } from "phosphor-react";
import { Input } from "../../atoms/Input";
import { InputIcon } from "../../atoms/InputIcon";

import "./styles.css"

const PasswordInput: React.FC<PasswordInputProps> = ({
  inputRef,
  iconRef,
  openIcon: OpenIcon = Eye,
  closedIcon: ClosedIcon = EyeClosed,
  onClickIcon,
  ...props
}) => {
  const [show, setShow] = React.useState(false);

  return (
    <div className="input__container">
      <InputIcon
        icon={show ? OpenIcon: ClosedIcon}
        iconRef={iconRef}
        onClick={() => {
          setShow(!show);
          onClickIcon && onClickIcon();
        }}
      />

      <Input {...props} type={show ? "text" : "password"} inputRef={inputRef} />
    </div>
  );
};

const ObservedComponent = observer(PasswordInput);

export default ObservedComponent;
