import type { Options as BlogOptions } from '@docusaurus/plugin-content-blog';
import type { Options as DocsOptions } from '@docusaurus/plugin-content-docs';
import type { Config } from '@docusaurus/types';
import { themes } from 'prism-react-renderer';

export default async function createConfigAsync(): Promise<Config> {
  return {
    i18n: {
      defaultLocale: 'ko',
      locales: ['ko'],
    },
    title: "Kooku's log",
    tagline: '문제에 대해 고민하고, 공부한 내용들을 기록하는 공간입니다.',
    url: 'https://kooku0.github.io',
    baseUrl: '/',
    onBrokenLinks: 'ignore', // default is throw
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'kooku0', // Usually your GitHub org/user name.
    projectName: 'kooku0.github.io', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    trailingSlash: true,
    future: {
      v4: true,
    },

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        {
          docs: {
            sidebarPath: './sidebars.ts',
            editUrl: 'https://github.com/kooku0/kooku0.github.io/edit/main/',
          } satisfies DocsOptions,
          // blog: {
          //   blogSidebarTitle: '모든 게시물',
          //   blogSidebarCount: 'ALL',
          //   showReadingTime: true,
          //   // Please change this to your repo.
          //   editUrl: 'https://github.com/kooku0/kooku0.github.io/edit/main/',
          //   postsPerPage: 'ALL',
          //   path: 'tech',
          //   id: 'tech',
          // } satisfies BlogOptions,

          theme: {
            customCss: './src/css/custom.css',
          },
          gtag: {
            trackingID: 'G-KVSM4B0KPY',
          },
          sitemap: {
            changefreq: 'weekly',
            priority: 0.5,
          },
        },
      ],
    ],

    plugins: [
      [
        '@docusaurus/plugin-content-blog',
        {
          id: 'tech',
          routeBasePath: 'tech',
          path: 'tech',
          blogTitle: 'Tech',
          blogDescription: 'Tech',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '전체 게시물',
          postsPerPage: 'ALL',
        } satisfies BlogOptions,
      ],
      [
        '@docusaurus/plugin-content-blog',
        {
          id: 'somethings',
          routeBasePath: 'somethings',
          path: 'somethings',
          blogTitle: '이것저것',
          blogDescription: '이것저것',
          postsPerPage: 'ALL',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '전체 게시물',
        } satisfies BlogOptions,
      ],
      [
        '@docusaurus/plugin-content-blog',
        {
          id: 'retrospect',
          routeBasePath: 'retrospect',
          path: 'retrospect',
          blogTitle: '경험을 돌아봄',
          blogDescription: '경험을 돌아보고 깨달음을 얻어 발전하는 과정',
          postsPerPage: 'ALL',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '전체 게시물',
          exclude: ['**/archive'],
        } satisfies BlogOptions,
      ],
      [
        '@docusaurus/plugin-content-blog',
        {
          id: 'journal',
          routeBasePath: 'journal',
          path: 'journal',
          blogTitle: 'Journal',
          blogDescription: 'Journal',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '전체 게시물',
          postsPerPage: 'ALL',
        } satisfies BlogOptions,
      ],
      [
        'docusaurus-plugin-dotenv',
        {
          path: './.env',
          systemvars: true,
        },
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      {
        navbar: {
          title: "Kooku's log",
          logo: {
            alt: 'My Site Logo',
            src: 'img/favicon.ico',
          },
          items: [
            {
              to: '/somethings/',
              label: '이것저것',
              position: 'left',
            },
            {
              to: '/tech/',
              label: '테크',
              position: 'left',
            },
            {
              to: '/books/',
              type: 'docSidebar',
              sidebarId: 'books',
              position: 'left',
              label: 'Book',
            },
            {
              to: '/journal',
              label: 'Journal',
              position: 'left',
            },
            {
              to: '/smartfarm',
              type: 'docSidebar',
              sidebarId: 'smartfarm',
              label: 'Smartfarm',
              position: 'left',
            },
            {
              to: '/stock',
              type: 'docSidebar',
              sidebarId: 'stock',
              label: 'Stock',
              position: 'left',
            },
            {
              href: 'https://github.com/kooku0/kooku0.github.io',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        docs: {
          sidebar: {
            hideable: true,
            autoCollapseCategories: true,
          },
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: '테크',
                  to: '/tech/',
                },
                {
                  label: '이것저것',
                  to: '/somethings/',
                },
                {
                  label: '책',
                  to: '/docs/books/',
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'GitHub',
                  href: 'https://github.com/kooku0/kooku0.github.io',
                },
                {
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/mingyu-gu-25aa761b5/',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} kooku's log, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: themes.github,
          darkTheme: themes.vsDark,
          additionalLanguages: ['java', 'scala', 'docker', 'yaml'],
        },
        colorMode: {
          defaultMode: 'dark',
          respectPrefersColorScheme: false,
        },
      },
  };
}
