/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { DOMElement, ReactElement, useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { mdiClose, mdiHeart, mdiHeartOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';

import CoverImage from '@/components/cover-image';
import markdownToHtml from '@/lib/markdownToHtml';
import { getPostBySlug, listPostContent } from '@/lib/posts';
import { listTags, TagContent } from '@/lib/tags';
import color from '@/styles';
import SectionContainer from '@/styles/container/SectionContainer';
import MarkdownStyle from '@/styles/MarkdownStyle';
import { openUrl, share } from '@/utils';

import metaConfig from '~/meta-config';

const LayoutContainer = styled.div`
  position: relative;
`;

const NavBar = styled.nav`
  ${SectionContainer};
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  padding-left: 16px;
  padding-right: 16px;
  z-index: 999;
  height: 48px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavIconContainer = styled.div`
  & > img {
    margin-left: 20px;
  }
`;

const SvgIcon = styled.img``;

const Article = styled.article``;

const Container = styled.div`
  ${SectionContainer};
  position: relative;
  padding-bottom: 32px;

  ${({ theme }) => theme.media.mobile} {
    margin: 0 16px;
  }
`;

const Tags = styled.div`
  margin-top: 24px;
`;

const Tag = styled.span`
  color: ${({ theme }) => theme.color.grey500};
  font-size: 14px;
  font-weight: bold;
  line-height: 1.57;
  margin-right: 8px;
`;

const Title = styled.h1`
  margin: 8px 0 24px 0;
  font-size: 26px;
  font-weight: bold;
  line-height: 1.38;
  color: black;
`;

const Contents = styled.div`
  font-size: 16px;
  font-weight: normal;
  line-height: 1.63;
  min-height: 320px;
  color: ${({ theme }) => theme.color.grey800};
`;

const Markdown = styled.div`
  ${MarkdownStyle};
  font-size: 18px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  justify-content: center;

  button {
    width: 240px;
    height: 48px;
    border: none;
    margin: 8px auto;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    padding: 16px;
    justify-content: center;
    position: relative;
    cursor: pointer;
  }
`;

const LikeButton = styled.button<{ isLike: boolean }>`
  margin-bottom: 16px;
  background-color: ${({ theme, isLike }) => (isLike ? theme.color.grey70 : theme.color.blue50)};
  color: ${({ theme, isLike }) => (isLike ? theme.color.grey350 : theme.color.blue700)};
  & > svg {
    position: absolute;
    left: 16px;
  }
`;

const ShareButton = styled.button`
  background-color: ${({ theme }) => theme.color.grey300};
  color: ${({ theme }) => theme.color.grey600};
  & > img {
    position: absolute;
    left: 16px;
  }
`;

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, ['title', 'slug', 'author', 'content', 'cover', 'tags']);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  };
}

export async function getStaticPaths() {
  const posts = listPostContent();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
}

interface PostProps {
  post: {
    author: string;
    content: string;
    cover: string;
    slug: string;
    title: string;
    tags: TagContent[];
  };
}

function Post({ post }: PostProps) {
  const { content, cover, slug, title, tags } = post;
  const [isLike, setIsLike] = useState(false);

  const router = useRouter();

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

  const closePost = useCallback(() => {
    router.replace('/');
  }, []);

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
        <NavBar>
          <div onClick={closePost}>
            <Icon path={mdiClose} size="24" color={color.grey600} />
          </div>

          <NavIconContainer className="like-button">
            <SvgIcon
              onClick={toggleLike}
              src={isLike ? '/icon/like-on.svg' : '/icon/like-off.svg'}
              className="like-button"
              alt="like"
              height="24"
              width="24"
            />
            <SvgIcon onClick={shareLink} src="/icon/share.svg" alt="share" height="24" width="24" />
          </NavIconContainer>
        </NavBar>

        <Article>
          <Container>
            <section>
              {cover && <CoverImage src={cover} />}
              <Tags>
                {tags.map(({ slug, name }) => (
                  <Tag key={slug}>{name}</Tag>
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
                    color={isLike ? color.grey350 : color.blue700}
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
            </section>
          </Container>
        </Article>
      </LayoutContainer>
    </>
  );
}

export default Post;
