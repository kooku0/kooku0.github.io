import React from 'react';
import { ReactChannelIO } from 'react-channel-plugin';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import styles from './index.module.css';

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/blog/">
            고민했던 내용보기 🤔
          </Link>
        </div>
      </div>
    </header>
  );
};

// eslint-disable-next-line react/function-component-definition
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <ReactChannelIO autoBoot pluginKey={process.env.CHANNEL_ID_PLUGIN_KEY || ''}>
      <Layout description="Description will go into a meta tag in <head />" title={`Hello from ${siteConfig.title}`}>
        <HomepageHeader />
        <main>Hi</main>
      </Layout>
    </ReactChannelIO>
  );
}
