import styled from '@emotion/styled';
import { ContainerShadowStlProps } from './types';

export const ContainerShadowStl = styled.div<ContainerShadowStlProps>`
  box-sizing: border-box;
  width: calc(100% - 10px);
  margin-bottom: 10px;
  padding: 10px 20px;
  box-shadow: 10px 10px 0px ${({ colors }) => colors.main};
  border: 3px solid ${({ colors }) => colors.main};
  border-radius: 10px;
`;
