import styled from '@emotion/styled';
import React from 'react';

import {
  alignCenter,
  backgroundGrey20,
  flex,
  textBlue300,
  textGrey200,
  textGrey300
} from '@/styles/css';
import { flutter } from '@/styles/keyframes';
import metaConfig from '~/meta-config';

import CircleImage from '../Image/CircleImage';

const Profile: React.FC = () => {
  return (
    <Container>
      <CircleImage src={metaConfig.profile} alt="profile" width="80" height="80" />
      <Contents>
        <span>Written by</span>
        <AuthorName>
          <span>{`@${metaConfig.author}`}</span>
        </AuthorName>
        <Introduction>
          <span>{metaConfig.introduction}</span>
        </Introduction>
        <SocialLink>
          <a href={`https://github.com/${metaConfig.social.github}`} rel="noreferrer">
            GitHub
          </a>
        </SocialLink>
      </Contents>
    </Container>
  );
};

export default React.memo(Profile);

const Container = styled.div`
  ${flex}
  ${alignCenter}
  margin-bottom: 16px;
`;

const Contents = styled.div`
  margin-left: 12px;

  & > span {
    ${textGrey200}
    font-size: 90%;
    margin-right: 4px;
    font-weight: 600;
  }
`;

const AuthorName = styled.div`
  ${textBlue300}
  ${backgroundGrey20}
  animation: ${flutter} 2s infinite linear;
  display: inline-block;
  font-size: 95%;
  padding: 5px 6px;
  font-weight: bolder;
  border-radius: 8px;
  transform-origin: center;
`;

const Introduction = styled.div`
  ${textGrey300}
  margin-top: 4px;
  font-size: 80%;
  line-height: 1.4;
`;

const SocialLink = styled.div`
  margin-top: 4px;
  font-size: 85%;
  font-weight: 700;
`;
