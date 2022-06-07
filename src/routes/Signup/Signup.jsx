import React, { useState } from 'react';
import SignupForm from 'components/SignupForm/SignupForm';

const Signup = () => {
  const [success, setSuccess] = useState(false);
  const onSuccess = () => setSuccess(true);

  return success ? (
    <>
      <h1>Welcome to IntoJazz!</h1>
      <p>We've just sent you an email for verification. Please check it!</p>
    </>
  ) : (
    <SignupForm onSuccess={onSuccess} />
  );
};

export default Signup;
