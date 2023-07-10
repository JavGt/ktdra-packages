import React from 'react';
import { useIcon } from '@ktdra-digital/icons';
import { Placas5EProps } from '../Placas5E';
import { Placa5EBTStl } from './Placa5E-BT.styled';

const Placa5EBT: React.FC<Placas5EProps> = ({ label, color, icon }) => {
  const Icon = useIcon({ folder: 'BT/PLACAS5E', name: icon });

  return (
    <Placa5EBTStl colors={color}>
      {Icon && <Icon className="icon-title" />}

      <h3>{label}</h3>

      <div className="line" />
    </Placa5EBTStl>
  );
};

export default Placa5EBT;
