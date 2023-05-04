import React from 'react';

export type TextoProps = {
	texto?: string;

	// background
	marginXBg?: string;
	marginYBg?: string;
	paddingXBg?: string;
	paddingYBg?: string;
	backgroundBg?: string;

	// Item
	marginXItem?: string;
	marginYItem?: string;
	paddingXItem?: string;
	paddingYItem?: string;
	backgroundItem?: string;
};

const Texto: React.FC<TextoProps> = ({ texto, ...rest }) => {
	return (
		<div
			style={{
				backgroundColor: rest.backgroundBg,
				margin: `${rest.marginYBg} ${rest.marginXBg}`,
				padding: `${rest.paddingYBg} ${rest.paddingXBg}`,
			}}
		>
			<div
				style={{
					backgroundColor: rest.backgroundItem,
					margin: `${rest.marginYItem} ${rest.marginXItem}`,
					padding: `${rest.paddingYItem} ${rest.paddingXItem}`,
				}}
			>
				{texto}
			</div>
		</div>
	);
};

export default Texto;
