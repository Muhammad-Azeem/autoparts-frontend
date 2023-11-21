import React from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 20% auto; /* Adjust the percentage to position it at the desired vertical position */
  border-color: red;
`;

const loaderContainerStyle = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(5px); /* Adjust the blur intensity */
  background: rgba(255, 255, 255, 0.5); /* Adjust the background color and opacity */
  padding: 20px;
  border-radius: 10px;
  z-index: 1000;
`;

const LoaderSpinnerMini = () => {
  return (
    <div className="sweet-loading2" css={loaderContainerStyle}>
    <ClipLoader css={override} size={150} color={'#123abc'} loading={true} />
  </div>
  );
};

export default LoaderSpinnerMini;
