import { useState } from 'react';
import styled from 'styled-components';

import Button from '@/modules/common/components/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 150px;
  height: 150px;
  padding: 10px;
  background-color: white;
  box-shadow:
    rgba(0, 0, 0, 0.04) 0px 0px 2px 0px,
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
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  overflow: hidden;
`;

const StyledButton = styled(Button)`
  width: 30px;
  height: 30px;
  border-radius: unset;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type Props = {
  label: string;
  value?: number;
  onChange?(value: number): void;
};

const HeroAbilityItem = ({
  label,
  value: initialValue = 0,
  onChange,
}: Props) => {
  const [value, setValue] = useState(initialValue);

  const handleIncrease = () => {
    setValue(value + 1);
    onChange?.(value + 1);
  };

  const handleDecrease = () => {
    if (value <= 0) return;

    setValue(value - 1);
    onChange?.(value - 1);
  };

  return (
    <Container>
      <Value>{value}</Value>
      <BottomRow>
        <Label>{label}</Label>
        <ButtonContainer>
          <StyledButton htmlType="button" size="s" onClick={handleIncrease}>
            +
          </StyledButton>
          <StyledButton htmlType="button" size="s" onClick={handleDecrease}>
            -
          </StyledButton>
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
          <StyledButton htmlType="button" size="s" disabled={true}>
            +
          </StyledButton>
          <StyledButton htmlType="button" size="s" disabled={true}>
            -
          </StyledButton>
        </ButtonContainer>
      </BottomRow>
    </Container>
  );
};

HeroAbilityItem.Loading = HeroAbilityItemLoading;

export default HeroAbilityItem;
