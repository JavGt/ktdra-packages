import React from 'react';
import styled from '@emotion/styled';
import { Placas5EProps } from '../Placas5E';
import { useIcon } from '@ktdra-digital/icons';
import { Color } from '@ktdra-digital/utils';

const Placa5EDGB: React.FC<Placas5EProps> = ({
	icon,
	color,
	label,
	colors,
	dots,
}) => {
	const Icon = useIcon({ folder: `DGB/PLACAS5E`, name: icon });

	return (
		<Placa5EDGBStyle colorC={color}>
			<span className='icon'>{Icon && <Icon />}</span>
			<div className='label'>{label}</div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '10px',
					marginLeft: '10px',
					flexDirection: 'row-reverse',
				}}
			>
				{Array.from({ length: Number(dots) }).map((_, i) => {
					// los numeros par son primarios, los impares secundarios
					const isPrimary = i % 2 === 0;

					return (
						<div
							className='dot'
							key={i}
							style={{
								border: `3px solid #fff`,
								padding: '8px',
								borderRadius: '100%',
								backgroundColor:
									colors?.[isPrimary ? 'primary' : 'secondary'].alternative ??
									color.main,
							}}
						/>
					);
				})}
			</div>
		</Placa5EDGBStyle>
	);
};

export const Placa5EDGBStyle = styled.div<{
	colorC: Color;
}>`
	display: flex;
	align-items: center;
	margin: 10px 0 0 10px;

	.icon {
		box-sizing: border-box;
		border-radius: 100%;
		border: 3px solid ${(props) => props.colorC.alternative};
		width: 60px;
		min-width: 60px;
		height: 60px;
		min-height: 60px;
		padding: 4px;
		background-color: #fff;
		z-index: 1;
		box-shadow: 0 0 5px #000;

		svg {
			fill: ${(props) => props.colorC.alternative};
			path:nth-of-type(2) {
				fill: ${(props) => props.colorC.alternative};
			}
		}
	}

	.label {
		border: 3px solid #fff;
		background: ${(props) => props.colorC.alternative};
		color: #fff;
		margin-left: -10px;
		padding: 8px 30px 8px 20px;
		font-weight: 600;
		font-size: 20px;
		border-radius: 0 30px 30px 0;
	}
`;

export default Placa5EDGB;
