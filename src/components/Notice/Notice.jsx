import React from 'react';
import styles from './Notice.module.scss';

const Notice = ({ children }) => <p className={styles.notice}>{children}</p>;

export default Notice;
