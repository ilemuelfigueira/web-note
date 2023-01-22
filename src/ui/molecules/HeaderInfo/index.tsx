import { HeaderDivider, HeaderLocation, HeaderTitle } from "@ui";

const HeaderInfo = ({ location, title, ...props }: HeaderInfoProps) => {
  return (
    <div className="info__container" {...props}>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderDivider />
      <HeaderLocation>{location}</HeaderLocation>
    </div>
  );
};

export default HeaderInfo;
