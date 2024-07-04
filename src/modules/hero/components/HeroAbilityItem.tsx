import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 150px;
  height: 150px;
  padding: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 2px 0px,
    rgba(0, 0, 0, 0.08) 0px 4px 10px 0px;
  border-radius: 16px;
  overflow: hidden;
`;

const Value = styled.div`
  font-size: 30px;
  font-weight: 600;
  line-height: 38px;
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  color: rgb(89, 89, 89);
`;

const ButtonContainer = styled.div`
  display: flex;
  height: 30px;
  border-radius: 16px;
  overflow: hidden;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  color: rgb(0, 190, 164);
  background-color: rgb(220, 249, 243);
  border: none;
  cursor: pointer;
  transition: background-color 300ms;

  &:hover {
    color: white;
    background-color: rgb(0, 190, 164);
  }
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type Props = {
  label: string;
  initialValue?: number;
};

const HeroAbilityItem = ({
  label,
  initialValue = 0,
}: Props) => {
  const [value, setValue] = useState(initialValue);

  const handleIncrease = () => {
    setValue(value + 1);
  };

  const handleDecrease = () => {
    if (value <= 0) return;

    setValue(value - 1);
  };

  return (
    <Container>
      <Value>{value}</Value>
      <BottomRow>
        <Label>{label}</Label>
        <ButtonContainer>
          <Button onClick={handleIncrease}>
            +
          </Button>
          <Button onClick={handleDecrease}>
            -
          </Button>
        </ButtonContainer>
      </BottomRow>
    </Container>
  );
};

type LoadingProps = {
  label: string;
};

const HeroAbilityItemLoading = ({ label }: LoadingProps) => {
  return (
    <Container>
      <Value>Loading</Value>
      <BottomRow>
        <Label>{label}</Label>
        <ButtonContainer>
          <Button disabled={true}>
            +
          </Button>
          <Button disabled={true}>
            -
          </Button>
        </ButtonContainer>
      </BottomRow>
    </Container>
  );
};

HeroAbilityItem.Loading = HeroAbilityItemLoading;

export default HeroAbilityItem;
