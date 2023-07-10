import styled from '@emotion/styled';
import { Insets, InsetsVertex, Styles } from './types';
import { breakpoints } from '../constants';

export const StyledFather = styled('div')<{
  margin?: Insets;
  position?: Styles['position'];
}>`
  display: flex;
  justify-content: ${({ position }) => {
    if (!position) return 'flex-start';

    if (position === 'center') return 'center';
    if (position === 'right') return 'flex-end';
    if (position === 'left') return 'flex-start';

    return 'flex-start';
  }};

  margin: ${({ margin }) =>
    FactorySize({
      bottom: (margin?.bottom ?? 0) / 2,
      left: (margin?.left ?? 0) / 2,
      right: (margin?.right ?? 0) / 2,
      top: (margin?.top ?? 0) / 2,
    })};

  @media (min-width: ${breakpoints.sm}px) {
    margin: ${({ margin }) => FactorySize(margin)};
  }
`;

export const StyledComponent = styled('div')<Styles>`
  color: ${({ color }) => color ?? 'black'};
  padding: ${({ padding }) =>
    FactorySize({
      bottom: (padding?.bottom ?? 0) / 2,
      left: (padding?.left ?? 0) / 2,
      right: (padding?.right ?? 0) / 2,
      top: (padding?.top ?? 0) / 2,
    })};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? 'transparent'};

  border-radius: ${({ borderRadius }) => {
    if (!borderRadius) return '0px';

    const { topLeft, topRight, bottomLeft, bottomRight } =
      borderRadius as InsetsVertex;

    return `${topLeft ?? 0}px ${topRight ?? 0}px ${bottomLeft ?? 0}px ${
      bottomRight ?? 0
    }px`;
  }};

  ${({ border }) => {
    if (!border) return '';

    const { position, color, width, type } = border;

    const tag =
      position === 'full' || !position ? 'border' : `border-${position}`;

    return `${tag}: ${width ?? 0}px ${type ?? 'solid'} ${color ?? 'black'};`;
  }}

  width: ${({ width }) => width ?? 100}%;
  @media (min-width: ${breakpoints.sm}px) {
    padding: ${({ padding }) => FactorySize(padding)};
  }
`;

export const FactorySize = (prop: Insets | undefined) => {
  if (!prop) return '0px';

  const { top, right, bottom, left } = prop as Insets;

  return `${top ?? 0}px ${right ?? 0}px ${bottom ?? 0}px ${left ?? 0}px`;
};
