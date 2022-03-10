// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  i18n: {
    defaultLocale: 'ko',
    locales: ['en', 'ko'],
  },
  title: 'Kooku\'s log',
  tagline: '문제에 대해 고민하고, 공부한 내용들을 기록하는 공간입니다.',
  url: 'https://kooku0.gihub.io',
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
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/kooku0/kooku0.github.io/edit/main/',
        },
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
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
            label: '블로그',
            position: 'left'
          },
          {
            to: '/docs/books/',
            position: 'left',
            label: '책',
          },
          {
            to: '/retrospect',
            position: 'left',
            label: '회고',
          },
          {
            href: 'https://github.com/kooku0/kooku0.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
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
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/kooku0/kooku0.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} kooku's log, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'scala']
      },
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: false
      },
      hideableSidebar: true,
    }),
    plugins: [
      [
        '@docusaurus/plugin-content-blog',
        {
          id: 'retrospect',
          routeBasePath: 'retrospect',
          path: 'retrospect',
          blogTitle: '회고!',
          blogDescription: '배운 내용과 생각한 내용들을 기록합니다.',
        },
      ],
      [
        "docusaurus2-dotenv",
        {
          systemvars: true,
        },
      ],
    ]
};

module.exports = config;
