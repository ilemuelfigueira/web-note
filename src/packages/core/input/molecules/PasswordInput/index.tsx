import React from "react";
import { observer } from "mobx-react";
import { Eye, EyeClosed } from "phosphor-react";
import { Input } from "../../atoms/Input";
import { InputContainer } from "../../atoms/InputContainer";
import { InputIcon } from "../../atoms/InputIcon";

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
    <InputContainer>
      <InputIcon
        icon={show ? OpenIcon: ClosedIcon}
        iconRef={iconRef}
        onClick={() => {
          setShow(!show);
          onClickIcon && onClickIcon();
        }}
      />

      <Input {...props} type={show ? "text" : "password"} inputRef={inputRef} />
    </InputContainer>
  );
};

const ObservedComponent = observer(PasswordInput);

export default ObservedComponent;
