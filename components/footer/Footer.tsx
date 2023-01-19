import React from 'react';
import style from './Footer.module.css';

export interface IFooter {
  footerContent: string;
}

const Footer: React.FC<IFooter> = ({ footerContent }) => {
  return <footer className={style.footer}>{footerContent}</footer>;
};

export default Footer;
