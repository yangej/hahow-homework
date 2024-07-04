'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

import { patchHeroProfile } from '@/modules/hero/apis';
import HeroAbilityForm from '@/modules/hero/components/HeroAbilityForm';
import type { HeroAbilityFormValues } from '@/modules/hero/components/types';
import { heroProfileKeys, useHeroProfile } from '@/modules/hero/hooks';

const Container = styled.div`
  width: 100%;
  max-width: 660px;
  padding: 20px 0;
  margin: auto;
`;

type Props = {
  id: string;
};

const HeroProfileView = ({ id }: Props) => {
  const { data, isFetched } = useHeroProfile(id);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values: HeroAbilityFormValues) =>
      patchHeroProfile({ id, ...values }),
    onError: (err) => {
      alert(err.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: heroProfileKeys.item(id) });
      alert('提交成功');
    },
  });

  const handleSubmit = (values: HeroAbilityFormValues) => {
    mutation.mutate(values);
  };

  const renderNode = () => {
    if (!isFetched) return 'Loading...';

    return <HeroAbilityForm defaultValues={data} onSubmit={handleSubmit} />;
  };

  return <Container>{renderNode()}</Container>;
};

export default HeroProfileView;
