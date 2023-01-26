const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext');

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Boticord',
  tagline: '',
  url: 'https://bcv3.livixx.me',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Boticord',
  projectName: 'API',
  themeConfig: {
    navbar: {
      title: 'Boticord',
      logo: {
        alt: 'Boticord logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: '/api/',
          position: 'left',
          label: 'API',
        },
        {
          href: 'https://github.com/boticord',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            // {
            //   label: 'Contributing',
            //   to: '/contributing',
            // },
            {
              label: 'REST API',
              to: '/api/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/boticord',
            },
            {
              label: 'Сайт',
              href: 'https://boticord.top',
            },
            {
              label: 'Поддержка',
              href: 'https://boticord.top/discord',
            }
          ],
        },
      ],
      copyright: `Все права защищены.. © ${new Date().getFullYear()} Boticord`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          remarkPlugins: [math, require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
              'https://github.com/boticord/docs-v3/blob/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    // [
    //   'redocusaurus',
    //   {
    //     debug: Boolean(process.env.DEBUG || process.env.CI),
    //     specs: [
    //       {
    //         spec: 'https://api.revolt.chat/openapi.json',
    //         route: '/api/',
    //       }
    //     ],
    //     theme: {
    //       primaryColor: '#1890ff',
    //       redocOptions: { hideDownloadButton: false },
    //     },
    //   },
    // ]
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["en", "ru"],
        docsRouteBasePath: "/",
      })
    ]
  ],
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },
};
