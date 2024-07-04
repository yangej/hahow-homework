'use client';

import styled, { RuleSet, css } from 'styled-components';

type Status = 'normal' | 'exceeded';

const ContainerStyles: Record<Status, RuleSet> = {
  normal: css`
    background-color: ${(props) => props.theme.colors.mainLight};

    .highlight {
      color: ${(props) => props.theme.colors.main};
    }
  `,
  exceeded: css`
    background-color: ${(props) => props.theme.colors.warningLight};

    .highlight {
      color: ${(props) => props.theme.colors.warning};
    }
  `,
};

const Container = styled.div<{ $status: Status }>`
  width: 100%;
  padding: 10px;
  box-shadow:
    rgba(0, 0, 0, 0.04) 0px 0px 2px 0px,
    rgba(0, 0, 0, 0.08) 0px 4px 10px 0px;
  border-radius: 16px;
  ${({ $status }) => ContainerStyles[$status]};
`;

const Text = styled.span`
  font-size: 14px;
`;

const Number = styled.span`
  font-size: 20px;
`;

type Props = {
  limit: number;
  total: number;
};

const HeroAbilityResultPanel = ({ limit, total }: Props) => {
  const exceeded = total > limit;

  return (
    <Container $status={exceeded ? 'exceeded' : 'normal'}>
      <Text>
        總能力值為 <Number className="highlight">{limit}</Number> 點
      </Text>
      <br />
      {exceeded ? (
        <Text>
          目前您配點的能力值總和超過{' '}
          <Number className="highlight">{total - limit}</Number> 點，請修正
        </Text>
      ) : (
        <Text>
          目前您尚有 <Number className="highlight">{limit - total}</Number>{' '}
          點能力值可以支配
        </Text>
      )}
    </Container>
  );
};

export default HeroAbilityResultPanel;
