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
    <Contents>
      <Markdown dangerouslySetInnerHTML={{ __html: content }} />
    </Contents>
  );
};

export default Resume;

const Contents = styled.div`
  font-size: 16px;
  font-weight: normal;
  line-height: 1.63;
  min-height: 320px;
`;

const Markdown = styled.div`
  ${MarkdownStyle};
`;
