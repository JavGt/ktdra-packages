/** -------------- PRECAUCIÓN --------------------------------
 *  	El componente "CaraEscalaAlta"
 * tiene derecho de autor y es propiedad de ktdra
 * queda prohibido su uso comercial sin autorización
 * ----------------------------------------------------------
 */
import * as React from 'react';
import { SVGProps } from 'react';
const CaraEscalaAlta = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 102 102'
      {...props}
    >
      <path
        fill='#B2469A'
        d='M21.55 38.272a4.842 4.842 0 0 1 4.832-4.84 4.842 4.842 0 0 1 4.832 4.84 4.842 4.842 0 0 1-4.832 4.84c-2.66 0-4.832-2.2-4.832-4.84ZM70.786 38.272a4.842 4.842 0 0 1 4.832-4.84 4.842 4.842 0 0 1 4.832 4.84 4.842 4.842 0 0 1-4.832 4.84c-2.66 0-4.832-2.2-4.832-4.84Z'
      />
      <path
        stroke='#B2469A'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.6}
        d='M77.88 59.36C74.304 70.83 63.63 79.126 51 79.126c-12.63 0-23.303-8.328-26.88-19.767h53.76ZM101 51c0 27.624-22.385 50-50 50S1 78.624 1 51 23.385 1 51 1s50 22.376 50 50Z'
      />
    </svg>
  );
};
export default CaraEscalaAlta;
