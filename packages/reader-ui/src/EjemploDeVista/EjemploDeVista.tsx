import React from 'react';
import { AC } from '@ktdra/utils';
import { ContainerShadow } from '../ContainerShadow';
import { StylesContainerFC } from '../utils/styleContainer';
import Ejemplo from '../Ejemplo/Ejemplo';

export type EjemploDeVistaProps = {
	text: string;
	styleText?: Partial<{
		fontSize: string;
		lineHeight: string;
		fontWeight: 'normal' | 'bold' | 'bolder' | 'lighter';
		color: string;
	}>;
};

const EjemploDeVista: StylesContainerFC<EjemploDeVistaProps> = ({ text, styleText }) => {
	return (
		<div>
			<ContainerShadow
				children='Data'
				AC='Ciencias biológicas y químicas'
				background={{
					backgroundColor: '#f5f5f5',
				}}
				item={{
					backgroundColor: '',
				}}
			/>
			{/* <p
				style={{
					fontSize: styleText?.fontSize,
					lineHeight: styleText?.lineHeight,
					fontWeight: styleText?.fontWeight,
					color: styleText?.color,
				}}
			>
				{text}
			</p>

			<code
				style={{
					fontFamily: 'monospace',
					backgroundColor: '#f5f5f5',
					padding: '10px',
					borderRadius: '5px',
					display: 'block',
					maxWidth: '100%',
					overflowX: 'auto',
					boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
				}}
			>
				<pre
					style={{
						margin: 0,
						whiteSpace: 'pre-wrap',
						wordWrap: 'break-word',
						lineHeight: 1.5,
					}}
				>
					{JSON.stringify(styleText, null, 2)}
				</pre>
			</code> */}
		</div>
	);
};

export default EjemploDeVista;
