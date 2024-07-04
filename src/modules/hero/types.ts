export type Hero = {
  id: string;
  name: string;
  image: string;
};

export type ListHeroResponse = Hero[];

export type GetHeroPayload = {
  id: Hero["id"];
};

export type GetHeroResponse = Hero;

export type HeroProfile = {
  str: number;
  int: number;
  agi: number;
  luk: number;
};

export type GetHeroProfilePayload = {
  id: Hero["id"];
};

export type GetHeroProfileResponse = HeroProfile;

export type PatchHeroProfilePayload = {
  id: Hero["id"];
} & Partial<HeroProfile>;

export type PatchHeroProfileResponse = string;