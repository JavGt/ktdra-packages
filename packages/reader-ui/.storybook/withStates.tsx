import React from 'react';

const withStates = (Story, context) => {
	const { AC, subsistema } = context.globals as {
		AC: string;
		subsistema: string;
	};

	return <Story {...context} args={{ AC, subsistema, ...context.args }} />;
};

export default withStates;
