import React from 'react';
import { Placas5EProps } from '../Placas5E';
import { useIcon } from '@ktdra-digital/icons';
import { Placa5EDGBStyle } from './Placa5E-DGB.styled';

const Placa5EDGB: React.FC<Placas5EProps> = ({
  icon,
  color,
  label,
  colors,
  dots,
}) => {
  const Icon = useIcon({ folder: `DGB/PLACAS5E`, name: icon });

  return (
    <Placa5EDGBStyle colors={color}>
      <span className="icon">{Icon && <Icon />}</span>
      <h3 className="label">{label}</h3>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginLeft: '10px',
          flexDirection: 'row-reverse',
        }}
      >
        {Array.from({ length: Number(dots) }).map((_, i) => {
          // los numeros par son primarios, los impares secundarios
          const isPrimary = i % 2 === 0;

          return (
            <div
              key={i}
              className="dot"
              style={{
                border: `3px solid #fff`,
                padding: '8px',
                borderRadius: '100%',
                backgroundColor:
                  colors?.[isPrimary ? 'primary' : 'secondary'].alternative ??
                  color.main,
              }}
            />
          );
        })}
      </div>
    </Placa5EDGBStyle>
  );
};

export default Placa5EDGB;
