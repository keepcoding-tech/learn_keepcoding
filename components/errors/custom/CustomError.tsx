import React from 'react';
import { styles } from './CustomErrorStyles';

export interface ICustomError {
  statusCode: string;
  title: string;
  description: string;
}

const CustomError: React.FC<ICustomError> = (props) => {
  return (
    <>
      <center style={styles.center}>
        <p style={styles.statusCode}>{props.statusCode}</p>
        <p style={styles.title}>{props.title.toUpperCase()}</p>
        <b>
          <p style={styles.description}>{props.description}</p>
        </b>
      </center>
    </>
  );
};

export default CustomError;
