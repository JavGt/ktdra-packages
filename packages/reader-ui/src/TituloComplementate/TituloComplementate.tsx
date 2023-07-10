import React from 'react';
import styled from '@emotion/styled';
import { Color } from '@ktdra-digital/utils';
import { StylesContainerFC, markdownToHtml, stylesContainer } from '../utils';
import { useIcon } from '@ktdra-digital/icons';
import { TituloComplementateProps } from './types';

const TituloComplementate: StylesContainerFC<TituloComplementateProps> = ({
  title,
  colors,
  icon,
  remColorIcon,
  remColorTitle,
  subsistema,
}) => {
  const { primary, secondary } = colors;
  const Icon = icon && useIcon(icon, subsistema);

  return (
    <TituloComplementateStyle
      remColorIcon={remColorIcon}
      remColorTitle={remColorTitle}
      primary={primary}
      secondary={secondary}
    >
      {Icon && <Icon className="icon" />}

      <h3
        className="text"
        dangerouslySetInnerHTML={{
          __html: markdownToHtml(title, 'parseInline'),
        }}
      />

      <div className="line" />
    </TituloComplementateStyle>
  );
};

export default stylesContainer(TituloComplementate);

export const TituloComplementateStyle = styled.div<
  Pick<TituloComplementateProps, 'remColorIcon' | 'remColorTitle'> & {
    primary: Color;
    secondary: Color;
  }
>`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ secondary, remColorTitle }) =>
    !remColorTitle ? secondary.alternative : '#000'};

  .text {
    max-width: 40%;
  }

  svg {
    flex-shrink: 0;
    path {
      ${({ remColorIcon, secondary, primary }) =>
        !remColorIcon &&
        `&:nth-child(1) {
				fill: ${primary.alternative};
			}
			&:nth-child(2) {
				fill: ${secondary.alternative};
			}`}
    }
  }

  .line {
    width: 100%;
    height: 2px;
    background: ${({ secondary }) => secondary.alternative};
  }
`;
