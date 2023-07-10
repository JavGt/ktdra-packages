/** -------------- PRECAUCIÓN --------------------------------
 *  	El componente "DeviceMobile"
 * tiene derecho de autor y es propiedad de ktdra
 * queda prohibido su uso comercial sin autorización
 * ----------------------------------------------------------
 */
import * as React from 'react';
import { SVGProps } from 'react';
const DeviceMobile = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={60}
      fill="#090807"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M176 20H80a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h96a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20ZM68 60h120v136H68Zm12-32h96a12 12 0 0 1 12 12v12H68V40a12 12 0 0 1 12-12Zm96 200H80a12 12 0 0 1-12-12v-12h120v12a12 12 0 0 1-12 12Z" />
    </svg>
  );
};
export default DeviceMobile;
