import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material';
import { type Color } from '@ktdra-digital/utils';
import { type StylesContainerFC, stylesContainer } from '../utils';

export type VideosProps = {
	url: string;
};

const Videos: StylesContainerFC<VideosProps> = ({ url, colorAC }) => {
	const color = colorAC as Color;
	const [videoId, setVideoId] = useState('' as string);

	const [isShorts, setIsShorts] = useState(false as boolean);
	const [error, setError] = useState(false as boolean);

	useEffect(() => {
		try {
			const youtubeURL = new URL(url);

			if (youtubeURL.pathname.startsWith('/shorts') || youtubeURL.pathname.startsWith('/embed')) {
				const path = youtubeURL.pathname.split('/');
				const videoId = path[path.length - 1];
				setIsShorts(true);
				setVideoId(videoId);
				return;
			}

			const params = new URLSearchParams(youtubeURL.search);

			const videoId = params.get('v') as string;

			setVideoId(videoId);
		} catch (error) {
			setError(true);
		}
	}, [url]);

	return (
		<VideoS className='iframe' color={color.alternative} btn={color.light}>
			<div className='header'>
				<span className='btn'></span>
				<span className='btn'></span>
				<span className='btn'></span>
			</div>
			{error ? (
				<div className='error'>
					<h1>URL inválida</h1>

					<p>Por favor, verifique se a URL está correta.</p>
				</div>
			) : (
				<div className='content'>
					<iframe
						src={`https://www.youtube.com/embed/${videoId}`}
						title='YouTube video player'
						allowFullScreen
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					/>
				</div>
			)}
		</VideoS>
	);
};

const VideoS = styled('div')<{
	color: string;
	btn: string;
}>(({ color, btn }) => ({
	display: 'flex',
	borderRadius: ' 30px 30px 20px 20px',
	overflow: 'hidden',
	border: `2px solid #ffffff50`,
	flexDirection: 'column',
	boxShadow: '10px 10px 10px 0 rgba(0, 0, 0, 0.2)',
	margin: '0 20px 20px 0',

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
	'& .error': {
		padding: '10px',
		background: 'black',
		color: 'white',

		'& h1': {
			margin: '0',
		},
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

export default stylesContainer(Videos, {
	colorSelector: 'primary',
});
