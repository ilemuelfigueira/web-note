import { FooterDivider, FooterInfos } from "@ui";

import "./styles.css";

const Footer = ({ contacts, legend }: FooterProps) => {
  return (
    <div className="footer__container">
      <FooterDivider />
      <FooterInfos contacts={contacts} legend={legend} />
      <FooterDivider />
    </div>
  );
};

export default Footer;
