"use client";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 100px;
  user-select: none;
  color: ${props => props.theme.colors.secondaryText};
`;

const Highlight = styled.span`
  color: ${props => props.theme.colors.main};
`;

const HomeView = () => {
  return (
    <Container>
      <Title>
        <Highlight>Hello,</Highlight>
        <br />
        {`Heroes' world`}
      </Title>
    </Container>
  );
};

export default HomeView;
