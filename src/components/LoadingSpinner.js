import React from 'react';
import tw from 'twin.macro';

const LoadingContainer = tw.div`flex flex-col items-center justify-center gap-4 px-4 py-8`;
const SpinContainer = tw.div`animate-spin text-red-500`;
const Text = tw.h1`font-semibold text-xl`

function LoadingSpinner(props) {
  return (
    <LoadingContainer>
      <SpinContainer>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.9 22.9">
          <circle
            cx="11.45"
            cy="11.45"
            r="9.95"
            fill="none"
            stroke="#ffffff07"
            strokeMiterlimit="10"
            strokeWidth="3"
          />
          <path
            d="M4.41,4.41a10,10,0,0,0,7,17"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="3"
          />
          </svg>
      </SpinContainer>
      <Text>{props.text}</Text>
    </LoadingContainer>
  );
}

export default LoadingSpinner;
