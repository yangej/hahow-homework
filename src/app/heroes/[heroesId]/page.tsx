import BackHomeButton from "@/modules/app/components/BackHomeButton";
import HeroProfilePanel from "@/modules/hero/components/HeroProfilePanel";
import type { Params } from "./types";

type PageProps = {
  params: Params;
};

const HeroPage = ({ params }: PageProps) => {
  const id = params.heroesId;

  return (
    <>
      <HeroProfilePanel id={id} />
      <BackHomeButton />
    </>
  );
};

export default HeroPage;
