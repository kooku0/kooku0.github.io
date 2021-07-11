import styled from '@emotion/styled';
import React from 'react';

import { SectionContainer } from '@/styles/components';
import metaConfig from '~/meta-config';

import Profile from '../profile';

const HeaderSection: React.FC = () => {
  return (
    <Section>
      <Title>{metaConfig.title}</Title>
      <Profile />
    </Section>
  );
};

export default HeaderSection;

const Section = styled.section`
  ${SectionContainer};
  scroll-snap-align: start;
  margin: 0 16px;
`;

const Title = styled.h1`
  padding: 32px 0 16px 0;
  font-size: 42px;
  font-weight: 800;
  line-height: 1.45;
  color: black;

  ${({ theme }) => theme.media.mobile} {
    font-size: 32px;
    font-weight: bold;
  }
`;
