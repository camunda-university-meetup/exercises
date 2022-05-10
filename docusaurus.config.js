/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Camunda Exercises',
  tagline: 'Camunda Exercises',
  url: 'https://camunda-university-meetup.github.io',
  baseUrl: '/exercises/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'camunda-university-meetup', // Usually your GitHub org/user name.
  projectName: 'exercises', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Camunda Exercises',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'left',
        //   label: 'Docs',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/camunda-university-meetup/exercises',
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
              label: 'Instructions',
              to: 'camunda-7/instructions/deploying-diagrams',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Camunda Forum',
              href: 'https://forum.camunda.org/',
            },
            {
              label: 'Camunda University Meetup',
              href: 'https://www.meetup.com/de-DE/camunda-university-group/',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/camunda-community-hub',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FlowSquad GmbH`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
