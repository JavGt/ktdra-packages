import styled from '@emotion/styled';
import { DividerStlProps } from './types';

export const DividerStl = styled('div', {
  shouldForwardProp: (prop) =>
    ['size', 'colors', 'type', 'color'].includes(prop as string),
})<DividerStlProps>`
  border-bottom: ${({ size, colors, type, color }) =>
    `${size}px ${type} ${color ? color : colors.main}`};
`;
