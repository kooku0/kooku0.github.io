import { themes } from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type {Options as DocsOptions} from '@docusaurus/plugin-content-docs';
import type {Options as BlogOptions} from '@docusaurus/plugin-content-blog';

export default async function createConfigAsync() {
  return {
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },
  title: 'Kooku\'s log',
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

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          editUrl: 'https://github.com/kooku0/kooku0.github.io/edit/main/',
        } satisfies DocsOptions,
        blog: {
          blogSidebarTitle: '모든 게시물',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/kooku0/kooku0.github.io/edit/main/',
          postsPerPage: 'ALL',
          path: 'blog',
          id: 'blog'
        } satisfies BlogOptions,
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
      }),
    ],
  ],

  plugins: [
    [
      'content-blog',
      {
        id: 'retrospect',
        routeBasePath: 'retrospect',
        path: 'retrospect',
        blogTitle: '경험을 돌아봄',
        blogDescription: '경험을 돌아보고 깨달음을 얻어 발전하는 과정',
        exclude: ['**/archive'],
      } satisfies BlogOptions,
    ],
    [
      'content-blog',
      {
        id: 'journal',
        routeBasePath: 'journal',
        path: 'journal',
        blogTitle: 'Journal',
        blogSidebarCount: 'ALL',
        postsPerPage: 'ALL',
      } satisfies BlogOptions,
    ],
    [
      "docusaurus-plugin-dotenv",
      {
        path: './.env',
        systemvars: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Kooku\'s log',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
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
          autoCollapseCategories: true
        }
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '블로그',
                to: '/blog',
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
                href: 'https://www.linkedin.com/in/mingyu-gu-25aa761b5/'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} kooku's log, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.vsDark,
        additionalLanguages: ['java', 'scala', 'docker', 'yaml']
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false
      },
    }),
  } satisfies Config;
};
