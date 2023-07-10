import { colorsBT, colorsDGB } from '../../colors';
import { ObjColors, UseGetColorsAC } from './types';

export const colors: ObjColors = {
  BT: colorsBT,
  DGB: colorsDGB,
  CONALEP: colorsDGB,
};

/**
 * @description Hook para obtener los colores de una area de conocimiento y subsistema
 * @returns
 * @example
 * const { palette } = useGetColorsAC({ area: 'Ciencias sociales', subsistema: 'BT' });
 * const { primary } = useGetColorsAC({ area: 'Ciencias sociales', subsistema: 'BT', selector: 'primary' });
 */
const useColorsAC: UseGetColorsAC = ({ area, subsistema }) =>
  subsistema ? colors[subsistema][area] : colorsBT[area];

export default useColorsAC;
