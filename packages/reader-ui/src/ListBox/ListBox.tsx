import React from 'react';
import styled from '@emotion/styled';
import { StylesContainerFC, Subsistema, stylesContainer } from '../utils';
import { PaletteKeys, Color } from '@ktdra-digital/utils';
import { BoxBt } from './BoxBt';
import { BoxDGB } from './BoxDGB';
import { ListBoxProps } from './types';

export type ItemGrid = {
  row?: { start: number; end: number } | number;
  col?: number;
};

export type BoxProps = {
  title: string;
  text: string;
  paletteKey: PaletteKeys;
  colorCustom: Color;
};

const ListBox: StylesContainerFC<ListBoxProps> = ({
  list,
  colors,
  subsistema,
}) => {
  const selectBox = (sub: Subsistema): React.ElementType => {
    switch (sub) {
      case 'BT':
        return BoxBt;
      case 'DGB':
        return BoxDGB;
      default:
        return BoxBt;
    }
  };

  return (
    <ListBoxContainer>
      {list.map((item, idx) => {
        const Component = selectBox(subsistema);

        return (
          <ListBoxItem
            className="list-box-item"
            key={idx}
            col={item.col}
            row={item.row}
          >
            <Component
              {...item}
              colorCustom={colors[item.paletteKey as PaletteKeys]}
            />
          </ListBoxItem>
        );
      })}
    </ListBoxContainer>
  );
};

export const ListBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  width: 100%;
  gap: 10px;

  @media (hover: hover) {
    &:hover {
      .list-box-item:not(:hover) {
        filter: grayscale(0.9);
      }
    }
  }
`;

export const ListBoxItem = styled.div<ItemGrid>`
  grid-column: span 10;
  grid-row: span 1;

  @media (min-width: 768px) {
    grid-column: ${({ col }) => (col ? `span ${col}` : 'span 10')};
    grid-row: ${({ row }) =>
      row
        ? typeof row === 'number'
          ? `span ${row}`
          : `${row.start} / ${row.end}`
        : 'span 1'};
  }

  & > div {
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    .text {
      font-size: 16px;
      line-height: 1.5;
    }
  }
`;

export default stylesContainer(ListBox);
