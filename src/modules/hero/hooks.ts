import { useQuery, queryOptions } from "@tanstack/react-query";
import { listHero } from "./apis";
import { queryKeyFactory } from "@/libs/react-query/utils";

const heroQueryKeys = queryKeyFactory("hero");

const heroesQueryOptions = queryOptions({
  queryKey: heroQueryKeys.list,
  queryFn: listHero,
});

export const useHeroes = () => {
  return useQuery(heroesQueryOptions);
};