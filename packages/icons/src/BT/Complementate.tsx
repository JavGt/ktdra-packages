/** -------------- PRECAUCIÓN --------------------------------
 *  	El componente "Complementate"
 * tiene derecho de autor y es propiedad de ktdra
 * queda prohibido su uso comercial sin autorización
 * ----------------------------------------------------------
 */
import * as React from 'react';
import { SVGProps } from 'react';
const Complementate = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			data-name='Layer 1'
			viewBox='0 0 100 100'
			{...props}
		>
			<path d='M16.53 74.39v21.07l40.79-43.52L16.53 7.59v22.17l19.95 21.86-19.95 22.77z' />
			<path d='M53.69 74.39v21.07l40.79-43.52L53.69 7.59v22.17l19.96 21.86-19.96 22.77z' />
		</svg>
	);
};
export default Complementate;
