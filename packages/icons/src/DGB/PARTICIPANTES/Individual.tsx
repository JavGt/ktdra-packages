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
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 100 100"
      {...props}
    >
      <path d="M50.01 22.68c-14.88 0-26.99 12.23-27.01 27.29-.02 15.05 12.08 27.33 26.95 27.35 14.9.02 27.04-12.24 27.04-27.32 0-15.06-12.1-27.31-26.98-27.32m0 58.56c-16.99 0-30.86-14.04-30.87-31.25 0-17.21 13.89-31.24 30.95-31.23 16.93.01 30.8 14.11 30.78 31.27-.02 17.17-13.89 31.2-30.85 31.2" />
      <path d="M49.97 65.62c-4.76-.06-9.19-1.17-13.02-4.17-1.57-1.23-2.91-2.67-3.92-4.41-.66-1.14-.42-2.29.58-2.87 1-.58 2.05-.21 2.75.91C38.17 58 40.8 59.85 44 60.8c5.06 1.5 10.04 1.3 14.79-1.19 2.06-1.08 3.73-2.62 4.93-4.67.59-1.01 1.71-1.32 2.65-.77.96.55 1.27 1.71.66 2.75-1.67 2.85-4.05 4.92-6.94 6.42-3.18 1.64-6.59 2.25-10.12 2.28M40.33 46.08c-2.12-.01-3.82-1.74-3.82-3.89 0-2.17 1.73-3.9 3.88-3.89 2.11.01 3.83 1.76 3.83 3.89s-1.74 3.9-3.89 3.89M59.6 46.08c-2.11-.02-3.82-1.76-3.82-3.89 0-2.16 1.75-3.9 3.89-3.89 2.12.01 3.82 1.76 3.82 3.89 0 2.17-1.74 3.91-3.89 3.89" />
    </svg>
  );
};
export default Individual;
