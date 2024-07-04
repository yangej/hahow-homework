'use client';

import type { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { colors } from '@/modules/app/constants/theme';

export const theme = {
  colors,
} as const;

type Props = {
  children: ReactNode;
};

const StyledComponentsProvider = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledComponentsProvider;
