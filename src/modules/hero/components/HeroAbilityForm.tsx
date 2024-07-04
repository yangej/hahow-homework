'use client';

/* eslint-disable react/no-children-prop */
import { useForm } from '@tanstack/react-form';
import { useMemo } from 'react';
import styled from 'styled-components';

import Button from '@/modules/common/components/Button';

import HeroAbilityItem from './HeroAbilityItem';
import HeroAbilityResultPanel from './HeroAbilityResultPanel';
import { HeroAbilityFormValues } from './types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

const SubmitButton = styled(Button)`
  width: 100%;
`;

type Props = {
  defaultValues?: Partial<HeroAbilityFormValues>;
  onSubmit(values: HeroAbilityFormValues): void;
};

const HeroAbilityForm = ({ defaultValues, onSubmit }: Props) => {
  const { Field, Subscribe, handleSubmit } = useForm<HeroAbilityFormValues>({
    defaultValues: {
      str: defaultValues?.str || 0,
      int: defaultValues?.int || 0,
      agi: defaultValues?.agi || 0,
      luk: defaultValues?.luk || 0,
    },
    onSubmit: ({ value }) => onSubmit(value),
  });

  const limit = useMemo(() => {
    if (!defaultValues) return 0;

    return Object.values(defaultValues).reduce((acc, cur) => acc + cur, 0);
  }, [defaultValues]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit();
      }}
    >
      <Container>
        <FieldContainer>
          <Field
            name="str"
            children={(field) => (
              <HeroAbilityItem
                label="STR"
                value={field.state.value}
                onChange={field.handleChange}
              />
            )}
          />
          <Field
            name="int"
            children={(field) => (
              <HeroAbilityItem
                label="INT"
                value={field.state.value}
                onChange={field.handleChange}
              />
            )}
          />
          <Field
            name="agi"
            children={(field) => (
              <HeroAbilityItem
                label="AGI"
                value={field.state.value}
                onChange={field.handleChange}
              />
            )}
          />
          <Field
            name="luk"
            children={(field) => (
              <HeroAbilityItem
                label="LUK"
                value={field.state.value}
                onChange={field.handleChange}
              />
            )}
          />
        </FieldContainer>
        <Subscribe
          children={(state) => {
            const total = Object.values(state.values).reduce(
              (acc, cur) => acc + cur,
              0,
            );
            const disabled = total !== limit;

            return (
              <>
                <HeroAbilityResultPanel limit={limit} total={total} />
                <SubmitButton
                  htmlType="submit"
                  type={disabled ? 'disabled' : 'primary'}
                  disabled={disabled}
                  floating={true}
                >
                  提交
                </SubmitButton>
              </>
            );
          }}
        />
      </Container>
    </form>
  );
};

export default HeroAbilityForm;
