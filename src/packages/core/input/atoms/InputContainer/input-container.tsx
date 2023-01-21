import { observer } from "mobx-react";

import "./styles.css";

const InputContainer = ({ children }: InputContainerProps) => {
  return <div className="input__container">{children}</div>;
};

export default observer(InputContainer);
