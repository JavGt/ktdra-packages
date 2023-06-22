/** -------------- PRECAUCIÓN --------------------------------
 *  	El componente "CaraEscalaMedia"
 * tiene derecho de autor y es propiedad de ktdra
 * queda prohibido su uso comercial sin autorización
 * ----------------------------------------------------------
 */
import * as React from 'react';
import { SVGProps } from 'react';
const CaraEscalaMedia = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 102 102'
      {...props}
    >
      <path
        stroke='#B1D577'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.6}
        d='M101 51c0 27.624-22.385 50-50 50S1 78.624 1 51 23.385 1 51 1s50 22.376 50 50Z'
      />
      <path
        fill='#B1D577'
        d='M21.581 38.272a4.842 4.842 0 0 1 4.832-4.84 4.842 4.842 0 0 1 4.832 4.84 4.842 4.842 0 0 1-4.832 4.84c-2.691-.032-4.832-2.2-4.832-4.84ZM70.786 38.272a4.842 4.842 0 0 1 4.832-4.84 4.842 4.842 0 0 1 4.832 4.84 4.842 4.842 0 0 1-4.832 4.84c-2.66-.032-4.832-2.2-4.832-4.84Z'
      />
      <path
        stroke='#B1D577'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.6}
        d='m74.21 63.54 4.802 1.57M27.79 63.54l-4.801 1.57m53.21-.785C72.866 71.71 62.836 77.085 51 77.085S29.134 71.71 25.8 64.324'
      />
    </svg>
  );
};
export default CaraEscalaMedia;
