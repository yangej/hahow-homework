"use client";

import styled from "styled-components";
import HeroAbilityItem from "./HeroAbilityItem";
import { useHeroProfile } from "../hooks";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  margin: auto;
`;

type Props = {
  id: string;
};

const HeroProfilePanel = ({ id }: Props) => {
  const { data } = useHeroProfile(id);

  const renderItems = () => {
    if (!data) {
      return (
        <>
          <HeroAbilityItem.Loading label="STR" />
          <HeroAbilityItem.Loading label="INT" />
          <HeroAbilityItem.Loading label="AGI" />
          <HeroAbilityItem.Loading label="LUK" />
        </>
      );
    }

    return (
      <>
        <HeroAbilityItem label="STR" initialValue={data.str} />
        <HeroAbilityItem label="INT" initialValue={data.int} />
        <HeroAbilityItem label="AGI" initialValue={data.agi} />
        <HeroAbilityItem label="LUK" initialValue={data.luk} />
      </>
    );
  };

  return <Container>{renderItems()}</Container>;
};

export default HeroProfilePanel;
