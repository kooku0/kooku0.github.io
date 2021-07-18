/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import styled from '@emotion/styled';
import { mdiHeart, mdiHeartOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import React, { useCallback, useEffect, useState } from 'react';

import CoverImage from '@/components/Image/CoverImage';
import Navigation from '@/components/Navigation';
import markdownToHtml from '@/lib/markdownToHtml';
import { getPostBySlug, listPostContent, PostContent } from '@/lib/posts';
import SectionContainer from '@/styles/container/SectionContainer';
import {
  alignCenter,
  backgroundBlue40,
  backgroundGrey30,
  flex,
  flexColumn,
  justifyCenter,
  textBlack,
  textBlue300,
  textGrey200,
  textGrey300
} from '@/styles/css';
import MarkdownStyle from '@/styles/MarkdownStyle';
import { color, media } from '@/styles/theme';
import { share } from '@/utils';
import metaConfig from '~/meta-config';

interface Props {
  post: PostContent & {
    readonly content: string;
  };
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const params = context.params!;
  const post = getPostBySlug(params.slug, ['title', 'slug', 'content', 'cover', 'tags']);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  };
};

export const getStaticPaths = () => {
  const posts = listPostContent();

  return {
    paths: posts?.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
};

const Post: React.FC<Props> = ({ post }) => {
  const { content, cover, slug, title, tags } = post;
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    try {
      const likes: string[] = JSON.parse(localStorage.getItem('likes') ?? '[]');
      if (likes.indexOf(slug) !== -1) {
        setIsLike(true);
      } else {
        setIsLike(false);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const toggleLike = useCallback(() => {
    try {
      const likes: string[] = JSON.parse(localStorage.getItem('likes') ?? '[]');
      if (isLike) {
        likes.splice(likes.indexOf(slug), 1);
      } else {
        likes.push(slug);
      }
      localStorage.setItem('likes', JSON.stringify(likes));
      setIsLike(!isLike);
    } catch (error) {
      console.error(error);
    }
  }, [isLike]);

  const shareLink = useCallback(() => {
    const data = {
      title,
      text: `${title}`,
      url: `${window.location.origin}/posts/${slug}?shared=true`
    };

    share(data);
  }, []);

  return (
    <>
      <Head>
        <title>{`${metaConfig.title} - ${title}`}</title>
        <meta property="og:logo" content={`${metaConfig.siteUri}/favicon.ico`} key="logo" />
        <meta property="og:title" content={title} key="title" />
        <meta property="og:image" content={`${metaConfig.siteUri}${cover}`} key="image" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="article" key="type" />
      </Head>
      <LayoutContainer>
        <Navigation sticky />

        <Article>
          {cover && <CoverImage src={cover} />}
          <Section>
            <Tags>
              {tags?.map(({ slug: slugOfTag, name }) => (
                <Tag key={slugOfTag}>{name}</Tag>
              ))}
            </Tags>
            <header>
              <Title>{title}</Title>
            </header>

            <Contents>
              <Markdown dangerouslySetInnerHTML={{ __html: content }} />
            </Contents>

            <ButtonContainer>
              <LikeButton onClick={toggleLike} isLike={isLike} className="like-button">
                <Icon
                  className="like-button"
                  path={isLike ? mdiHeart : mdiHeartOutline}
                  color={isLike ? color.grey40 : color.blue300}
                  size="20"
                />
                LIKE
              </LikeButton>

              <ShareButton onClick={shareLink} className="share-button">
                <SvgIcon
                  src="/icon/share.svg"
                  alt="share"
                  height="20"
                  width="20"
                  className="share-button"
                />
                SHARE
              </ShareButton>
            </ButtonContainer>
          </Section>
        </Article>
      </LayoutContainer>
    </>
  );
};

export default Post;

const LayoutContainer = styled.div`
  position: relative;
`;

const SvgIcon = styled.img``;

const Article = styled.article`
  ${media.desktop} {
    max-width: 1024px;
    margin: auto;
  }

  ${media.tablet} {
    margin: 0 16px;
  }
`;

const Section = styled.section`
  ${SectionContainer};
  position: relative;
  padding-bottom: 32px;

  ${media.mobile} {
    margin: 0 16px;
  }
`;

const Tags = styled.div`
  margin-top: 24px;
`;

const Tag = styled.span`
  ${textGrey200}
  font-size: 14px;
  font-weight: bold;
  line-height: 1.57;
  margin-right: 8px;
`;

const Title = styled.h1`
  ${textBlack}
  margin: 8px 0 24px 0;
  font-size: 26px;
  font-weight: bold;
  line-height: 1.2;
`;

const Contents = styled.div`
  ${textGrey300}
  font-size: 16px;
  font-weight: normal;
  line-height: 1.63;
  min-height: 320px;
`;

const Markdown = styled.div`
  ${MarkdownStyle};
`;

const ButtonContainer = styled.div`
  ${flexColumn}
  ${justifyCenter}
  width: 100%;
  margin-top: 48px;

  button {
    ${flex}
    ${alignCenter}
    ${justifyCenter}
    width: 240px;
    height: 48px;
    border: none;
    margin: 8px auto;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    padding: 16px;
    position: relative;
  }
`;

const LikeButton = styled.button<{ isLike: boolean }>`
  ${({ isLike }) => (isLike ? backgroundGrey30 : backgroundBlue40)}
  ${({ isLike }) => (isLike ? textGrey300 : textBlue300)}
  margin-bottom: 16px;

  & > svg {
    position: absolute;
    left: 16px;
  }
`;

const ShareButton = styled.button`
  ${backgroundGrey30}
  ${textGrey300}
  & > img {
    position: absolute;
    left: 16px;
  }
`;
