import React from 'react';
import { styled } from '@emotion/styled';
import { GridProps } from './types';

const StyledGrid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns || 12}, 1fr);
  gap: ${({ gap }) => gap || '1rem'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  justify-content: ${({ justifyContent }) => justifyContent || 'start'};
`;

export const Grid: React.FC<GridProps> = ({ children, ...props }) => {
  return <StyledGrid {...props}>{children}</StyledGrid>;
}; 