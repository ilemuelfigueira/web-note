import { HeaderTypes } from "../shared/types";

interface Props extends HeaderTypes.IProps {}

const Header: React.FC<Props> = ({ title, subtitle, userName, userAvatar }) => {
  return (
    <div className="flex h-24 w-full items-center justify-between overflow-hidden bg-primary px-8 py-5">
      <div className="flex h-full w-full items-center gap-1 overflow-hidden whitespace-pre">
        <span className="text-3xl">{title}</span>
        <span className="text-4xl">|</span>
        <span className="text-xl">{subtitle}</span>
      </div>
      <div className="flex h-full min-w-fit items-center gap-2 overflow-hidden whitespace-nowrap">
        {userAvatar && <img src={userAvatar} alt="user avatar" />}
        <span className="text-xl">{userName}</span>
      </div>
    </div>
  );
};

export default Header;
