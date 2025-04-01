import React from 'react';
import { styled } from '@emotion/styled';
import { ContainerProps } from './types';

const StyledContainer = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || '1200px'};
  margin: 0 auto;
  padding: ${({ padding }) => padding || '0 1rem'};
`;

export const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
}; 