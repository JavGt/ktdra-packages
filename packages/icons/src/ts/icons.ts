import { SVGProps } from 'react';

export type Icon = {
	folder: string;
	name: string;
	isDependent?: boolean;
};

export type SVGComponent = React.FC<SVGProps<SVGSVGElement>>;
