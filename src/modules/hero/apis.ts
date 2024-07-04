import * as clients from '@/modules/common/utils/api';

import type {
  GetHeroPayload,
  GetHeroProfilePayload,
  GetHeroProfileResponse,
  GetHeroResponse,
  ListHeroResponse,
  PatchHeroProfilePayload,
  PatchHeroProfileResponse,
} from './types';

const listHero = () => clients.hahow.get<ListHeroResponse>('/heroes');

const getHero = ({ id }: GetHeroPayload) => {
  return clients.hahow.get<GetHeroResponse>(`/heroes/${id}`);
};

const getHeroProfile = ({ id }: GetHeroProfilePayload) => {
  return clients.hahow.get<GetHeroProfileResponse>(`/heroes/${id}/profile`);
};

const patchHeroProfile = ({ id, ...body }: PatchHeroProfilePayload) => {
  return clients.hahow.patch<PatchHeroProfileResponse, typeof body>(
    `/heroes/${id}/profile`,
    body,
  );
};

export { listHero, getHero, getHeroProfile, patchHeroProfile };
