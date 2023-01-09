// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'XCP-ng Documentation',
  tagline: 'Documentation for XCP-ng',
  url: 'https://xcp-ng.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/xcpcrop128.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xcp-ng', // Usually your GitHub org/user name.
  projectName: 'xcp-ng-org', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'XCP-ng Documentation',
        logo: {
          alt: 'XCP-ng logo',
          src: 'img/xcpcrop128.png',
        },
        items: [
          {href: 'https://xcp-ng.org', label: 'Home', position: 'right'},
          {href: 'https://xcp-ng.org/blog', label: 'Blog', position: 'right'},
          {href: 'https://vates.tech', label: 'Pro Support', position: 'right'},
          {
            href: 'https://github.com/xcp-ng',
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
                label: 'Install',
                to: '/docs/intro',
              },
              {
                label: 'Manage',
                to: '/docs/intro',
              },
              {
                label: 'Backup',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'https://xcp-ng.org/forum',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/Hr98F6wRvx',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/xcpng',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://xcp-ng.org/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} XCP-ng Project, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      themes: ['@docusaurus/theme-search-algolia'],
      algolia: {
        // The application ID provided by Algolia
        appId: 'I9J2TZ0RWH',
  
        // Public API key: it is safe to commit it
        apiKey: '686ff13bb1d4900646d5ec519a8dc051',
  
        indexName: 'xcp-ng',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'xcp-ng\\.org|xcp-ng\\.org',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
    }),
};

module.exports = config;
