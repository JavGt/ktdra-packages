import styled from '@emotion/styled';
import { LecturaBTStlProps } from './type';

export const LecturaBTStyled = styled.div<LecturaBTStlProps>`
  position: relative;

  .icon {
    box-sizing: border-box;
    width: 70px;
    height: 70px;
    position: absolute;
    top: -30px;
    left: 0px;
    z-index: 1;
    border-radius: 100%;
    fill: ${({ colors }) => colors.main};
    background: white;
  }
  .content {
    margin: 30px 20px 10px 30px;
    background: ${({ colors }) => colors.light};
    padding: 20px 30px;
    box-shadow: 10px 0px 10px 0 rgba(0, 0, 0, 0.2);
    position: relative;
    border-radius: 0 20px 20px 0;
  }
`;
