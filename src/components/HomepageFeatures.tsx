/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';

import MandalArt from './MandalArt';

import styles from './HomepageFeatures.module.css';

const HomepageFeatures = () => {
  return (
    <section className={styles.section}>
      <h1>2024 Mandalart</h1>
      <MandalArt />
    </section>
  );
};

export default HomepageFeatures;
