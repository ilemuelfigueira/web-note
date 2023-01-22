import "./styles.css";

const ProfileAvatar = ({ src, ...props }: ProfileAvatarProps) => {
  return <img className="profile__avatar" src={src} {...props} />;
};

export default ProfileAvatar;
