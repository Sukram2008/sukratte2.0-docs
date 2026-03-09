/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation.
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Discord Befehle',
      link: {
        type: 'generated-index',
        title: 'Alle Discord Befehle',
        description: 'Hier findest du eine Übersicht über alle Discord Befehle und deren Unterkategorien.',
        slug: '/category/Discord/Befehle',
      },
      collapsed: false,
      items: [
        // --- KATEGORIE: Admin Tools ---
        {
          type: 'category',
          label: 'Admin Tools',
          link: {
            type: 'generated-index',
            title: 'Admin Tools Übersicht',
            description: 'Verwalte deinen Server mit diesen Admin Tools.',
            slug: '/category/Discord/Befehle/admin-tools',
          },
          items: [
            {
              type: 'category',
              label: 'Admin-Befehle',
              link: {
                type: 'generated-index',
                title: 'Spezifische Admin-Befehle',
                description: 'Befehle zur Serververwaltung.',
                slug: '/category/Discord/Befehle/admin-tools/admin-befehle',
              },
              items: [
                'Discord/Befehle/Admin Tools/Admin-Befehle/AdminMovechannel',
                'Discord/Befehle/Admin Tools/Admin-Befehle/AdminMoverole',
                'Discord/Befehle/Admin Tools/Admin-Befehle/AdminSetcategory',
              ],
            },
            {
              type: 'category',
              label: 'Rollen-Befehle',
              link: {
                type: 'generated-index',
                title: 'Befehle zur Rollenverwaltung',
                description: 'Befehle zum Vergeben und Entfernen von Rollen.',
                slug: '/category/Discord/Befehle/admin-tools/rollen-befehle',
              },
              items: [
                'Discord/Befehle/Admin Tools/Rollen-Befehle/RolesGive',
                'Discord/Befehle/Admin Tools/Rollen-Befehle/RolesRemove',
                'Discord/Befehle/Admin Tools/Rollen-Befehle/RolesStatus',
              ],
            },
            {
              type: 'category',
              label: 'Extra-Befehle',
              link: {
                type: 'generated-index',
                title: 'Extra Befehle Übersicht',
                description: 'Befehle zum Stehlen von Emojis und Stickern.',
                slug: '/category/Discord/Befehle/admin-tools/extra-befehle',
              },
              items: [
                'Discord/Befehle/Admin Tools/Emote-Befehle/Stealemote',
              ],
            },
          ],
        },
        // --- KATEGORIE: AFK System ---
        {
          type: 'category',
          label: 'AFK System',
          link: {
            type: 'generated-index',
            title: 'AFK System Übersicht',
            description: 'Dein AFK-Status ganz einfach!',
            slug: '/category/Discord/Befehle/afk-system',
          },
          items: [
            'Discord/Befehle/AFK-System/AFK-Befehle/AFKEnd',
            'Discord/Befehle/AFK-System/AFK-Befehle/AFKStart',
          ],
        },
        // --- KATEGORIE: Bewerbungen ---
        {
          type: 'category',
          label: 'Bewerbungen',
          link: {
            type: 'generated-index',
            title: 'Bewerbungs-System Übersicht',
            description: 'Damit kannst du dich bei uns bewerben.',
            slug: '/category/Discord/Befehle/bewerbungen',
          },
          items: [
            'Discord/Befehle/Bewerbungen/Apply',
          ],
        },
        // --- KATEGORIE: Geburtstags-Kalender ---
        {
          type: 'category',
          label: 'Geburtstags-Kalender',
          link: {
            type: 'generated-index',
            title: 'Geburtstags-Kalender',
            description: 'Geburtstags-Kalender damit man sich gratulieren kann. :)',
            slug: '/category/Discord/Befehle/geburtstags-kalender',
          },
          items: [
            'Discord/Befehle/Geburtstags-Kalender/BirthdayDelete',
            'Discord/Befehle/Geburtstags-Kalender/BirthdaySet',
            'Discord/Befehle/Geburtstags-Kalender/BirthdayStatus',
          ],
        },
        // --- KATEGORIE: Color me ---
        {
          type: 'category',
          label: 'Color me',
          link: {
            type: 'generated-index',
            title: 'Color me',
            description: 'Wie bekommt man eine eigene Rolle?',
            slug: '/category/Discord/Befehle/color-me',
          },
          items: [
            'Discord/Befehle/Color me/Color-meManage',
            'Discord/Befehle/Color me/Color-meRemove',
          ],
        },
        // --- KATEGORIE: Minispiele ---
        {
          type: 'category',
          label: 'Minispiele',
          link: {
            type: 'generated-index',
            title: 'Minispiele',
            description: 'Hier findest du alle Minispiele die es auf dem Server gibt.',
            slug: '/category/Discord/Befehle/minispiele',
          },
          items: [
            'Discord/Befehle/Minispiele/ConnectFour',
            'Discord/Befehle/Minispiele/Duel',
          ],
        },
        // --- KATEGORIE: Economy --- (Pfade an tatsächliche Ordnernamen angepasst: 'Economy System')
        {
          type: 'category',
          label: 'Economy/Wirtschaft',
          link: {
            type: 'generated-index',
            title: 'Economy/Wirtschaft Übersicht',
            description: 'Alle Befehle zum Wirtschaft bzw. Economy System.',
            slug: '/category/Discord/Befehle/economy',
          },
          items: [
            {
              type: 'category',
              label: 'Economy-Befehle',
              link: {
                type: 'generated-index',
                title: 'Economy-Befehle',
                description: 'Hier findet ihr Befehle zum Coins verdienen, ausgeben usw.!',
                slug: '/category/Discord/Befehle/economy-system/economy-befehle',
              },
              items: [
                'Discord/Befehle/Economy System/Economy-Befehle/EconomyAdd',
                'Discord/Befehle/Economy System/Economy-Befehle/EconomyBalance',
                'Discord/Befehle/Economy System/Economy-Befehle/EconomyCrime',
                'Discord/Befehle/Economy System/Economy-Befehle/EconomyDaily',
                'Discord/Befehle/Economy System/Economy-Befehle/EconomyDeposit',
                'Discord/Befehle/Economy System/Economy-Befehle/EconomyDestroy',
                'Discord/Befehle/Economy System/Economy-Befehle/EconomyDropDisable',
                'Discord/Befehle/Economy System/Economy-Befehle/EconomyDropEnable',
                'Discord/Befehle/Economy System/Economy-Befehle/EconomyRemove',
                'Discord/Befehle/Economy System/Economy-Befehle/EconomyRob',
                'Discord/Befehle/Economy System/Economy-Befehle/EconomySet',
                'Discord/Befehle/Economy System/Economy-Befehle/EconomyWeekly',
                'Discord/Befehle/Economy System/Economy-Befehle/EconomyWithdraw',
                'Discord/Befehle/Economy System/Economy-Befehle/EconomyWork',
              ],
            },
            {
              type: 'category',
              label: 'Shop-Befehle',
              link: {
                type: 'generated-index',
                title: 'Shop-Befehle',
                description: 'Hier geht es nur um den Economy Shop.',
                slug: '/category/Discord/Befehle/economy-system/shop-befehle',
              },
              items: [
                // HIER SIND DIE PFADE KORRIGIERT WORDEN!
                'Discord/Befehle/Economy System/Shop-Befehle/ShopAdd',
                'Discord/Befehle/Economy System/Shop-Befehle/ShopBuy',
                'Discord/Befehle/Economy System/Shop-Befehle/ShopDelete',
                'Discord/Befehle/Economy System/Shop-Befehle/ShopList',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Gewinnspiel',
          link: {
            type: 'generated-index',
            title: 'Gewinnspiel',
            description: 'Hier die Infos zu Gewinnspiel-Befehlen.',
            slug: '/category/Discord/Befehle/gewinnspiele',
          },
          items: [
            'Discord/Befehle/Gewinnspiele/GMessages',
            'Discord/Befehle/Gewinnspiele/GmanageStart',
            'Discord/Befehle/Gewinnspiele/GmanageEnd',
            'Discord/Befehle/Gewinnspiele/GmanageReroll',
          ],
        },
        {
          type: 'category',
          label: 'Errate die Nummer',
          link: {
            type: 'generated-index',
            title: 'Errate die Nummer',
            description: 'Infos zum Errate die Nummer Spiel.',
            slug: '/category/Discord/Befehle/errate die nummer',
          },
          items: [
            'Discord/Befehle/Errate die Nummer/GuessCreate',
            'Discord/Befehle/Errate die Nummer/GuessEnd',
            'Discord/Befehle/Errate die Nummer/GuessStatus',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;