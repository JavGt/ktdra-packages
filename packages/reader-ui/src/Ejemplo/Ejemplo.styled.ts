import { Color } from '@ktdra-digital/utils';
import styled from '@emotion/styled';

export const EjemploStyled = styled.div<
{
	colors: Color;
}>`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
	margin-right: 20px;

	.label {
		width: fit-content;
		background: ${(props) => props.colors.alternative};
		padding: 5px 10px;
		border-radius: 0 10px 0 0;
		color: #fff;
		text-transform: uppercase;
	}

	.content {
		padding: 10px;
		background: #f8f8f5;
		border-radius: 0 20px 0 0;
		box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.2);
	}
`;
