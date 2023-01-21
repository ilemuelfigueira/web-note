import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "phosphor-react";
import { FooterTypes } from "../shared/types";

interface Props extends FooterTypes.IProps {}

const Footer: React.FC<Props> = ({ contactEmail, contactPhone, githubUrl }) => {
  return (
    <div className="flex w-full items-center justify-between gap-14 bg-gray2 px-8">
      <div className="w-full border-t-2 border-black" />
      <div className="flex w-full items-center justify-between">
        <span className="text-xs font-normal ">@Copyright </span>
        <div className="flex items-center justify-center gap-1">
          <a
            href="https://www.linkedin.com/in/ilemuelfigueira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo />
          </a>

          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <GithubLogo />
          </a>

          <a href={`mailto:${contactEmail}`}>
            <Envelope />
          </a>
          <a
            href={`https://wa.me/${contactPhone}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappLogo />
          </a>
        </div>
      </div>
      <div className="w-full border-t-2 border-black" />
    </div>
  );
};

export default Footer;
