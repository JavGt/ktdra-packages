import React from 'react';

const withStates = (Story, context) => {
	const { AC, subsistema } = context.globals as {
		AC: string;
		subsistema: string;
	};

	return (
		<div>
			<Story
				{...context}
				AC={AC}
				subsistema={subsistema}
				args={{
					AC,
					subsistema,
					...context.args,
				}}
			/>
		</div>
	);
};

export default withStates;
