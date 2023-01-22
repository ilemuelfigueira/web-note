import { FooterLinkIcon } from "@ui";

import "./styles.css";

const FooterContacts = ({ contacts }: FooterContactsProps) => {
  return (
    <div className="footer__contacts">
      {contacts.map((contact) => (
        <FooterLinkIcon icon={contact.icon} to={contact.to} />
      ))}
    </div>
  );
};

export default FooterContacts;
