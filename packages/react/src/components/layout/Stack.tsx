import React from 'react';
import { styled } from '@emotion/styled';
import { StackProps } from './types';

const StyledStack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  gap: ${({ spacing }) => spacing || '1rem'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  justify-content: ${({ justifyContent }) => justifyContent || 'start'};
`;

export const Stack: React.FC<StackProps> = ({ children, ...props }) => {
  return <StyledStack {...props}>{children}</StyledStack>;
}; 