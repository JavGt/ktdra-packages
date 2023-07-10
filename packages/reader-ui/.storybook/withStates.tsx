import styled from '@emotion/styled';
import React from 'react';
import { StoryContext } from '@storybook/react';
import { CssBaseline } from '../src/utils/CssBaseline';

const withStates = (Story: React.ElementType, ctx: StoryContext) => {
  const { AC, subsistema } = ctx.globals as {
    AC: string;
    subsistema: string;
  };

  return (
    <CssBaseline>
      <Story {...ctx} args={{ AC, subsistema, ...ctx.args }} />
    </CssBaseline>
  );
};

export default withStates;
