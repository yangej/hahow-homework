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
  color: rgb(89, 89, 89);
`;

const Highlight = styled.span`
  color: rgb(0, 190, 164);
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
