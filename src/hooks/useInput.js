import React, { useState } from 'react';

export const useInput = () => {
  const [input, setInput] = useState('');
  const onInputChange = e => setInput(e.target.value);
  return [input, onInputChange];
};
