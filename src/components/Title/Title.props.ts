import {DetailedHTMLProps, ReactNode, HTMLAttributes} from 'react';

export interface TitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  tag: 'h1' | 'h2' | 'h3';
  children: ReactNode;
}
