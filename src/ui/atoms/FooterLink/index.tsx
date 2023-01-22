const FooterLink: React.FC<FooterLinkProps> = ({ children, to }) => {
  return (
    <a href={to} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default FooterLink;
