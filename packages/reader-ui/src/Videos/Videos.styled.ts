import { Color } from '@ktdra-digital/utils';
import styled from '@emotion/styled';

export const VideoStyled = styled.div<{
	colors: Color;
}>(({ colors }) => ({
	display: 'flex',
	borderRadius: ' 30px 30px 20px 20px',
	overflow: 'hidden',
	flexDirection: 'column',
	boxShadow: '10px 10px 10px 0 rgba(0, 0, 0, 0.2)',
	margin: '0 20px 20px 0',

	'& .header': {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		height: '50px',
		background: colors.main,
		gap: '5px',
		padding: '0 20px',
	},

	'& .btn': {
		height: '8px',
		width: '8px',
		borderRadius: '50%',
		background: colors.light,
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
