import React from 'react';
import styled from 'styled-components';
import { StylesContainerFC, stylesContainer } from '../utils';

export type IframeProps = {
	url: string;
};

const Iframe: StylesContainerFC<IframeProps> = ({ url }) => {
	return (
		<IframeStyle>
			<iframe src={url} width='100%' height='100%' allowFullScreen />
		</IframeStyle>
	);
};

export const IframeStyle = styled.div``;

export default stylesContainer(Iframe);
