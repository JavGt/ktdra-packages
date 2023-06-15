import { Table } from "./types";

export const table: Table = {
	thead: [
		[
			{
				colSpan: 6,
				label: 'RÚBRICA DE EVALUACIÓN',
			},
		],
		[
			{
				rowSpan: 2,
				label: 'ELEMENTOS DEL PROYECTO',
				keyColor: 'secondary',
			},
			{
				rowSpan: 2,
				colSpan: 2,
				label: 'CRITERIOS (Componentes con indicadores de contenido correcto)',
			},
			{
				colSpan: 3,
				label: 'GRADOS DE CALIDAD DE LOS ELEMENTOS',
				keyColor: 'secondary',
			},
		],
		[
			{
				label: 'CALIDAD ALTA',
			},
			{
				label: 'CALIDAD MEDIA',
			},
			{
				label: 'CALIDAD BAJA',
				keyColor: 'secondary',
			},
		],
	],
	tbody: [
		[
			{
				label: 'CARÁTULA (1 punto)',
			},
			{
				colSpan: 2,
				label:
					'1. Nombre del Proyecto. 2. Nombre(s) de Estudiante(s). 3. Grado y grupo. 4. Escuela. 5. Fecha de entrega.',
			},
			{
				label: '1 punto',
			},
			{
				label: '0.5 puntos',
			},
			{
				label: '0 puntos',
			},
		],
		[
			{
				label: 'INTRODUCCIÓN (2 puntos)',
			},
			{
				colSpan: 2,
				label:
					'1. Objetivos. 2. Planteamiento de tesis. 3. Marco referencial: teórico y contextual.',
			},
			{
				label: '2 puntos',
			},
			{
				label: '1 punto',
			},
			{
				label: '0.5 puntos',
			},
		],
	],
};
export const DataSimple: Table = {
	thead: [
		[
			{
				colSpan: 2,
				label:
					'TABLA 1.1 CLASIFICACIÓN DE LAS ONDAS DE ACUERDO CON SU VARIACIÓN PERIÓDICA Y OSCILATORIA',
			},
		],
		[
			{
				label: 'ONDAS TRANSVERSALES',
			},
			{
				label: 'ONDAS LONGITUDINALES',
			},
		],
	],
	tbody: [
		[
			{
				label: 'EJEMPLO',
			},
			{
				label: 'EJEMPLO',
			},
		],
	],
};
