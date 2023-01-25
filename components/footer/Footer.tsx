import React from 'react';
import style from './Footer.module.css';

export interface IFooter {
  content: string;
}

const Footer: React.FC<IFooter> = (footer) => {
  return <footer className={style.footer}>{footer.content}</footer>;
};

export default Footer;
