/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Das ist deine Haupt-Sidebar
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Discord Befehle',
      link: {
        type: 'generated-index',
        title: 'Alle Discord Befehle',
        description: 'Hier findest du eine Übersicht über alle Discord Befehle und deren Unterkategorien.',
        // WICHTIG: KEIN "/docs" am Anfang! Docusaurus fügt das automatisch hinzu.
        slug: '/category/discord/befehle', 
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
            slug: '/category/discord/befehle/admin-tools',
          },
          items: [
            {
              type: 'category',
              label: 'Admin-Befehle',
              link: {
                type: 'generated-index',
                slug: '/category/discord/befehle/admin-tools/admin-befehle',
              },
              items: [
                'discord/befehle/Admin Tools/Admin-Befehle/AdminMovechannel',
                'discord/befehle/Admin Tools/Admin-Befehle/AdminMoverole',
                'discord/befehle/Admin Tools/Admin-Befehle/AdminSetcategory',
              ],
            },
            {
              type: 'category',
              label: 'Rollen-Befehle',
              link: {
                type: 'generated-index',
                slug: '/category/discord/befehle/admin-tools/rollen-befehle',
              },
              items: [
                'discord/befehle/Admin Tools/Rollen-Befehle/RolesGive',
                'discord/befehle/Admin Tools/Rollen-Befehle/RolesRemove',
                'discord/befehle/Admin Tools/Rollen-Befehle/RolesStatus',
              ],
            },
            {
              type: 'category',
              label: 'Extra-Befehle',
              link: {
                type: 'generated-index',
                slug: '/category/discord/befehle/admin-tools/extra-befehle',
              },
              items: [
                'discord/befehle/Admin Tools/Emote-Befehle/Stealemote',
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
            slug: '/category/discord/befehle/afk-system',
          },
          items: [
            'discord/befehle/AFK-System/AFK-Befehle/AFKEnd',
            'discord/befehle/AFK-System/AFK-Befehle/AFKStart',
          ],
        },
        // --- KATEGORIE: Bewerbungen ---
        {
          type: 'category',
          label: 'Bewerbungen',
          link: {
            type: 'generated-index',
            slug: '/category/discord/befehle/bewerbungen',
          },
          items: [
            'discord/befehle/Bewerbungen/Apply',
          ],
        },
        // --- KATEGORIE: Geburtstags-Kalender ---
        {
          type: 'category',
          label: 'Geburtstags-Kalender',
          link: {
            type: 'generated-index',
            slug: '/category/discord/befehle/geburtstags-kalender',
          },
          items: [
            'discord/befehle/Geburtstags-Kalender/BirthdayDelete',
            'discord/befehle/Geburtstags-Kalender/BirthdaySet',
            'discord/befehle/Geburtstags-Kalender/BirthdayStatus',
          ],
        },
        // --- KATEGORIE: Color me ---
        {
          type: 'category',
          label: 'Color me',
          link: {
            type: 'generated-index',
            slug: '/category/discord/befehle/color-me',
          },
          items: [
            'discord/befehle/Color me/Color-meManage',
            'discord/befehle/Color me/Color-meRemove',
          ],
        },
        // --- KATEGORIE: Minispiele ---
        {
          type: 'category',
          label: 'Minispiele',
          link: {
            type: 'generated-index',
            slug: '/category/discord/befehle/minispiele',
          },
          items: [
            'discord/befehle/Minispiele/ConnectFour',
            'discord/befehle/Minispiele/Duel',
          ],
        },
        // --- KATEGORIE: Economy ---
        {
          type: 'category',
          label: 'Economy/Wirtschaft',
          link: {
            type: 'generated-index',
            slug: '/category/discord/befehle/economy',
          },
          items: [
            {
              type: 'category',
              label: 'Economy-Befehle',
              link: {
                type: 'generated-index',
                slug: '/category/discord/befehle/economy-system/economy-befehle',
              },
              items: [
                'discord/befehle/Economy System/Economy-Befehle/EconomyAdd',
                'discord/befehle/Economy System/Economy-Befehle/EconomyBalance',
                'discord/befehle/Economy System/Economy-Befehle/EconomyCrime',
                'discord/befehle/Economy System/Economy-Befehle/EconomyDaily',
                'discord/befehle/Economy System/Economy-Befehle/EconomyDeposit',
                'discord/befehle/Economy System/Economy-Befehle/EconomyDestroy',
                'discord/befehle/Economy System/Economy-Befehle/EconomyDropDisable',
                'discord/befehle/Economy System/Economy-Befehle/EconomyDropEnable',
                'discord/befehle/Economy System/Economy-Befehle/EconomyRemove',
                'discord/befehle/Economy System/Economy-Befehle/EconomyRob',
                'discord/befehle/Economy System/Economy-Befehle/EconomySet',
                'discord/befehle/Economy System/Economy-Befehle/EconomyWeekly',
                'discord/befehle/Economy System/Economy-Befehle/EconomyWithdraw',
                'discord/befehle/Economy System/Economy-Befehle/EconomyWork',
              ],
            },
            {
              type: 'category',
              label: 'Shop-Befehle',
              link: {
                type: 'generated-index',
                slug: '/category/discord/befehle/economy-system/shop-befehle',
              },
              items: [
                'discord/befehle/Economy System/Shop-Befehle/ShopAdd',
                'discord/befehle/Economy System/Shop-Befehle/ShopBuy',
                'discord/befehle/Economy System/Shop-Befehle/ShopDelete',
                'discord/befehle/Economy System/Shop-Befehle/ShopList',
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;