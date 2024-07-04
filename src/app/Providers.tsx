import type { ReactNode } from 'react';

import ReactQueryProvider from '@/libs/react-query/ReactQueryProvider';
import StyledComponentsProvider from '@/libs/styled-components/StyledComponentsProvider';

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <ReactQueryProvider>
      <StyledComponentsProvider>{children}</StyledComponentsProvider>
    </ReactQueryProvider>
  );
};

export default Providers;
