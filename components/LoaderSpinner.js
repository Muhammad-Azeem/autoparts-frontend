import React from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 20% auto; /* Adjust the percentage to position it at the desired vertical position */
  border-color: red;
`;
const LoaderSpinner = () => {
  return (
    <div className="sweet-loading">
      <ClipLoader css={override} size={150} color={'#123abc'} loading={true} />
    </div>
  );
};

export default LoaderSpinner;
