import React from 'react';

import style from './BaseTemplate.module.css';

export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div className={style.container}>{sampleTextProp}</div>;
};

export default BaseTemplate;
