import HeroProfilePanel from "@/modules/hero/components/HeroProfilePanel";
import type { Params } from "./types";

type PageProps = {
  params: Params;
};

const HeroPage = ({ params }: PageProps) => {
  const id = params.heroesId;

  return <HeroProfilePanel id={id} />;
};

export default HeroPage;
