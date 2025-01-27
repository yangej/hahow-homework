'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import { useHeroes } from '../hooks';
import HeroCard from './HeroCard';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: auto;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.main};
`;

const HeroList = () => {
  const params = useParams();
  const currentId = params.heroesId as string;
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
              status={currentId === item.id ? 'active' : 'inactive'}
            />
          </Link>
        ))}
      </>
    );
  };

  return <Container>{renderItem()}</Container>;
};

export default HeroList;
