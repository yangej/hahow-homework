import { useQuery, queryOptions } from "@tanstack/react-query";
import { getHeroProfile, listHero } from "./apis";
import { queryKeyFactory } from "@/libs/react-query/utils";
import { Hero } from "./types";

const heroQueryKeys = queryKeyFactory("hero");

const heroesQueryOptions = queryOptions({
  queryKey: heroQueryKeys.list,
  queryFn: listHero,
});

export const useHeroes = () => {
  return useQuery(heroesQueryOptions);
};

const heroProfileKeys = queryKeyFactory("heroProfile");

const heroProfileQueryOptions = (id: Hero["id"]) =>
  queryOptions({
    queryKey: heroProfileKeys.item(id),
    queryFn: () => getHeroProfile({ id }),
    staleTime: 1000 * 60 * 5, // 5 mins
  });

export const useHeroProfile = (id: Hero["id"]) => {
  return useQuery(heroProfileQueryOptions(id));
};
