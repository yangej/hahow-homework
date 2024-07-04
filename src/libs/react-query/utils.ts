export const queryKeyFactory = (entity: string) => {
  const result = {
    list: [entity] as const,
    item: (id: string) => [...result.list, id] as const,
  };

  return result;
};
