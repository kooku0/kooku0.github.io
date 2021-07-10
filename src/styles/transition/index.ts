import styled from '@emotion/styled';

interface Props {
  duration: number;
}

export const TransitionTranslateY = styled.div<Props>`
  .slide-y-enter {
    transform: translateY(100vh);
  }

  .slide-y-enter.slide-y-enter-active {
    transform: translateY(0);
    transition: transform ${({ duration }) => duration}ms;
  }

  .slide-y-exit {
    transform: translateY(0);
  }

  .slide-y-exit.slide-y-exit-active {
    transform: translateY(100vh);
    transition: transform ${({ duration }) => duration}ms;
  }
`;

export const TransitionTranslateX = styled.div<Props>`
  .slide-x-enter {
    transform: translateX(100vw);
  }

  .slide-x-enter.slide-x-enter-active {
    transform: translateX(0);
    transition: transform ${({ duration }) => duration}ms;
  }

  .slide-x-exit {
    transform: translateX(0);
  }

  .slide-x-exit.slide-x-exit-active {
    transform: translateX(100vw);
    transition: transform ${({ duration }) => duration}ms;
  }
`;

export const TransitionFade = styled.div<Props>`
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity ${({ duration }) => duration}ms;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
    transition: opacity ${({ duration }) => duration}ms;
  }
`;
