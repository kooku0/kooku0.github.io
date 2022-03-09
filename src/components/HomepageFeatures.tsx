/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '공부',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        근거를 바탕으로 코딩을 하기 위해 공부하고 노력합니다. 코드 한 줄에 많은 고민과 이유를 담습니다.
      </>
    ),
  },
  {
    title: '기록',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        읽은 책들과 공부한 내용들을 정리하고 기록으로 남겨 언제든지 볼 수 있게 합니다.
      </>
    ),
  },
  {
    title: '새로운 기술',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        새로운 기술에 흥미가 많습니다. 새로운 기술을 도입할 때는 왜 이런 기술이 탄생했고, 어떻게 하면 잘 사용할 수 있을지 고민합니다.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
