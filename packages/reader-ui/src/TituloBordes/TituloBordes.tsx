import React from 'react';
import styled from '@emotion/styled';
import { markdownToHtml, stylesContainer, StylesContainerFC } from '../utils';
import { TituloBordesProps } from './types';

const TituloBordes: StylesContainerFC<TituloBordesProps> = ({
  colors,
  title,
  paletteKey = 'primary',
}) => {
  return (
    <TituloBordesStyle color={colors[paletteKey].main}>
      <h2
        className="title"
        dangerouslySetInnerHTML={{
          __html: markdownToHtml(title, 'parseInline'),
        }}
      />
    </TituloBordesStyle>
  );
};

export const TituloBordesStyle = styled.div<{
  color: string;
}>`
  margin: 30px 0;
  border-top: 7px dotted ${({ color }) => color};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    max-width: 70%;
    position: absolute;
    top: -50%;
    margin: 0;
    transform: translateY(-50%);
    padding: 10px 40px;
    background: ${({ color }) => color};
    color: white;
    clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
  }
`;

export default stylesContainer(TituloBordes);
