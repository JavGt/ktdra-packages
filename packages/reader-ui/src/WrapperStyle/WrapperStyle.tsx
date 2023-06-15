import React from 'react';
import { WrapperStyleProps } from './types';
import { StyledComponent } from './WrapperStyle.styled';

const WrapperStyle: React.FC<WrapperStyleProps> = ({ children, styles }) => (
	<StyledComponent className='wrapperStyle' {...styles}>
		{children}
	</StyledComponent>
);

export default WrapperStyle;
