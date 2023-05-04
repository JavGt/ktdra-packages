import React, { Children, useEffect } from 'react';
import { AC } from '../../utils/AreasConocimiento';
import { useColorsAC } from '../../hooks/useColorsAC';
import { styled } from '@mui/material';

export type VideosProps = {
	AC: AC;
	url: string;
};

const Videos: React.FC<VideosProps> = ({ AC, url }) => {
	const color = useColorsAC(AC, 'primary') as {
		alternative: string;
		light: string;
	};

	return (
		<VideoS className='iframe' color={color.alternative} btn={color.light}>
			<div className='header'>
				<span className='btn'></span>
				<span className='btn'></span>
				<span className='btn'></span>
			</div>

			<div className='content'>
				<iframe
					src={url}
					title='YouTube video player'
					allowFullScreen
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				/>
			</div>
		</VideoS>
	);
};

const VideoS = styled('div')<{
	color: string;
	btn: string;
}>(({ color, btn }) => ({
	margin: 10,
	display: 'flex',
	borderRadius: ' 30px 30px 20px 20px',
	overflow: 'hidden',
	border: `2px solid #ffffff50`,
	flexDirection: 'column',
	boxShadow: '10px 10px 10px 0 rgba(0, 0, 0, 0.2)',

	'& .header': {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		height: '50px',
		background: color,
		gap: '5px',
		padding: '0 20px',
	},

	'& .btn': {
		height: '8px',
		width: '8px',
		borderRadius: '50%',
		background: btn,
	},

	'& .content': {
		padding: '10px',
		background: 'black',
	},
	'& iframe': {
		border: 'none',
		width: '100%',
		height: '315px',
	},
}));

export default Videos;
