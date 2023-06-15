import React from 'react';
import styled from '@emotion/styled';
import { BoxProps } from '../ListBox';
import { markdownToHtml } from '../../utils';
import { Color } from '@ktdra-digital/utils';

const BoxDGB: React.FC<BoxProps> = ({ title, text, colorCustom }) => {
	const [pt, setPt] = React.useState(0);
	const refTitle = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (refTitle.current) {
			const height = refTitle.current.clientHeight;
			setPt(height);
		}
	}, [refTitle]);

	return (
		<BoxDGBStyle colorCustom={colorCustom} pt={pt}>
			<div ref={refTitle} className='title'>
				{title}
			</div>

			<div
				className='text'
				dangerouslySetInnerHTML={{ __html: markdownToHtml(text) }}
			/>
		</BoxDGBStyle>
	);
};

export const BoxDGBStyle = styled.div<{
	colorCustom: Color;
	pt: number;
}>`
	border-radius: 10px;
	border: 1px solid ${({ colorCustom }) => colorCustom.alternative};
	padding: 10px;
	position: relative;
	padding-top: ${({ pt }) => pt + 10 + 10}px;

	.title {
		position: absolute;
		left: 0;
		padding: 10px;
		padding-right: 15px;
		border-radius: 0 20px 20px 0;
		color: #fff;
		top: 10px;
		max-width: 90%;
		font-weight: 500;
		background-color: ${({ colorCustom }) => colorCustom.alternative};
	}
`;

export default BoxDGB;
