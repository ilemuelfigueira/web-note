interface FooterLegendProps extends React.HTMLAttributes<HTMLSpanElement> {}

interface FooterLinkProps extends React.LinkHTMLAttributes<HTMLLinkElement> {
  to: string;
}

interface FooterIconProps extends React.SVGAttributes<SVGSVGElement> {
  icon: IPhosphorIcon;
  size?: number;
}

interface FooterLinkIconProps extends FooterLinkProps, FooterIconProps {}

interface FooterContactsProps extends React.HTMLAttributes<HTMLDivElement> {
  contacts: Array<FooterLinkIconProps>;
}

interface FooterInfosProps extends React.HTMLAttributes<HTMLDivElement> {
  contacts: Array<FooterLinkIconProps>;
  legend: string;
}

interface FooterProps extends FooterInfosProps {
}
