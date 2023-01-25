import React from 'react';
import style from './BaseTemplate.module.css';

export interface IBaseTemplate {
  textProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = (prop) => {
  return <div className={style.container}>{prop.textProp}</div>;
};

export default BaseTemplate;
