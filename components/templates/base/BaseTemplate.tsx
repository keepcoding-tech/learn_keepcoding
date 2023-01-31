import React from 'react';

export interface IBaseTemplate {
  textProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = (prop) => {
  return <div>{prop.textProp}</div>;
};

export default BaseTemplate;
