import React from 'react';
import styles from './LabelInputWrapper.module.scss';

const LabelInputWrapper = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

export default LabelInputWrapper;
