import React from 'react';
import styled from 'styled-components';

export type ProgresionProps = {
	legend: string;
};

const Progresion: React.FC<ProgresionProps> = ({ legend }) => {
	const [width, setWidth] = React.useState<number>(0);

	const legendRef = React.useRef<HTMLLegendElement>(null);

	React.useEffect(() => {
		const legend = legendRef.current;

		if (legend) {
			// Obtener todo el width del elemento del mismo elemento
			const width = legend.getBoundingClientRect().width;

			setWidth(width);
		}
	}, [legend]);

	return (
		<ProgresionStyle width={width}>
			<legend ref={legendRef}>{legend}</legend>

			<p>
				Reconoce sus necesidades materiales (visibles y no vitales) personales, familiares
				y de su comunidad para comprender y explicar la forma en que son satisfechas. El
				ser humano, como organismo vivo, tiene la necesidad de comer, vestir, tener un
				techo, atención médica, educación, entre otros, para lo cual, cada vez las
				familias requieren de más de un ingreso para poder satisfacer dichas necesidades
				materiales (vitales y no vitales) a través de la producción de alimentos,
				productos diversos y servicios.
			</p>
		</ProgresionStyle>
	);
};

export const ProgresionStyle = styled.div<{
	width: number;
}>`
	border: 1px solid red;
	border-top: none;
	position: relative;
	margin: 40px;
	legend {
		position: absolute;
		top: 0;
		left: 0;
		background: red;
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		width: calc(100% - ${({ width }) => width + 20}px);
		height: 1px;
		background: red;
	}
`;

export default Progresion;
