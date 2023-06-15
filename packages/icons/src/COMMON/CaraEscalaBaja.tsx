/** -------------- PRECAUCIÓN --------------------------------
 *  	El componente "CaraEscalaBaja"
 * tiene derecho de autor y es propiedad de ktdra
 * queda prohibido su uso comercial sin autorización
 * ----------------------------------------------------------
 */
import * as React from 'react';
import { SVGProps } from 'react';
const CaraEscalaBaja = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 102 102'
			{...props}
		>
			<path
				fill='#C57BB4'
				d='M21.581 38.272a4.842 4.842 0 0 1 4.832-4.84 4.842 4.842 0 0 1 4.832 4.84 4.842 4.842 0 0 1-4.832 4.84 4.842 4.842 0 0 1-4.832-4.84ZM67.24 38.272c0-2.671 1.934-4.84 4.304-4.84s4.304 2.169 4.304 4.84-1.934 4.84-4.304 4.84-4.304-2.169-4.304-4.84Z'
			/>
			<path
				stroke='#C57BB4'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeMiterlimit={10}
				strokeWidth={1.6}
				d='M25.19 64.64h51.62M101 51c0 27.624-22.385 50-50 50S1 78.624 1 51 23.385 1 51 1s50 22.376 50 50Z'
			/>
		</svg>
	);
};
export default CaraEscalaBaja;
