import styled from "@emotion/styled";
import { Color } from "@ktdra-digital/utils";

export const Placa5EDGBStyle = styled.div<{
  colors: Color;
}>`
  display: flex;
  align-items: center;
  margin: 10px 0 0 10px;

  .icon {
    box-sizing: border-box;
    border-radius: 100%;
    border: 3px solid ${(props) => props.colors.alternative};
    width: 60px;
    min-width: 60px;
    height: 60px;
    min-height: 60px;
    padding: 4px;
    background-color: #fff;
    z-index: 1;
    box-shadow: 0 0 5px #000;

    svg {
      fill: ${(props) => props.colors.alternative};
      path:nth-of-type(2) {
        fill: ${(props) => props.colors.alternative};
      }
    }
  }

  .label {
    border: 3px solid #fff;
    background: ${(props) => props.colors.alternative};
    color: #fff;
    margin-left: -10px;
    padding: 8px 30px 8px 20px;
    font-weight: 600;
    border-radius: 0 30px 30px 0;
  }
`;
