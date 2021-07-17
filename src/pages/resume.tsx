import styled from '@emotion/styled';
import { GetStaticProps } from 'next';
import React from 'react';

import markdownToHtml from '@/lib/markdownToHtml';
import { getResume } from '@/lib/posts';
import MarkdownStyle from '@/styles/MarkdownStyle';

interface Props {
  readonly slug: string;
  readonly content: string;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const slugOfResume = 'resume';
  let content = '';
  try {
    const resume = getResume(slugOfResume);
    content = await markdownToHtml(resume.content || '');
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      slug: slugOfResume,
      content
    }
  };
};

const Resume: React.FC<Props> = ({ content }) => {
  return (
    <Article>
      <Contents>
        <Markdown dangerouslySetInnerHTML={{ __html: content }} />
      </Contents>
    </Article>
  );
};

export default Resume;

const Contents = styled.div`
  font-size: 16px;
  font-weight: normal;
  line-height: 1.63;
  min-height: 320px;
`;

const Article = styled.article`
  max-width: 624px;
  position: relative;
  padding-bottom: 32px;
  padding: 0.8125rem 1.21875rem 2.4375rem;
  margin: auto;

  ${({ theme }) => theme.media.mobile} {
    padding: 0 16px;
  }
`;

const Markdown = styled.div`
  ${MarkdownStyle};

  tr th {
    padding: 0;
    height: 0;
    border: 0;
  }
`;
