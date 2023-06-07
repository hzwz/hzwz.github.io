import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Head from '@docusaurus/Head';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="hero">
      <div className={styles.welcome_intro}>
        <h1 className={styles.hero_title}>
          <span
            style={{ color: 'var(--ifm-color-primary)' }}
          >Atomic</span> ~ 记事本</h1>
        <p className="hero__subtitle">菩提本无树，明镜亦非台，本来无一物，何处惹尘埃。</p>
      </div>
      <div className={styles.welcome_svg}>
        <img src={useBaseUrl("/img/program.svg")} />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      description="记录学习、留住生活，尝试坚持写一点东西，让每天过的慢一点。">
        <Head>
          <title>Atomic的记事本</title>
        </Head>
      <HomepageHeader />
      <main>
        <br />
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
