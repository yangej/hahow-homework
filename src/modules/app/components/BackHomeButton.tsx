"use client";

import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const Button = styled.button`
  font-size: 16px;
  padding: 10px 16px;
  border: none;
  border-radius: 18px;
  background-color: rgb(220, 249, 243);
  color: rgb(0, 190, 164);
  box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 2px 0px,
    rgba(0, 0, 0, 0.08) 0px 4px 10px 0px;
  cursor: pointer;
  transition: background-color 300ms;

  &:hover {
    color: white;
    background-color: rgb(0, 190, 164);
  }
`;

const BackHomeButton = () => {
  return (
    <Container>
      <Link href="/">
        <Button>回首頁</Button>
      </Link>
    </Container>
  );
};

export default BackHomeButton;
