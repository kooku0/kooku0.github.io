import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';
import * as ChannelService from '@channel.io/channel-web-sdk-loader';

ChannelService.loadScript();

ChannelService.boot({
  "pluginKey": process.env.CHANNEL_ID_PLUGIN_KEY || '',
});

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/blog/somethings">
            고민했던 내용보기 🤔
          </Link>
        </div>
      </div>
    </header>
  );
};

export default function Home() {
  return (    
    <Layout>
      <HomepageHeader />
      <main>Hi</main>
    </Layout>
  );
}
