import { ButtonProps } from '../Button';
import { FormValues } from './styleContainer';
import { ContainerShadowProps } from '../ContainerShadow';
import { DividerProps } from '../Divider';
import { EjemploProps } from '../Ejemplo';
import { GraficaMotivacionalProps } from '../GraficaMotivacional';
import { IframeProps } from '../Iframe';
import { ImageProps } from '../Image';
import { LecturaFactory } from '../Lectura';
import { ListaObjetivosProps } from '../ListaObjetivos';
import { ListBoxProps } from '../ListBox';
import { Placas5EFactoryProps } from '../Placas5E';
import { TableProps } from '../Table';
import { TextoProps } from '../Texto';
import { TituloBordesProps } from '../TituloBordes';
import { TituloComplementateProps } from '../TituloComplementate';
import { TituloEjemploProps } from '../TituloEjemplo';
import { TituloLecturaProps } from '../TituloLectura';
import { TituloObjetivoProps } from '../TituloObjetivo';
import { TituloTagProps } from '../TituloTag';
import { TooltipProps } from '../Tooltip';
import { VideosProps } from '../Videos';

export type ComponentsTypes = {
  Button: ButtonProps;
  ContainerShadow: ContainerShadowProps;
  Divider: DividerProps;
  Ejemplo: EjemploProps;
  GraficaMotivacional: GraficaMotivacionalProps;
  Iframe: IframeProps;
  Image: ImageProps;
  Lectura: LecturaFactory;
  ListaObjetivos: ListaObjetivosProps;
  ListBox: ListBoxProps;
  Placas5E: Placas5EFactoryProps;
  Table: TableProps;
  Texto: TextoProps;
  TituloBordes: TituloBordesProps;
  TituloComplementate: TituloComplementateProps;
  TituloEjemplo: TituloEjemploProps;
  TituloLectura: TituloLecturaProps;
  TituloObjetivo: TituloObjetivoProps;
  TituloTag: TituloTagProps;
  Tooltip: TooltipProps;
  Videos: VideosProps;
};

export type NameComponents = keyof ComponentsTypes;

export const propsComponent = <T extends NameComponents>(
  key: T,
  options: string
): FormValues<ComponentsTypes[T]> => JSON.parse(options || '{}');
