import React from 'react';
import styled from '@emotion/styled';
import {
  BorderRadius,
  FactorySize,
  Insets,
  InsetsVertex,
} from '../WrapperStyle';

export type StylesContainerGroupProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  styles: {
    margin?: Insets;
    padding?: Insets;
    borderRadius: BorderRadius;
    backgroundColor?: React.CSSProperties['backgroundColor'];
  };
};

export const StylesContainerGroup: React.FC<StylesContainerGroupProps> = ({
  children,
  styles,
  ...rest
}) => (
  <StylesContainer {...styles} data-style {...rest}>
    {children}
  </StylesContainer>
);

export const StylesContainer = styled.div<{
  margin?: Insets;
  padding?: Insets;
  borderRadius: BorderRadius;
  backgroundColor?: React.CSSProperties['backgroundColor'];
}>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? 'transparent'};
  padding: ${({ padding }) => FactorySize(padding)};
  margin: ${({ margin }) => FactorySize(margin)};
  border-radius: ${({ borderRadius }) => {
    if (!borderRadius) return '0px';

    const { topLeft, topRight, bottomLeft, bottomRight } =
      borderRadius as InsetsVertex;

    return `${topLeft ?? 0}px ${topRight ?? 0}px ${bottomLeft ?? 0}px ${
      bottomRight ?? 0
    }px`;
  }};
`;
