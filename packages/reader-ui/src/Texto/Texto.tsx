import React from 'react';
import { stylesContainer, StylesContainerFC, markdownToHtml } from '../utils';
import { TextoProps } from './types';

const Texto: StylesContainerFC<TextoProps> = ({ text }) => (
  <div dangerouslySetInnerHTML={{ __html: markdownToHtml(text) }} />
);

export default stylesContainer(Texto);
