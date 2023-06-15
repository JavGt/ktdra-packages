import React from 'react';
import styled from '@emotion/styled';
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

export const IframeStyle = styled.div`
	height: 500px;
	min-width: 700px;
	margin: 0 auto;
	width: fit-content;
	
	iframe {
		width: 100%;
		height: 100%;
		border: none;
	}
`;

export default stylesContainer(Iframe);
