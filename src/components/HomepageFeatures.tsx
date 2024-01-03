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
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <MandalArt />
        </div>
      </div>
    </section>
  );
};

export default HomepageFeatures;
