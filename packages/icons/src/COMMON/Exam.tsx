/** -------------- PRECAUCIÓN --------------------------------
 *  	El componente "Exam"
 * tiene derecho de autor y es propiedad de ktdra
 * queda prohibido su uso comercial sin autorización
 * ----------------------------------------------------------
 */
import * as React from 'react';
import { SVGProps } from 'react';
const Exam = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={60}
      fill="#090807"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M216 44H40a12 12 0 0 0-12 12v160a4 4 0 0 0 5.79 3.58L64 204.47l30.21 15.11a4 4 0 0 0 3.58 0L128 204.47l30.21 15.11a4 4 0 0 0 3.58 0L192 204.47l30.21 15.11a4.05 4.05 0 0 0 1.79.42 4 4 0 0 0 4-4V56a12 12 0 0 0-12-12Zm4 165.53-26.21-13.11a4 4 0 0 0-3.58 0L160 211.53l-30.21-15.11a4 4 0 0 0-3.58 0L96 211.53l-30.21-15.11a4 4 0 0 0-3.58 0L36 209.53V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4ZM99.58 94.21a4 4 0 0 0-7.16 0l-32 64a4 4 0 0 0 7.16 3.58L74.47 148h43.06l6.89 13.79A4 4 0 0 0 128 164a4.12 4.12 0 0 0 1.79-.42 4 4 0 0 0 1.79-5.37ZM78.47 140 96 104.94 113.53 140ZM196 128a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4Z" />
    </svg>
  );
};
export default Exam;