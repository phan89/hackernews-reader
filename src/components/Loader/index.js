import React from 'react';
import { Animation } from './styles';
import { DoubleBounce } from 'styled-spinkit';

const LoaderComponent = () => {
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

export const Loader = LoaderComponent;
export const DoubleBounceLoader = DoubleBounce;
