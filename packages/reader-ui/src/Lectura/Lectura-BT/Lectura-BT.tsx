import React from 'react';
import { LecturaBTStyled } from './Lectura-BT.styled';
import { LecturaProps } from '../Lectura';
import { Lectura as LecturaIcon } from '@ktdra-digital/icons/dist/BT';
import { markdownToHtml } from '../../utils';

const LecturaBT: React.FC<LecturaProps> = ({ colors, text }) => {
	return (
		<LecturaBTStyled colors={colors}>
			<div className='icon'>
				<LecturaIcon />
			</div>

			<div
				className='content'
				dangerouslySetInnerHTML={{ __html: markdownToHtml(text) }}
			/>
		</LecturaBTStyled>
	);
};

export default LecturaBT;
