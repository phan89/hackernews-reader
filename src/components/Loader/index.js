import React from 'react';
import { Animation } from './styles';

const Loader = () => {
  return (
    <div>
      <Animation>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </Animation>
    </div>
  );
};

export default Loader;
