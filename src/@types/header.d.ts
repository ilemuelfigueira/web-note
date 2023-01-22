interface UserNameProps extends React.HTMLAttributes<HTMLSpanElement> {}

interface ProfileAvatarProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

interface HeaderTitleProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

interface HeaderLocationProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

interface HeaderInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  location: string;
}

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  location: string;
  userName: string;
  ProfileAvatar?: string;
}
