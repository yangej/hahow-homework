'use client';

import type { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import ReactQueryProvider from '@/libs/react-query/ReactQueryProvider';
import StyledComponentsRegister from '@/libs/styled-components/StyledComponentsRegister';
import { theme } from '@/libs/styled-components/constants';

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <ReactQueryProvider>
      <StyledComponentsRegister>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyledComponentsRegister>
    </ReactQueryProvider>
  );
};

export default Providers;
