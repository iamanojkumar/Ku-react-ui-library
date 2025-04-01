import React from 'react';
import { styled } from '@emotion/styled';
import { DividerProps } from './types';

const StyledDivider = styled.hr<DividerProps>`
  border: none;
  margin: 0;
  ${({ orientation = 'horizontal', thickness = '1px', color = 'currentColor' }) => `
    ${orientation === 'horizontal'
      ? `
        width: 100%;
        height: ${thickness};
        border-top: ${thickness} solid ${color};
      `
      : `
        width: ${thickness};
        height: 100%;
        border-left: ${thickness} solid ${color};
      `}
  `}
`;

export const Divider: React.FC<DividerProps> = (props) => {
  return <StyledDivider {...props} />;
}; 