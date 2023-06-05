import React from 'react';
import styled from 'styled-components';
import { Placas5EProps } from '../Placas5E';
import { useIcon } from '@ktdra-digital/icons';

const Placa5EDGB: React.FC<Placas5EProps> = ({ icon }) => {
	const Icon = useIcon({ folder: `DGB/PLACAS5E`, name: icon });

	return <Placa5EDGBStyle>Placa5EDGB</Placa5EDGBStyle>;
};

export const Placa5EDGBStyle = styled.div``;

export default Placa5EDGB;
