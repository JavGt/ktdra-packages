import { Color } from '@ktdra-digital/utils';
import styled from '@emotion/styled';

export const ImageStyle = styled.picture<{
	width?: number;
	height?: number;
	colors: Color;
}>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	gap: 15px;

	img {
		display: block;
		max-width: 100%;
		max-height: 100%;
		width: ${({ width }) => `${width}%` || 'auto'};
		height: ${({ height }) => `${height}%` || 'auto'};
	}

	figcaption {
		color: ${({ colors }) => colors.main};
		padding: 0 10%;
		font-size: 14px;
		line-height: 1.5;
	}
`;
