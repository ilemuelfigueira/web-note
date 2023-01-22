import { FooterLink, FooterIcon } from "@ui";

const FooterLinkIcon = ({ icon, to, size }: FooterLinkIconProps) => {
  return (
    <FooterLink to={to}>
      <FooterIcon icon={icon} size={size} />
    </FooterLink>
  );
};

export default FooterLinkIcon;
