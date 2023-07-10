import styled from '@emotion/styled';
import { Palette } from '@ktdra-digital/utils';

export const TituloEjemploStl = styled.div<{
  colors: Palette;
}>`
  display: flex;
  align-items: center;

  & .icon {
    fill: ${({ colors }) => colors.secondary.main};
  }

  .dot {
    width: 7px;
    height: 7px;
    border-radius: 100%;
    background-color: ${({ colors }) => colors.secondary.alternative};
  }

  & .title {
    color: ${({ colors }) => colors.primary.main};
    margin: 0 5px;
    font-weight: 400;
    text-transform: uppercase;
  }
`;
