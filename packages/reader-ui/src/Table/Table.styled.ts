import styled from '@emotion/styled';
import type { TableStlProps, TdStlProps, ThStlProps } from './types';

export const ThStl = styled.th<ThStlProps>`
  color: white;
  background-color: ${({ keyColor }) => keyColor};
`;

export const TdStl = styled.td<TdStlProps>`
  background-color: ${({ keyColor }) => keyColor};

  .markdown {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      margin: 0;
    }
  }
`;

export const TableStl = styled.div<TableStlProps>`
  table {
    border-collapse: collapse;
    width: 100%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }
  caption {
    color: ${({ colors }) => colors.primary.main};
    caption-side: ${({ captionSide }) => captionSide};
  }

  th,
  td {
    border: 2px solid white;
    padding: 5px;
  }

  th {
  }
`;
