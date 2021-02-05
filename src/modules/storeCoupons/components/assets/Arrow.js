// @flow
/* eslint-disable max-len */
import * as React from 'react';

function Arrow(props: any) {
  return (
    <svg width={20} height={21} viewBox="0 0 20 21" fill="none" {...props}>
      <path
        d="M10 16.333V4.667M4.167 10.5l5.834-5.833 5.833 5.833"
        stroke="#5DCF56"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Arrow;
