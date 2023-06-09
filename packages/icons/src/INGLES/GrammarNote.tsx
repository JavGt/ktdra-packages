/** -------------- PRECAUCIÓN --------------------------------
 *  	El componente "GrammarNote"
 * tiene derecho de autor y es propiedad de ktdra
 * queda prohibido su uso comercial sin autorización
 * ----------------------------------------------------------
 */
import * as React from 'react';
import { SVGProps } from 'react';
const GrammarNote = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      data-name='Layer 1'
      viewBox='0 0 100 100'
      {...props}
    >
      <path
        d='M9.39 13.29s43.66-18.65 80.47 0c0 0 10.85 48-39.8 81.71 0 0-44.39-14.97-40.67-81.71Z'
        style={{
          fill: 'none',
          stroke: '#000',
          strokeWidth: 2,
        }}
      />
      <path d='M35.83 20.31c-5.69 0-10.32 4.58-10.32 10.23v13.98c0 5.64 4.63 10.23 10.32 10.23h16.53l11.29 6.43v-6.34l1.31-.18c5.09-.69 8.94-5.05 8.94-10.14V30.54c0-5.64-4.63-10.23-10.32-10.23H35.83Zm30.85 46.06-15.13-8.61H35.83c-7.36 0-13.36-5.94-13.36-13.24V30.54c0-7.3 5.99-13.24 13.36-13.24h27.75c7.36 0 13.35 5.94 13.35 13.24v13.98c0 6.15-4.32 11.46-10.24 12.87v8.98Z' />
      <path d='M37.72 36.97c0 1.75-1.42 3.17-3.19 3.17s-3.2-1.42-3.2-3.17 1.43-3.17 3.2-3.17 3.19 1.42 3.19 3.17M52.9 36.97c0 1.75-1.43 3.17-3.2 3.17s-3.19-1.42-3.19-3.17 1.43-3.17 3.19-3.17 3.2 1.42 3.2 3.17M68.07 36.97c0 1.75-1.43 3.17-3.2 3.17s-3.19-1.42-3.19-3.17 1.43-3.17 3.19-3.17 3.2 1.42 3.2 3.17' />
    </svg>
  );
};
export default GrammarNote;
