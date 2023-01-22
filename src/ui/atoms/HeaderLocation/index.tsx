import "./styles.css";

const HeaderLocation = ({ children }: HeaderLocationProps) => {
  return <span className="header__subtitle">{children}</span>;
};

export default HeaderLocation;
