import { Color } from '@ktdra-digital/utils';
import styled from '@emotion/styled';

export const ButtonStyle = styled.a<{
	colors: Color;
}>`
	width: fit-content;
	margin: 0 auto;
	color: ${({ colors: colorCustom }) => colorCustom.main};
	display: flex;
	font-weight: 600;
	cursor: pointer;
	gap: 10px;
	text-decoration: none;
	align-items: center;
	background-color: ${({ colors: colorCustom }) => colorCustom.light};
	border-radius: 10px;
	transition: background-color 0.4s ease, color 0.4s ease;
	font-size: 16px;
	padding: 5px 10px;

	@media (min-width: 768px) {
		padding: 10px 20px;
		font-size: 20px;
	}

	&:hover {
		background-color: ${({ colors: colorCustom }) => colorCustom.alternative};
		color: ${({ colors: colorCustom }) => colorCustom.light};
		svg {
			fill: ${({ colors: colorCustom }) => colorCustom.light};
		}
	}
	svg {
		transition: fill 0.2s ease-in-out;
		fill: ${({ colors: colorCustom }) => colorCustom.main};
		width: min(30px, 30px);
		@media (min-width: 768px) {
			width: min(40px, 40px);
		}
	}
`;
