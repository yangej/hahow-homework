import BackHomeButton from '@/modules/app/components/BackHomeButton';
import HeroProfileView from '@/modules/app/components/HeroProfileView';

import type { Params } from './types';

type PageProps = {
  params: Params;
};

const HeroPage = ({ params }: PageProps) => {
  const id = params.heroesId;

  return (
    <>
      <HeroProfileView id={id} />
      <BackHomeButton />
    </>
  );
};

export default HeroPage;
