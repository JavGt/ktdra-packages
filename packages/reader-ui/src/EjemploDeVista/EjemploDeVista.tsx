import React from 'react';
import { AC } from '@ktdra-digital/utils';
import { TituloBordes } from '../TituloBordes';
import { Lectura } from '../Lectura';
import { ContainerShadow } from '../ContainerShadow';
import { TituloTag } from '../TituloTag';
import { Subsistema } from '../utils/styleContainer';
import { TituloEjemplo } from '../TituloEjemplo';

export type EjemploDeVistaProps = {
	AC: AC;
	subsistema: Subsistema;
};

const EjemploDeVista: React.FC<EjemploDeVistaProps> = ({ AC, subsistema }) => {
	const background = {
		principal: '#F2F2F2',
		secundario: '#ffffff',
	};

	return (
		<div>
			<TituloEjemplo
				title='Proyecto 1'
				iconParticipantes={{
					folder: 'BT/PARTICIPANTES',
					name: 'Parejas',
				}}
				subsistema={subsistema}
				AC={AC}
			/>
			<TituloBordes
				subsistema={subsistema}
				background={{
					backgroundColor: background.principal,
				}}
				title='Proyecto 1'
				AC={AC}
			/>

			<Lectura
				subsistema={subsistema}
				AC={AC}
				background={{
					backgroundColor: background.principal,
				}}
				item={{
					position: 'center',
					width: '50%',
				}}
				text='<h2 align="center">El primer músculo creado en el laboratorio es asombrosamente contráctil y flexible</h2> <p>Investigadores de la universidad de Duke en Estados Unidos publicaron en la revista e-Life, sobre  el desarrollo y la especialización de células madre que poco a poco consiguen transformarse en  células musculares. Antes de llegar a este tipo celular, los investigadores obtuvieron los llamados  precursores miogénicos, algo más diferenciados que las células madre, aunque no tanto como para  ser similar a las células que encontramos en nuestros músculos. Como vemos, el primer músculo artificial no es sólo increíblemente asombroso. También permite avanzar un poco más en el estudio de una enfermedad realmente grave. Tal vez estas primeras  contracciones sean sólo un síntoma, y el movimiento muscular refleje que también caminamos  hacia la cura de la distrofia de Duchenne</p>'
			/>
			<TituloTag
				subsistema={subsistema}
				background={{
					backgroundColor: background.principal,
				}}
				AC={AC}
				title='Proyecto 1 - sdaasd'
			/>

			<ContainerShadow
				subsistema={subsistema}
				AC={AC}
				background={{
					backgroundColor: background.principal,

					padding: '50px',
				}}
				item={{
					position: 'center',
					width: '90%',
				}}
				text='- ¿Cómo les beneficia **trabajar** en equipo para llegar a un común
				acuerdo? - ¿De qué manera podrían administrar su dinero para no rebasar
				su presupuesto? - ¿Por qué es importante tomar en cuenta las
				características físicas al momento de comprar un artículo electrónico? -
				¿Cuál es el principio físico que rige el funcionamiento de los
				micrófonos y audífonos?'
			/>
		</div>
	);
};

export default EjemploDeVista;
