"use client";

/* eslint-disable react/no-children-prop */
import { useForm } from "@tanstack/react-form";
import { HeroAbilityFormValues } from "./types";
import HeroAbilityItem from "./HeroAbilityItem";
import styled, { css, RuleSet } from "styled-components";
import { useMemo } from "react";
import HeroAbilityResultPanel from "./HeroAbilityResultPanel";

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

type ButtonStatus = "normal" | "disabled";

const SubmitButtonStyles: Record<ButtonStatus, RuleSet> = {
  normal: css`
    color: white;
    background-color: rgb(0, 190, 164);
  `,
  disabled: css`
    color: white;
    background-color: rgb(89, 89, 89);
  `,
};

const SubmitButton = styled.button<{ $status: ButtonStatus }>`
  width: 100%;
  font-size: 16px;
  padding: 10px 16px;
  border: none;
  border-radius: 18px;
  ${({ $status }) => SubmitButtonStyles[$status]}
  box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 2px 0px,
    rgba(0, 0, 0, 0.08) 0px 4px 10px 0px;
  cursor: pointer;
  transition: 300ms;
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
              0
            );
            const disabled = total !== limit;

            return (
              <>
                <HeroAbilityResultPanel
                  limit={limit}
                  total={total}
                />
                <SubmitButton
                  type="submit"
                  disabled={disabled}
                  $status={disabled ? "disabled" : "normal"}
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
