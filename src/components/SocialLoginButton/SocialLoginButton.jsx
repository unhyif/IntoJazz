import React from 'react';
import classNames from 'classnames/bind';
import styles from './SocialLoginButton.module.scss';

const cn = classNames.bind(styles);

const SocialLoginButton = ({ icon, content, onClick }) => (
  <button aria-label={content} className={cn('btn')} onClick={onClick}>
    <div className={cn('wrapper')}>
      <div class={cn('wrapper__icon')}>{icon}</div>
      <span className={cn('wrapper__content')}>{content}</span>
    </div>
  </button>
);

export default SocialLoginButton;
