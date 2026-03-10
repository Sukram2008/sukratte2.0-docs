// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SukRatte2.0 - Hilfe',
  tagline: 'Hier findet ihr Hilfen für unseren Discord!',
  favicon: 'img/favicon.ico',

  // Wichtig für Vercel: Die Haupt-URL deiner Seite
  url: 'https://sukratte2-0-docs.vercel.app', 
  
  // Wichtig: Auf '/' setzen, damit CSS und Bilder gefunden werden
  baseUrl: '/', 

  organizationName: 'Sukram2008', 
  projectName: 'sukratte2.0-docs',

  // Fehler bei Links nur als Warnung anzeigen, damit der Build nicht abbricht
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com',
        },
        blog: {
          showReadingTime: true,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    colorMode: {
      defaultMode: 'dark', // 'light' oder 'dark'
      disableSwitch: false, // Erlaubt dem Nutzer weiterhin das Wechseln
      respectPrefersColorScheme: true, // Nutzt die OS-Einstellung des Nutzers zuerst
    },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'SukRatte2.0 - Hilfe',
        logo: {
          alt: 'SukRatte2.0 Logo',
          src: 'img/logo.svg', // Prüfe, ob diese Datei im Ordner static/img/ existiert!
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Discord Befehle',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://discord.gg/uUj4GS279Y',
            label: 'Discord Server',
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
                label: 'Discord Befehle',
                // Pfad korrigiert auf Kleinschreibung (passend zur sidebar.js)
                to: 'docs/category/discord/befehle', 
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Sukram2.0 Homepage',
                href: 'https://echtersukram20.wixsite.com/homepage',
              },
              {
                label: 'Discord Server',
                href: 'https://discord.gg/uUj4GS279Y',
              },
              {
                label: 'Sukram2.0 Übersicht',
                href: 'https://linktr.ee/sukram2.0',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://linktr.ee" target="_blank">SukRatte2.0</a> - Built with Docusaurus 🦕`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;