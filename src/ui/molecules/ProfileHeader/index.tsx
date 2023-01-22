import { ProfileAvatar, UserName } from "@ui";

import "./styles.css";

const ProfileHeader = ({ avatar, name }: ProfileHeaderProps) => {
  return (
    <div className="profile-header__container">
      <ProfileAvatar src={avatar} />
      <UserName>{name}</UserName>
    </div>
  );
};

export default ProfileHeader;
