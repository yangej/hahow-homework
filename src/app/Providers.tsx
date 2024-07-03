import type { ReactNode } from "react";
import ReactQueryProvider from "@/libs/react-query/ReactQueryProvider";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default Providers;
