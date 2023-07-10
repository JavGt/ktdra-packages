import styled from '@emotion/styled';

export const ItemFace = styled.button<{
  color?: string;
}>`
  &:focus {
    outline: none;
  }

  border: none;
  background-color: transparent;
  box-sizing: border-box;
  padding: 0;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 30px;
  width: clamp(20px, 100%, 120px);
  position: relative;
  margin-bottom: calc(12px + 10px + 5px);

  &::before {
    content: attr(data-label);
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 20px;
    margin-top: 10px;
    font-family: 'Roboto', sans-serif;
    left: 50%;
    z-index: 3;
    transform: translateX(-50%);
    background-color: ${(props) => props.color};
    color: white;
    opacity: 0;
    box-shadow: 0px 0px 20px ${(props) => props.color};
    transition: opacity 0.2s ease-in-out, top 0.4s ease, scale 0.4s ease;
  }

  .face {
    margin: 0 auto;
    width: clamp(20px, 100%, 70px);
    height: clamp(20px, 100%, 70px);
    overflow: visible;

    transition: filter 0.4s ease, scale 0.4s ease;

    & > * {
      stroke-width: 5px;
    }
  }

  &:hover,
  &:focus {
    .face {
      scale: 1.2;
      filter: drop-shadow(10px -5px 2px ${(props) => props.color}50);
      fill: ${(props) => props.color}40;
    }

    .linea {
      &::after {
        opacity: 1;
        width: 300%;
        box-shadow: 0px 0px 10px ${(props) => props.color};
      }
    }

    &::before {
      opacity: 1;
      top: 100%;
    }
  }

  .linea {
    position: relative;
    height: 10px;
    background-color: ${(props) => props.color};
    width: 100%;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 2;
      border-radius: 10px;
      width: 0px;
      background-color: ${(props) => props.color};

      transition: opacity 0.3s ease-in-out, padding-right 0.3s ease-in-out,
        padding-left 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
        width 0.3s ease-in-out;
    }
  }

  &:first-child {
    .linea {
      border-radius: 10px 0px 0px 10px;

      &::after {
        left: 0;
      }
    }
  }

  &:nth-child(2) {
    .linea {
      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  &:last-child {
    .linea {
      border-radius: 0px 10px 10px 0px;

      &::after {
        right: 0;
      }
    }
  }
`;

export const GraficaMotivacionalStl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  gap: 10px;

  .title {
    font-size: 18px;
    text-align: center;
    font-weight: 500;
  }

  .grafica {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
