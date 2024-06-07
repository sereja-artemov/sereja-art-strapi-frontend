import { BsFileEarmarkCodeFill, BsFiletypeScss } from 'react-icons/bs';
import {
  SiCss3,
  SiPython,
  SiGnubash,
  SiHtml5,
  SiReact,
  SiTypescript,
  SiPhp,
} from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';
import { IoLogoJavascript } from 'react-icons/io5';

export interface CodeTitleProps {
  title: string;
  lang: string;
}

export default function CodeTitle({ title, lang }: CodeTitleProps) {
  let Icon;
  switch (lang) {
    case 'html':
      Icon = SiHtml5;
      break;
    case 'css':
      Icon = SiCss3;
      break;
    case 'scss':
      Icon = BsFiletypeScss;
      break;
    case 'js':
      Icon = IoLogoJavascript;
      break;
    case 'bash':
      Icon = SiGnubash;
      break;
    case 'py':
      Icon = SiPython;
      break;
    case 'json':
      Icon = VscJson;
      break;
    case 'jsx':
      Icon = SiReact;
      break;
    case 'tsx':
      Icon = SiReact;
      break;
    case 'react':
      Icon = SiReact;
      break;
    case 'ts':
      Icon = SiTypescript;
      break;
    case 'php':
      Icon = SiPhp;
      break;
    default:
      Icon = BsFileEarmarkCodeFill;
      break;
  }
  return (
    <div className="flex items-center border overflow-x-auto border-blockBorderColorDark border-b-0 rounded-t-xl bg-[#282c34] px-4 py-3 text-[--dark-text-color] not-prose">
      <Icon className="w-5 h-auto mr-3 shrink-0" />
      <p className="mb-0 text-sm lg:text-base">{title}</p>
    </div>
  );
}
