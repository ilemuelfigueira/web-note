import { FooterLegend, FooterContacts } from "@ui";

import "./styles.css";

const FooterInfos = ({ legend, contacts }: FooterInfosProps) => {
  return (
    <div className="footer__infos">
      <FooterLegend>{legend}</FooterLegend>
      <FooterContacts contacts={contacts} />
    </div>
  );
};

export default FooterInfos;
