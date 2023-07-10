/** -------------- PRECAUCIÓN --------------------------------
 *  	El componente "ProyectoIntegrador"
 * tiene derecho de autor y es propiedad de ktdra
 * queda prohibido su uso comercial sin autorización
 * ----------------------------------------------------------
 */
import * as React from 'react';
import { SVGProps } from 'react';
const ProyectoIntegrador = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 100 100"
      {...props}
    >
      <path d="M49.97 38.83c3.63-.01 6.58 3.01 6.59 6.76.02 3.76-2.88 6.85-6.48 6.91-3.6.06-6.64-3.07-6.65-6.85 0-3.77 2.91-6.81 6.53-6.82M56.51 72c-.23.11-.39.21-.57.26-3.49.98-7.01 1.13-10.55.33-1.92-.43-1.92-.45-1.92-2.54 0-1.89 0-3.78-.01-5.67 0-.86-.48-1.33-1.25-1.43-.71-.09-1.32.57-1.39 1.4-.02.32 0 .65 0 .98v5.75c-1.02-.61-1.89-1.09-2.72-1.64-.17-.11-.27-.48-.28-.74-.02-3.1-.03-6.19 0-9.29.02-1.52.79-2.54 2.25-2.79 3.39-.59 6.69-1.85 10.22-1.37.72.09 1.51-.24 2.22-.12 2.49.43 4.96.96 7.43 1.49 1.44.31 2.22 1.29 2.23 2.82.03 3.09.02 6.19 0 9.28 0 .25-.11.61-.29.73-.83.55-1.7 1.03-2.71 1.63v-1.26c0-1.79.02-3.58 0-5.38-.01-.87-.58-1.48-1.31-1.5-.72-.02-1.28.59-1.33 1.46-.02.36 0 .72 0 1.07V72m-7.85 11.24c-2.66 0-5.25.14-7.83-.04-2.72-.19-4.85 2.39-3.9 5.21.65 1.92-.63 4.04-2.49 4.59-1.96.59-4.01-.48-4.49-2.53-.21-.86-.09-1.86.07-2.76.4-2.29-1.2-4.44-3.44-4.46-2.5-.02-4.99 0-7.49 0-.3 0-.6-.03-.96-.05v-5.92c0-1.22.43-1.45 1.61-1.27 1 .16 2.07.28 3.04.06 3.45-.78 5.56-4.35 4.76-7.85-.83-3.68-4.16-5.84-7.69-4.99-1.33.32-1.72 0-1.72-1.41v-9.58c0-.28.03-.56.05-.82h6.86c2 14.41 9.84 22.56 23.61 24.61v7.22ZM74.83 48.6c-.9-13.64-11.21-23.77-23.45-24.51v-7.33h8.1c.4 0 .82-.02 1.2-.14 2.08-.63 2.99-2.51 2.38-4.94-.36-1.46 0-2.73 1.01-3.75s2.23-1.38 3.62-.94c1.86.59 3.02 2.62 2.43 4.63-.84 2.88 1.2 5.41 3.95 5.18 2.27-.18 4.56-.04 6.84-.04.3 0 .6.03.96.04v5.83c0 1.31-.41 1.55-1.61 1.37-1.03-.16-2.14-.27-3.13-.03-3.45.83-5.47 4.38-4.64 7.92.84 3.6 4.17 5.72 7.68 4.88 1.32-.31 1.71 0 1.71 1.43v10.41h-7.05Zm-56.68.03V40.1c0-.42-.02-.85-.13-1.25-.61-2.17-2.4-3.09-4.75-2.47-2 .53-3.96-.66-4.5-2.73-.53-2.04.54-4.09 2.56-4.59.78-.2 1.66-.09 2.47.07 2.31.46 4.35-1.21 4.36-3.66.01-2.28 0-4.56 0-6.84v-1.87h5.55c1.38 0 1.63.38 1.34 1.78-.54 2.52.05 4.73 1.89 6.48 1.78 1.68 3.89 2.15 6.19 1.4 3.16-1.03 4.99-4.43 4.25-7.8-.34-1.51-.07-1.86 1.44-1.87h9.84v7.38c-6.3.48-11.71 2.94-16.15 7.56-4.45 4.64-6.82 10.31-7.28 16.9-.22.02-.41.04-.59.04h-6.48m63.73 34.61c-1.98 0-3.85.01-5.72 0-1.17 0-1.39-.45-1.22-1.67.15-1.07.26-2.24.03-3.27-.79-3.6-4.2-5.7-7.59-4.84-3.45.87-5.49 4.35-4.68 8 .31 1.38 0 1.79-1.37 1.79h-9.95V75.9c13.04-.95 22.74-11.68 23.47-24.46h7.03v8.45c0 .42.02.85.13 1.25.6 2.17 2.41 3.12 4.73 2.49 1.4-.38 2.62 0 3.6 1.04.99 1.05 1.32 2.33.9 3.78-.56 1.93-2.51 3.15-4.43 2.54-2.78-.88-5.17 1.26-4.97 4.12.18 2.65.04 5.33.04 8.14M56.14 52.99c4.71-4.99 3.34-11.11.45-14.11-3.27-3.4-8.5-3.83-12.14-.91-1.91 1.53-3.13 3.54-3.51 6.02-.54 3.47.52 6.45 3.03 8.98-1.65.34-3.12.62-4.57.95-2.52.57-4.17 2.7-4.18 5.37-.01 2.09 0 4.17 0 6.26v1.51c-6.17-5.51-9.33-15.59-5.97-25.08 3.43-9.69 12.58-15.79 22.54-15.04 9.65.73 17.74 8.13 19.9 18.29 1.85 8.7-1.79 17.61-6.86 21.72 0-2.36-.11-4.67.02-6.96.19-3.33-1.87-5.88-5.1-6.28-1.19-.15-2.36-.47-3.61-.72m-7.61-38.95c-3.34 0-6.69.13-10.03-.04-2.48-.13-4.65 2.21-3.8 5.15.61 2.11-.6 4.15-2.58 4.69-2.79.75-5.19-1.8-4.46-4.75.59-2.39-.36-4.31-2.44-4.93-.21-.06-.43-.11-.65-.11-2.56 0-5.12-.02-7.68 0-.92 0-1.37.54-1.37 1.58v9.29c0 1.37-.39 1.69-1.66 1.39-3.57-.86-6.88 1.24-7.74 4.91-.82 3.51 1.23 7.07 4.69 7.89.97.23 2.05.14 3.05-.02 1.29-.21 1.66 0 1.66 1.38 0 7.14.11 14.28-.05 21.41-.06 2.82 2.18 4.99 4.99 4.12 2.06-.64 3.97.67 4.48 2.84.48 2.05-.74 4.13-2.79 4.56-.67.14-1.43.03-2.11-.14-2.4-.58-4.5 1.07-4.51 3.64-.02 2.44 0 4.89 0 7.33 0 1.32.42 1.76 1.66 1.77h8.72c1.37 0 1.68.4 1.37 1.78-.81 3.66 1.22 7.13 4.67 8.01 3.37.85 6.76-1.27 7.57-4.88.22-1.01.15-2.13 0-3.17-.19-1.34.02-1.74 1.34-1.74 6.9 0 13.81-.09 20.71.04 2.37.04 4.56-2.13 3.79-5.01-.48-1.8.08-3.36 1.4-4.3 1.32-.93 2.91-.92 4.21.03 1.3.96 1.8 2.54 1.36 4.32-.68 2.74.91 4.9 3.62 4.91h6.84c1.31 0 1.7-.42 1.7-1.82v-8.99c0-1.44.39-1.76 1.7-1.44 3.51.84 6.84-1.27 7.68-4.87.83-3.54-1.19-7.09-4.64-7.92-.99-.24-2.1-.13-3.13.03-1.2.18-1.61-.06-1.61-1.37 0-7.17-.1-14.34.05-21.5.06-2.7-2.13-4.93-4.95-4.06-2.08.64-3.99-.63-4.51-2.79-.49-2.06.69-4.13 2.75-4.58.7-.15 1.49-.03 2.2.14 2.34.55 4.44-1.11 4.46-3.62.02-2.48 0-4.95 0-7.43 0-1.25-.43-1.71-1.62-1.71h-8.81c-1.31 0-1.61-.41-1.32-1.74.83-3.75-1.22-7.19-4.82-8.08-3.31-.82-6.72 1.42-7.47 5.06-.2 1.01-.07 2.13.06 3.18.15 1.16-.09 1.59-1.22 1.59-3.59.01-7.19 0-10.78 0" />
    </svg>
  );
};
export default ProyectoIntegrador;
