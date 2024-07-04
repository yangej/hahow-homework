"use client";

import HeroCard from "./HeroCard";
import styled from "styled-components";
import Link from "next/link";
import { useHeroes } from "../hooks";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: auto;
  padding: 20px;
  background-color: rgb(0, 190, 164);
`;

type Props = {
  currentId?: string;
};

const HeroList = ({ currentId }: Props) => {
  const { data = [], isFetched } = useHeroes();

  const renderItem = () => {
    if (!isFetched) {
      return (
        <>
          <HeroCard.Loading />
          <HeroCard.Loading />
          <HeroCard.Loading />
          <HeroCard.Loading />
        </>
      );
    }

    return (
      <>
        {data.map((item) => (
          <Link key={item.id} href={`/heroes/${item.id}`}>
            <HeroCard
              name={item.name}
              image={item.image}
              status={currentId === item.id ? "active" : "inactive"}
            />
          </Link>
        ))}
      </>
    );
  };

  return <Container>{renderItem()}</Container>;
};

export default HeroList;
