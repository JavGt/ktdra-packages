import React from 'react';
import styled from 'styled-components';

export type EspacioProps = {
	espacio: number;
};

const Espacio: React.FC<EspacioProps> = ({ espacio, ...props }) => (
	<EspacioStyled espacio={espacio} {...props}></EspacioStyled>
);

const EspacioStyled = styled.div<{ espacio: number }>`
	height: ${({ espacio }) => espacio * 5}px;
`;

export default Espacio;
