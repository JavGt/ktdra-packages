import { Subs } from '@ktdra-digital/utils';
import { Icon, SVGComponent } from '../../types';

export type UseIcon = (params?: Icon, subsistema?: Subs) => SVGComponent | null;
