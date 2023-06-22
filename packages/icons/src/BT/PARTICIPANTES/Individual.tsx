/** -------------- PRECAUCIÓN --------------------------------
 *  	El componente "Individual"
 * tiene derecho de autor y es propiedad de ktdra
 * queda prohibido su uso comercial sin autorización
 * ----------------------------------------------------------
 */
import * as React from 'react';
import { SVGProps } from 'react';
const Individual = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      data-name='Layer 1'
      viewBox='0 0 100 100'
      {...props}
    >
      <path d='M78.1 58.1c-3.25 11.3-12.88 19.52-24.55 20.93-1.18.14-2.37.21-3.55.21-16.12 0-29.24-13.11-29.24-29.23S33.88 20.77 50 20.77s29.23 13.12 29.23 29.24c0 2.75-.38 5.47-1.13 8.09M50 15.92c-18.79 0-34.08 15.29-34.08 34.08S31.21 84.07 50 84.07c1.37 0 2.76-.08 4.13-.25a33.957 33.957 0 0 0 28.63-24.4 34.09 34.09 0 0 0 1.32-9.43c0-18.79-15.29-34.08-34.08-34.08' />
      <path d='M63.39 60.96c-3.58 3.58-8.33 5.55-13.39 5.55s-9.81-1.97-13.38-5.54a2.42 2.42 0 0 0-3.43 0 2.42 2.42 0 0 0 0 3.43c4.49 4.49 10.46 6.96 16.81 6.96s12.33-2.48 16.82-6.97c.95-.95.95-2.48 0-3.43-.95-.94-2.48-.94-3.43 0M64.24 39.12c-2.84 0-5.15 2.31-5.15 5.15s2.31 5.15 5.15 5.15 5.15-2.3 5.15-5.15-2.3-5.15-5.15-5.15M40.91 44.27c0-2.84-2.31-5.15-5.15-5.15s-5.15 2.31-5.15 5.15 2.3 5.15 5.15 5.15 5.15-2.31 5.15-5.15' />
    </svg>
  );
};
export default Individual;
