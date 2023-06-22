import React from 'react';

const withStates = (Story, context) => {
	const { AC, subsistema } = context.globals as {
		AC: string;
		subsistema: string;
	};

	return <div style={{
		fontFamily: "--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
	}}>
	<Story {...context} args={{ AC, subsistema, ...context.args }} /></div>;
};

export default withStates;
