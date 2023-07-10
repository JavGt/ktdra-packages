import styled from '@emotion/styled';

export const ListaObjetivoItemStl = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }

  .item-text {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;

    h3 {
      margin: 0;
    }

    p {
      margin: 0;
      max-width: 100%;
    }
  }

  svg {
    position: sticky;
    top: 0;
    display: block;
    margin-bottom: auto;
  }
`;
