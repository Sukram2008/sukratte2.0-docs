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
        slug: '/category/Discord/Befehlee',
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
            slug: '/category/Discord/Befehlee/admin-tools',
          },
          items: [
            {
              type: 'category',
              label: 'Admin-Befehle',
              link: {
                type: 'generated-index',
                title: 'Spezifische Admin-Befehle',
                description: 'Befehle zur Serververwaltung.',
                slug: '/category/Discord/Befehlee/admin-tools/admin-befehle',
              },
              items: [
                'Discord/Befehlee/Admin Tools/Admin-Befehle/AdminMovechannel',
                'Discord/Befehlee/Admin Tools/Admin-Befehle/AdminMoverole',
                'Discord/Befehlee/Admin Tools/Admin-Befehle/AdminSetcategory',
              ],
            },
            {
              type: 'category',
              label: 'Rollen-Befehle',
              link: {
                type: 'generated-index',
                title: 'Befehle zur Rollenverwaltung',
                description: 'Befehle zum Vergeben und Entfernen von Rollen.',
                slug: '/category/Discord/Befehlee/admin-tools/rollen-befehle',
              },
              items: [
                'Discord/Befehlee/Admin Tools/Rollen-Befehle/RolesGive',
                'Discord/Befehlee/Admin Tools/Rollen-Befehle/RolesRemove',
                'Discord/Befehlee/Admin Tools/Rollen-Befehle/RolesStatus',
              ],
            },
            {
              type: 'category',
              label: 'Extra-Befehle',
              link: {
                type: 'generated-index',
                title: 'Extra Befehle Übersicht',
                description: 'Befehle zum Stehlen von Emojis und Stickern.',
                slug: '/category/Discord/Befehlee/admin-tools/extra-befehle',
              },
              items: [
                'Discord/Befehlee/Admin Tools/Emote-Befehle/Stealemote',
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
            slug: '/category/Discord/Befehlee/afk-system',
          },
          items: [
            'Discord/Befehlee/AFK-System/AFK-Befehle/AFKEnd',
            'Discord/Befehlee/AFK-System/AFK-Befehle/AFKStart',
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
            slug: '/category/Discord/Befehlee/bewerbungen',
          },
          items: [
            'Discord/Befehlee/Bewerbungen/Apply',
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
            slug: '/category/Discord/Befehlee/geburtstags-kalender',
          },
          items: [
            'Discord/Befehlee/Geburtstags-Kalender/BirthdayDelete',
            'Discord/Befehlee/Geburtstags-Kalender/BirthdaySet',
            'Discord/Befehlee/Geburtstags-Kalender/BirthdayStatus',
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
            slug: '/category/Discord/Befehlee/color-me',
          },
          items: [
            'Discord/Befehlee/Color me/Color-meManage',
            'Discord/Befehlee/Color me/Color-meRemove',
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
            slug: '/category/Discord/Befehlee/minispiele',
          },
          items: [
            'Discord/Befehlee/Minispiele/ConnectFour',
            'Discord/Befehlee/Minispiele/Duel',
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
            slug: '/category/Discord/Befehlee/economy',
          },
          items: [
            {
              type: 'category',
              label: 'Economy-Befehle',
              link: {
                type: 'generated-index',
                title: 'Economy-Befehle',
                description: 'Hier findet ihr Befehle zum Coins verdienen, ausgeben usw.!',
                slug: '/category/Discord/Befehlee/economy-system/economy-befehle',
              },
              items: [
                'Discord/Befehlee/Economy System/Economy-Befehle/EconomyAdd',
                'Discord/Befehlee/Economy System/Economy-Befehle/EconomyBalance',
                'Discord/Befehlee/Economy System/Economy-Befehle/EconomyCrime',
                'Discord/Befehlee/Economy System/Economy-Befehle/EconomyDaily',
                'Discord/Befehlee/Economy System/Economy-Befehle/EconomyDeposit',
                'Discord/Befehlee/Economy System/Economy-Befehle/EconomyDestroy',
                'Discord/Befehlee/Economy System/Economy-Befehle/EconomyDropDisable',
                'Discord/Befehlee/Economy System/Economy-Befehle/EconomyDropEnable',
                'Discord/Befehlee/Economy System/Economy-Befehle/EconomyRemove',
                'Discord/Befehlee/Economy System/Economy-Befehle/EconomyRob',
                'Discord/Befehlee/Economy System/Economy-Befehle/EconomySet',
                'Discord/Befehlee/Economy System/Economy-Befehle/EconomyWeekly',
                'Discord/Befehlee/Economy System/Economy-Befehle/EconomyWithdraw',
                'Discord/Befehlee/Economy System/Economy-Befehle/EconomyWork',
              ],
            },
            {
              type: 'category',
              label: 'Shop-Befehle',
              link: {
                type: 'generated-index',
                title: 'Shop-Befehle',
                description: 'Hier geht es nur um den Economy Shop.',
                slug: '/category/Discord/Befehlee/economy-system/shop-befehle',
              },
              items: [
                // HIER SIND DIE PFADE KORRIGIERT WORDEN!
                'Discord/Befehlee/Economy System/Shop-Befehle/ShopAdd',
                'Discord/Befehlee/Economy System/Shop-Befehle/ShopBuy',
                'Discord/Befehlee/Economy System/Shop-Befehle/ShopDelete',
                'Discord/Befehlee/Economy System/Shop-Befehle/ShopList',
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
            slug: '/category/Discord/Befehlee/gewinnspiele',
          },
          items: [
            'Discord/Befehlee/Gewinnspiele/GMessages',
            'Discord/Befehlee/Gewinnspiele/GmanageStart',
            'Discord/Befehlee/Gewinnspiele/GmanageEnd',
            'Discord/Befehlee/Gewinnspiele/GmanageReroll',
          ],
        },
        {
          type: 'category',
          label: 'Errate die Nummer',
          link: {
            type: 'generated-index',
            title: 'Errate die Nummer',
            description: 'Infos zum Errate die Nummer Spiel.',
            slug: '/category/Discord/Befehlee/errate die nummer',
          },
          items: [
            'Discord/Befehlee/Errate die Nummer/GuessCreate',
            'Discord/Befehlee/Errate die Nummer/GuessEnd',
            'Discord/Befehlee/Errate die Nummer/GuessStatus',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;