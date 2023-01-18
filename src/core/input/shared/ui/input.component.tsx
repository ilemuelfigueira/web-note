import { observer } from "mobx-react";
import React, { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onClickIcon?: VoidFunction;
  Icon?: IPhosphorIcon;
  inputRef?: React.Ref<HTMLInputElement>;
  iconRef?: React.Ref<HTMLButtonElement>;
}

const Input: React.FC<InputProps> = ({
  inputRef,
  iconRef,
  Icon,
  onClickIcon,
  type = "text",
  ...props
}) => {
  return (
    <div className="flex w-full max-w-[400px] items-center justify-start gap-2 overflow-hidden rounded-2xl bg-darkWhite pl-4">
      {Icon && (
        <Icon
          ref={iconRef}
          onClick={onClickIcon}
          className="m-0 aspect-square cursor-pointer p-0 align-middle text-black"
          size={24}
        />
      )}

      <input
        {...props}
        type={type}
        ref={inputRef}
        className="w-full border-none bg-darkWhite py-4 font-normal text-black placeholder:text-gray2 focus:outline-none"
      />
    </div>
  );
};

const ObservedComponent = observer(Input);

export default ObservedComponent;
