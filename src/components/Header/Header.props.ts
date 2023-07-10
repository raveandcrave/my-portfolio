import {ValidLocale} from '@/i18n';
import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  lang: ValidLocale;
}
