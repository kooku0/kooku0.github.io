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
          저는 핀테크회사에서 개발자로 일하고 있습니다.
          <br />이 블로그는 개발자로 일하면서 공부한내용. 핀테크 도메인을 이해하기 위해 공부한 내용들을 정리한
          공간입니다.
          <br />
          제가 정리한 내용들이 다른 분들께 도움이 되길 바랍니다. 그리고 정리한 내용들은 다른 분들이 정리한 것들을 많이
          참고 하였습니다. 참고한 링크를은 모두 남겨놓았으며 그분들께도 감사드립니다.
        </p>
      </main>
    </Layout>
  );
}
