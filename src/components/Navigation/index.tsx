import styled from '@emotion/styled';
import { useRouter } from 'next/dist/client/router';
import React from 'react';

import GitHubIcon from '@/components/Icon/GitHubIcon';
import { SectionContainer } from '@/styles/components';
import { alignCenter, flex, justifySpaceBetween, textWhite } from '@/styles/css';
import metaConfig from '~/meta-config';

const Navigation: React.FC = () => {
  const router = useRouter();

  const moveToHome = () => {
    router.push('/');
  };

  return (
    <Container>
      <NavBar>
        <Title role="button" tabIndex={0} onClick={moveToHome}>
          {metaConfig.title}
        </Title>

        <GitHubIcon />
      </NavBar>
    </Container>
  );
};

export default React.memo(Navigation);

const Container = styled.div`
  background: linear-gradient(72deg, #6ecaf5, #e7c6f1);
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
`;

const NavBar = styled.nav`
  ${flex}
  ${justifySpaceBetween}
  ${alignCenter}
  ${SectionContainer}
  height: 60px;
`;

const Title = styled.h3`
  ${textWhite}
  opacity: 0.7;
  font-size: 28px;
  font-weight: 800;
`;
