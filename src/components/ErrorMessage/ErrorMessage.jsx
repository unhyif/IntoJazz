import React from 'react';
import styles from './ErrorMessage.module.scss';

const ErrorMessage = ({ children, style }) => (
  <p className={styles.message} style={style}>
    {children}
  </p>
);

export default ErrorMessage;
