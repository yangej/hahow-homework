'use client';

import Link from 'next/link';
import styled from 'styled-components';

import Button from '@/modules/common/components/Button';

const Container = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const BackHomeButton = () => {
  return (
    <Container>
      <Link href="/">
        <Button type="secondary" floating={true}>
          回首頁
        </Button>
      </Link>
    </Container>
  );
};

export default BackHomeButton;
