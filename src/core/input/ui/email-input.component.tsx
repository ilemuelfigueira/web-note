import Input from "../shared/ui/input.component";
import { InputStore } from "../shared/store";
import { Envelope } from "phosphor-react";
import { useRef } from "react";

type Interface = {
  store: InputStore;
} & React.InputHTMLAttributes<HTMLInputElement>;

const EmailInput: React.FC<Interface> = ({ store, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div
      className="flex w-full max-w-[400px] items-center justify-start gap-2 overflow-hidden rounded-2xl pl-4"
      onClick={() => inputRef.current?.focus()}
    >
      <Envelope className="icon" size={24} />
      <Input
        {...props}
        inputRef={inputRef}
        className="input no-outline bg-transparent"
        placeholder={store.placeholder}
        type={store.type}
      />
    </div>
  );
};

export default EmailInput;
