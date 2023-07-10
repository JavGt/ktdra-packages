/** -------------- PRECAUCIÓN --------------------------------
 *  	El componente "RocketLaunch"
 * tiene derecho de autor y es propiedad de ktdra
 * queda prohibido su uso comercial sin autorización
 * ----------------------------------------------------------
 */
import * as React from 'react';
import { SVGProps } from 'react';
const RocketLaunch = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={60}
      fill="#090807"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M99.88 185c-.35 1.43-9.33 35-59.88 35a4 4 0 0 1-4-4c0-50.54 33.6-59.53 35-59.88a4 4 0 0 1 2 7.76c-1.12.29-27.23 7.59-28.89 48 40.45-1.66 47.75-27.76 48.05-28.91a4 4 0 0 1 7.75 2ZM194 115.71l-6 5.94v60a11.9 11.9 0 0 1-3.52 8.48l-34.34 34.35a12 12 0 0 1-20.37-6.79l-5.55-39.81-46.1-46.11-39.79-5.55a12 12 0 0 1-6.81-20.37l34.35-34.34A11.9 11.9 0 0 1 74.35 68h60l5.94-5.94c25.53-25.53 56.3-26.62 68.35-25.91a12 12 0 0 1 11.22 11.22c.71 12.04-.38 42.81-25.86 68.34ZM39.44 118.3l39.14 5.46L126.35 76h-52a4 4 0 0 0-2.82 1.18l-34.35 34.33a4 4 0 0 0 2.26 6.79ZM180 129.65l-47.77 47.77 5.46 39.15a4 4 0 0 0 6.79 2.25l34.35-34.34a4 4 0 0 0 1.17-2.83Zm8.28-19.59c23.23-23.24 24.23-51.26 23.58-62.22a3.93 3.93 0 0 0-3.71-3.71c-11-.65-39 .34-62.22 23.58l-7.11 7.11L85.66 128 128 170.34l53.18-53.17Z" />
    </svg>
  );
};
export default RocketLaunch;
