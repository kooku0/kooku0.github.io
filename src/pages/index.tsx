import * as ChannelService from '@channel.io/channel-web-sdk-loader';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import styles from './index.module.css';

ChannelService.loadScript();

ChannelService.boot({
  pluginKey: process.env.CHANNEL_ID_PLUGIN_KEY || '',
});

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
};

export default function Home() {
  return (
    <Layout>
      <HomepageHeader />
      <main className={clsx('container', styles.main)}>
        <p>
          안녕하세요.
          <br />
          저는 당근페이라는 핀테크 회사에서 software engineer로 일하고 있습니다.
          <br />이 블로그는 engineer로 일하면서 공부한 내용과 제가 일하고 있는 도메인에 대한 이해를 넓히기 위해 정리한
          자료들을 공유하는 공간입니다.
          <br />
          제가 정리한 글들이 다른 분들께도 도움이 되었으면 합니다.
          <br />
          또한, 대부분의 글은 여러 자료들을 참고하여 작성하였으며, 참고한 링크는 모두 함께 남겨두었습니다.
        </p>
      </main>
    </Layout>
  );
}
