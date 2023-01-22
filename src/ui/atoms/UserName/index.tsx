import "./styles.css";

const UserName = ({ children }: UserNameProps) => {
  return <span className="user__name">{children}</span>;
};

export default UserName;
