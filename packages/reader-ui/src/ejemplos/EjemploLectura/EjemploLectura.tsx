import React, { useEffect } from 'react';
import styled from 'styled-components';
import { TextEditor } from '../../TextEditor';
import { Lectura } from '../../Lectura';
import { AC } from '@ktdra-digital/utils';
import Editor from '@ckeditor/ckeditor5-react';

export type EjemploLecturaProps = {
	AC: AC;
	width: number;
	textInitial?: string;
};

const EjemploLectura: React.FC<EjemploLecturaProps> = ({ AC, width, textInitial }) => {
	const [text, setText] = React.useState(textInitial || '');

	return (
		<>
			<EjemploLecturaStyle>
				<div className='control'>
					<TextEditor value={text} onChange={setText} />
				</div>

				<div>
					<Lectura
						item={{ width: `${width}%`, position: 'center' }}
						text={text}
						AC={AC}
					/>
				</div>
			</EjemploLecturaStyle>
		</>
	);
};

export const EjemploLecturaStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100vw;
	padding: 0 10px;
	box-sizing: border-box;
	max-width: 100%;
	.control {
		width: 50%;
		margin: 0 auto;
	}
`;

export default EjemploLectura;
