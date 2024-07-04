import { useState } from "react";
import styled, { css, RuleSet } from "styled-components";

type Status = "active" | "inactive";

const ContainerStyles: Record<Status, RuleSet> = {
  active: css`
    background-color: rgb(220, 249, 243);
    color: rgb(0, 190, 164);
  `,
  inactive: css`
    background-color: rgb(245, 247, 249);
    color: rgb(89, 89, 89);
  `,
};

const Container = styled.div<{ $status: Status }>`
  width: 150px;
  border-radius: 16px;
  overflow: hidden;
  ${({ $status }) => ContainerStyles[$status]}
`;

const TitleContainer = styled.div`
  padding: 10px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  text-align: center;
`;

const Image = styled.img<{ $hovering: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: ${({ $hovering }) => ($hovering ? "scale(1.1)" : "scale(1)")};
  transition: transform 300ms ease-out 0s;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
`;

type Props = {
  image: string;
  name: string;
  status?: Status;
};

const HeroCard = ({ image, name, status = "inactive" }: Props) => {
  const [hovering, setHovering] = useState(false);
  const handleMouseEnter = () => {
    setHovering(true);
  };
  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <Container
      $status={status}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ImageContainer>
        <Image src={image} $hovering={hovering} />
      </ImageContainer>
      <TitleContainer>
        <Title>{name}</Title>
      </TitleContainer>
    </Container>
  );
};

const HeroCardLoading = () => {
  return (
    <Container
      $status='inactive'
    >
      <ImageContainer>
        <Image src="" $hovering={false} />
      </ImageContainer>
      <TitleContainer>
        <Title>Loading</Title>
      </TitleContainer>
    </Container>
  );
};

HeroCard.Loading = HeroCardLoading;

export default HeroCard;
