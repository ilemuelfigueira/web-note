import { HeaderInfo, ProfileHeader } from "@ui";

import "./styles.css";

const Header = ({ title, location, userName, ProfileAvatar }: HeaderProps) => {
  return (
    <div className="header__container">
      <HeaderInfo title={title} location={location} />
      <ProfileHeader name={userName} avatar={ProfileAvatar} />
    </div>
  );
};

export default Header;
