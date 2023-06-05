/** -------------- PRECAUCIÓN --------------------------------
 *  	El componente "Recuperacion"
 * tiene derecho de autor y es propiedad de ktdra
 * queda prohibido su uso comercial sin autorización
 * ----------------------------------------------------------
 */
import * as React from 'react';
import { SVGProps } from 'react';
const Recuperacion = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			data-name='Layer 1'
			viewBox='0 0 100 100'
			{...props}
		>
			<path d='M22.52 63.32c-1.24 1.24-2.51 2.44-3.71 3.72-1.27 1.35-1.29 3.35-.12 4.68 1.1 1.26 3.2 1.6 4.49.47 1.47-1.29 2.72-2.83 4.04-4.22-1.47-1.45-3.04-3-4.7-4.65m18.46 18.49c-1.64-1.62-3.23-3.19-4.9-4.85-.9.93-1.9 1.94-2.89 2.96-.28.28-.57.55-.83.85-1.2 1.4-1.13 3.39.15 4.66 1.29 1.28 3.32 1.4 4.68.15 1.34-1.22 2.58-2.55 3.79-3.77M29.37 70.15c-2.14 2.13-4.29 4.24-6.42 6.37-1.48 1.48-1.54 3.69-.18 5.05 1.36 1.35 3.48 1.29 4.99-.18 1.95-1.89 3.85-3.83 5.8-5.72.25-.25.64-.35.89-.48-1.87-1.85-3.44-3.41-5.08-5.04m41.87 14.13c-.08.22-.16.43-.24.64-1.52 4.37-6.77 5.72-10.21 2.58-1.42-1.3-2.74-2.69-4.11-4.04-.14-.14-.29-.26-.51-.45-.13.32-.24.58-.34.84-1.61 4.08-6.64 5.32-9.95 2.41-.92-.8-1.67-1.79-2.65-2.86-1.25 1.3-2.34 2.4-3.39 3.54-3.81 4.16-9.82 2.17-10.96-2.45-.02-.06-.07-.11-.15-.24-1.51.94-3.2 1.41-4.91.87-1.16-.37-2.35-1.01-3.2-1.85-1.98-1.93-2.1-4.72-.59-7.66-.17-.08-.33-.18-.51-.24-4.54-1.45-5.96-6.83-2.68-10.29 1.2-1.27 2.53-2.43 3.99-3.83-.67-.58-1.21-1.01-1.7-1.48-3.11-2.99-5.51-6.47-6.82-10.56-1.09-3.4-2.8-6.26-5.57-8.55-1.27-1.05-2.37-2.31-3.54-3.49-.8-.8-.89-1.53-.29-2.16.62-.66 1.43-.6 2.26.21 2.41 2.37 4.81 4.75 7.2 7.15.31.32.55.74.72 1.16.68 1.68 1.32 3.38 1.96 5.08 1.28 3.43 3.25 6.41 5.85 8.99 8.78 8.71 17.56 17.41 26.33 26.12 1.08 1.07 2.3 1.58 3.79 1.1 1.27-.41 2.06-1.32 2.32-2.62.25-1.27-.22-2.32-1.12-3.22-2.78-2.75-5.56-5.51-8.33-8.26-.21-.21-.44-.41-.61-.65-.4-.59-.4-1.19.09-1.72.52-.56 1.15-.64 1.8-.22.28.18.5.43.74.67 5.51 5.46 11.02 10.92 16.52 16.39 1.02 1.01 2.17 1.51 3.61 1.1 2.39-.69 3.29-3.46 1.75-5.4-.23-.28-.49-.54-.75-.79-5.39-5.35-10.78-10.69-16.17-16.04-.26-.26-.54-.5-.75-.8-.41-.59-.38-1.19.13-1.71.53-.55 1.17-.62 1.8-.18.3.21.54.48.8.74 6.38 6.32 12.74 12.66 19.16 18.95.63.62 1.49 1.15 2.34 1.38 1.46.38 2.83-.39 3.51-1.66.71-1.33.53-2.93-.53-4.04-1.19-1.25-2.44-2.44-3.66-3.65-5.32-5.28-10.64-10.55-15.96-15.83-.23-.23-.49-.46-.68-.72-.44-.62-.43-1.26.12-1.8s1.19-.55 1.81-.12c.27.19.49.45.72.68 5.44 5.39 10.86 10.8 16.33 16.15.61.59 1.45 1.09 2.27 1.29 1.33.32 2.51-.19 3.29-1.34.83-1.24.85-2.54.07-3.82-.22-.36-.53-.68-.83-.98-7.06-7.01-14.11-14.01-21.2-20.99-.3-.3-.87-.56-1.26-.5-4.95.7-9.29-.54-13.06-3.8-.07-.06-.16-.1-.3-.17-.26.24-.53.48-.78.73-4.08 4.04-8.12 8.1-12.23 12.1-3.4 3.32-8.9 2.07-10.37-2.33-.82-2.46-.21-4.62 1.61-6.45 2.67-2.67 5.36-5.33 8.05-7.99 4.07-4.04 8.14-8.08 12.22-12.11.98-.97 2.04-1.86 3.29-2.99-1.73-.21-3.26-.45-4.8-.57-1.93-.14-3.86-.13-5.78-.31-.67-.06-1.44-.36-1.92-.81-2.41-2.28-4.73-4.65-7.09-6.98-.53-.52-.9-1.08-.53-1.84.46-.95 1.53-1.07 2.4-.21 2.11 2.06 4.22 4.12 6.27 6.24.63.65 1.28.87 2.17.92 3.48.21 7.04-.06 10.36 1.18 1.53.57 2.83.45 4.35.01 1.99-.56 4.1-.73 6.17-.99 1.22-.15 2.46-.23 3.69-.18 1.32.06 2.22-.45 3.1-1.38 1.86-1.98 3.84-3.85 5.77-5.76.5-.5 1.05-.82 1.78-.48.97.45 1.11 1.52.26 2.37-1.72 1.74-3.6 3.36-5.19 5.21-1.71 2-3.63 3.03-6.36 2.89-2.14-.11-4.33.14-6.46.46-3.31.49-6.22 1.96-8.6 4.29-7.12 6.99-14.19 14.03-21.27 21.06-1.43 1.42-1.41 3.52-.03 4.87 1.37 1.34 3.46 1.34 4.92-.1 4.49-4.42 8.95-8.86 13.43-13.29 1.3-1.29 1.72-1.28 3.06-.07 4.41 3.96 9.33 5.1 14.9 2.62.94-.42 1.68-.22 2.06.53.38.75.1 1.42-.81 1.93-.16.09-.33.19-.43.24 5.13 5.09 10.22 10.14 15.32 15.19 3.38-2.96 6.19-6.49 7.56-10.87 1.2-3.87 3.21-7.09 6.34-9.68 1.25-1.03 2.31-2.28 3.48-3.41.79-.77 1.56-.83 2.18-.21.63.62.58 1.39-.2 2.17-2.11 2.11-4.26 4.18-6.33 6.32-.57.6-1.02 1.36-1.37 2.12-.54 1.17-.96 2.39-1.4 3.6-1.47 4.08-3.78 7.62-6.9 10.64-.47.46-1.01.85-1.7 1.44 1.43 1.36 2.72 2.5 3.91 3.73 1.78 1.84 2.32 4.03 1.52 6.48-.62 1.88-1.91 3.13-3.77 3.82-.27.1-.55.19-.83.29 1.54 3.33 1.27 5.97-.8 7.99-2.07 2.02-4.59 2.26-7.96.72' />
		</svg>
	);
};
export default Recuperacion;
