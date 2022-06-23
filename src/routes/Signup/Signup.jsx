import React, { useState } from 'react';
import SignupForm from 'components/SignupForm/SignupForm';
import Title from 'components/Title/Title';
import Notice from 'components/Notice/Notice';
import styles from './Signup.module.scss';

const Signup = () => {
  const [success, setSuccess] = useState(false);
  const onSuccess = () => setSuccess(true);

  return (
    <section className={styles.signup}>
      {success ? (
        <>
          <Title size="lg">Welcome to IntoJazz!</Title>
          <Notice>
            We've just sent you an email for verification.
            <br />
            Please check it!
          </Notice>
        </>
      ) : (
        <>
          <Title size="lg">Sign Up</Title>
          <SignupForm onSuccess={onSuccess} />
        </>
      )}
    </section>
  );
};

export default Signup;
