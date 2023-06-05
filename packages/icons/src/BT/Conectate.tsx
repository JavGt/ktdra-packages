/** -------------- PRECAUCIÓN --------------------------------
 *  	El componente "Conectate"
 * tiene derecho de autor y es propiedad de ktdra
 * queda prohibido su uso comercial sin autorización
 * ----------------------------------------------------------
 */
import * as React from 'react';
import { SVGProps } from 'react';
const Conectate = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			data-name='Layer 1'
			viewBox='0 0 100 100'
			{...props}
		>
			<path d='M36.42 95.74c-2.29-.86-3.15-2.59-2.96-4.98.03-.29 0-.59 0-.96-.39-.02-.7-.04-1.01-.04h-8.03c-4.83-.03-8.15-3.38-8.15-8.3V12.18c0-4.36 2.29-7.22 6.5-8.23.08-.02.16-.08.24-.12h8.29c.61.43 1.11.95.8 1.78-.3.81-.98.92-1.73.92-1.97-.02-3.94 0-5.91 0-3.43 0-5.55 2.15-5.55 5.66v69.2c0 2.78 1.34 4.77 3.7 5.45.56.16 1.16.23 1.74.23 2.88.02 5.76 0 8.64.02.49 0 .78-.12 1.05-.59.76-1.32 1.66-1.74 3.84-1.95-.1-.34-.15-.68-.28-.99-.55-1.26-1.43-2.24-2.54-3.03-2.25-1.61-3.87-3.73-4.93-6.3-.37-.9-.14-1.66.56-1.99.74-.35 1.46 0 1.87.96.95 2.23 2.42 3.99 4.36 5.4 2.02 1.46 3.26 3.49 3.75 5.99h22.06c.08-.51.06-1.04.24-1.5.6-1.58 1.1-3.23 1.94-4.66 1.2-2.04 1.92-4.13 1.88-6.52-.05-2.99 0-5.98-.01-8.98 0-1.74-.98-2.9-2.45-2.89-1.37 0-2.42 1.22-2.46 2.85-.03 1.13-.43 1.67-1.26 1.67-.84.01-1.34-.6-1.35-1.73-.01-.96.02-1.92-.01-2.87-.05-1.57-1.17-2.67-2.65-2.64-1.44.03-2.51 1.14-2.53 2.66-.02 1.01.01 2.03 0 3.05-.02.93-.51 1.49-1.28 1.51-.83.02-1.34-.54-1.35-1.51-.02-1.71 0-3.41-.02-5.12-.01-1.77-1.09-2.94-2.66-2.92-1.42.02-2.43 1.24-2.43 2.95v4.58c0 1.39-.4 2.02-1.3 2.03-.9.01-1.34-.64-1.35-2V43.52c0-1.78-1.28-2.95-2.95-2.75-1.17.14-2.06 1.01-2.22 2.2-.05.38-.05.78-.05 1.16v23.61c0 .36 0 .72-.04 1.07-.1.68-.51 1.07-1.19 1.11-.72.04-1.19-.32-1.34-1.03-.08-.37-.07-.77-.07-1.16v-7.87c-2.04-.55-4.03 1.14-4.1 3.44-.04 1.2 0 2.4 0 3.59-.01 1.06-.5 1.66-1.32 1.65-.77 0-1.31-.63-1.32-1.59-.02-1.25-.04-2.51 0-3.77.12-3.25 2.34-5.69 5.5-6.11.37-.05.75-.07 1.24-.12v-1.07c0-4.13-.03-8.26.01-12.39.05-4.05 3.84-6.62 7.37-5 2.01.92 3.08 2.56 3.11 4.8.04 3.14 0 6.28 0 9.52 3.19-1.17 5.66-.34 7.38 2.69 1.42-.85 2.94-1.16 4.54-.64 1.61.52 2.7 1.62 3.35 3.14.1.02.14.04.16.03q1.45-.58 1.45-2.19V42.83c0-.3 0-.6.02-.9.06-.74.5-1.16 1.19-1.21.7-.05 1.19.33 1.35 1.03.08.34.08.71.08 1.06 0 4.64.01 9.28 0 13.91 0 .58.15.88.7 1.14 1.89.93 2.87 2.52 2.9 4.66.03 3.2 0 6.4 0 9.6 0 2.77-.7 5.31-2.25 7.6-.97 1.42-1.6 2.98-1.72 4.87h.86c2.04.07 3.6 1.64 3.67 3.72.03.9.01 1.8.01 2.69 0 2.75-.58 3.65-3.04 4.72h-8.64c-.55-.5-1-1.05-.67-1.85.33-.79 1.03-.86 1.78-.85 2.17.02 4.35.02 6.52 0 1.01 0 1.39-.39 1.41-1.4.01-.98.01-1.97 0-2.96-.02-.98-.39-1.38-1.33-1.38H37.46c-.88 0-1.29.42-1.33 1.32-.03.89 0 1.79 0 2.69 0 1.4.34 1.74 1.73 1.74h14.37c.76 0 1.44.12 1.69.96.25.85-.23 1.35-.89 1.74H36.44ZM59.18 3.82c.61.2 1.24.35 1.81.62 3.12 1.44 4.79 3.94 4.81 7.4.06 7.84.02 15.68.02 23.52 0 1.03-.56 1.66-1.36 1.64-.8-.02-1.28-.64-1.28-1.7V12.23c0-3-1.62-5.12-4.29-5.63-.46-.08-.93-.08-1.4-.08H37.38c-.75.04-1.43-.08-1.73-.91-.31-.84.2-1.34.78-1.79h22.76Z' />
			<path d='M55.41 37.65c-.05 3.78-1.17 6.94-3.42 9.69-.46.56-1 .85-1.7.58-.89-.34-1.08-1.38-.39-2.23 1.34-1.65 2.23-3.49 2.65-5.59 1.27-6.39-2.98-12.68-9.43-13.95-6.14-1.2-12.42 3.12-13.56 9.37-.67 3.64.11 6.94 2.38 9.86l.33.42c.47.68.41 1.46-.15 1.92-.56.47-1.34.39-1.88-.23a14.319 14.319 0 0 1-3.13-6.05c-1.97-8.08 3.12-16.32 11.04-17.87 8.2-1.62 15.92 3.89 17.13 12.24.1.68.11 1.37.15 1.84' />
			<path d='M32.53 37.81c.04-4.81 3.88-8.67 8.55-8.63 4.72.05 8.55 4 8.5 8.81v.09c-.04 1.39-.53 2.06-1.46 2.01-.9-.06-1.24-.65-1.2-2.09.1-3.25-2.5-6.02-5.77-6.13-3.17-.11-5.92 2.53-6.01 5.77 0 .33.02.66 0 .99-.03.82-.56 1.41-1.28 1.43-.72.03-1.28-.53-1.35-1.36-.03-.3 0-.6 0-.89M39.77 11.78h-4.05c-.98 0-1.56-.5-1.58-1.29-.03-.82.58-1.38 1.59-1.39 2.7-.02 5.4-.02 8.11 0 1.01 0 1.61.57 1.58 1.4-.03.8-.59 1.27-1.59 1.28-1.35.01-2.7 0-4.05 0M48.49 9.11c.74.04 1.29.68 1.24 1.44-.06.73-.63 1.24-1.36 1.21-.76-.03-1.28-.64-1.23-1.43.05-.72.65-1.26 1.35-1.23' />
		</svg>
	);
};
export default Conectate;
