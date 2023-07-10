import React from 'react';
import { WrapperStyleProps } from './types';
import { StyledComponent, StyledFather } from './WrapperStyle.styled';

const WrapperStyle: React.FC<WrapperStyleProps> = ({ children, styles }) => (
  <StyledFather margin={styles?.margin} position={styles?.position}>
    <StyledComponent data-styled-container {...styles}>
      {children}
    </StyledComponent>
  </StyledFather>
);

export default WrapperStyle;
