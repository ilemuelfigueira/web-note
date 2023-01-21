import { observer } from 'mobx-react';
import './styles.css';

const InputIcon = ({ icon: Icon, iconRef, onClick }: InputIconProps) => {
  if(!Icon) return null;

  return (
    <Icon
      ref={iconRef}
      onClick={onClick}
      className="input__icon"
      size={24}
    />
  );
};

export default observer(InputIcon);
