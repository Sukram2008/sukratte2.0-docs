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
        description: 'Hier findest du eine Übersicht über alle Discord Befehle.',
        slug: '/category/discord/befehle', 
      },
      collapsed: false, // Die Hauptkategorie bleibt offen
      items: [
        {
          type: 'category',
          label: 'Admin Tools',
          collapsed: true, // Unterkategorien standardmäßig zu
          link: {
            type: 'generated-index',
            slug: '/category/discord/befehle/admin-tools',
          },
          items: [
            {
              type: 'category',
              label: 'Admin-Befehle',
              collapsed: true,
              link: { type: 'generated-index', slug: '/category/discord/befehle/admin-tools/admin-befehle' },
              items: [
                'discord/befehle/Admin Tools/Admin-Befehle/AdminMovechannel',
                'discord/befehle/Admin Tools/Admin-Befehle/AdminMoverole',
                'discord/befehle/Admin Tools/Admin-Befehle/AdminSetcategory',
              ],
            },
            {
              type: 'category',
              label: 'Rollen-Befehle',
              collapsed: true,
              link: { type: 'generated-index', slug: '/category/discord/befehle/admin-tools/rollen-befehle' },
              items: [
                'discord/befehle/Admin Tools/Rollen-Befehle/RolesGive',
                'discord/befehle/Admin Tools/Rollen-Befehle/RolesRemove',
                'discord/befehle/Admin Tools/Rollen-Befehle/RolesStatus',
              ],
            },
            {
              type: 'category',
              label: 'Extra-Befehle',
              collapsed: true,
              link: { type: 'generated-index', slug: '/category/discord/befehle/admin-tools/extra-befehle' },
              items: [
                'discord/befehle/Admin Tools/Emote-Befehle/Stealemote',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'AFK System',
          collapsed: true,
          link: { type: 'generated-index', slug: '/category/discord/befehle/afk-system' },
          items: [
            'discord/befehle/AFK-System/AFK-Befehle/AFKEnd',
            'discord/befehle/AFK-System/AFK-Befehle/AFKStart',
          ],
        },
        {
          type: 'category',
          label: 'Anonymer Chat',
          collapsed: true,
          link: { type: 'generated-index', slug: '/category/discord/befehle/anonymer-chat' },
          items: [
            {
              type: 'category',
              label: 'Moderator-Befehle',
              collapsed: true,
              link: { type: 'generated-index', slug: '/category/discord/befehle/anonymer-chat/moderator-befehle' },
              items: [
                'discord/befehle/Anonymer Chat/Moderator-Befehle/ModerateAnonymousChannelDeleteMessage',
                'discord/befehle/Anonymer Chat/Moderator-Befehle/ModerateAnonymousChannelDisable',
                'discord/befehle/Anonymer Chat/Moderator-Befehle/ModerateAnonymousChannelEnable',
              ],
            },
            {
              type: 'category',
              label: 'Nutzer-Befehle',
              collapsed: true,
              link: { type: 'generated-index', slug: '/category/discord/befehle/anonymer-chat/nutzer-befehle' },
              items: [
                'discord/befehle/Anonymer Chat/Nutzer-Befehle/AnonymousMessage',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Bewerbungen',
          collapsed: true,
          link: { type: 'generated-index', slug: '/category/discord/befehle/bewerbungen' },
          items: ['discord/befehle/Bewerbungen/Apply'],
        },
        {
          type: 'category',
          label: 'BetterStatus',
          collapsed: true,
          link: { type: 'generated-index', slug: '/category/discord/befehle/betterstatus' },
          items: ['discord/befehle/Betterstatus/Status'],
        },
        {
          type: 'category',
          label: 'Color me',
          collapsed: true,
          link: { type: 'generated-index', slug: '/category/discord/befehle/color-me' },
          items: [
            'discord/befehle/Color me/Color-meManage',
            'discord/befehle/Color me/Color-meRemove',
          ],
        },
        {
          type: 'category',
          label: 'Economy System',
          collapsed: true,
          link: { type: 'generated-index', slug: '/category/discord/befehle/economy-system' },
          items: [
            {
              type: 'category',
              label: 'Economy-Befehle',
              collapsed: true,
              link: { type: 'generated-index', slug: '/category/discord/befehle/economy-system/economy-befehle' },
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
              collapsed: true,
              link: { type: 'generated-index', slug: '/category/discord/befehle/economy-system/shop-befehle' },
              items: [
                'discord/befehle/Economy System/Shop-Befehle/ShopAdd',
                'discord/befehle/Economy System/Shop-Befehle/ShopBuy',
                'discord/befehle/Economy System/Shop-Befehle/ShopDelete',
                'discord/befehle/Economy System/Shop-Befehle/ShopList',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Geburtstags-Kalender',
          collapsed: true,
          link: { type: 'generated-index', slug: '/category/discord/befehle/geburtstags-kalender' },
          items: [
            'discord/befehle/Geburtstags-Kalender/BirthdaySet',
            'discord/befehle/Geburtstags-Kalender/BirthdayDelete',
            'discord/befehle/Geburtstags-Kalender/BirthdayStatus',
          ],
        },
        {
          type: 'category',
          label: 'Minispiele',
          collapsed: true,
          link: { type: 'generated-index', slug: '/category/discord/befehle/minispiele' },
          items: [
            'discord/befehle/Minispiele/ConnectFour',
            'discord/befehle/Minispiele/Duel',
          ],
        },
      ],
    },
  ],
};

export default sidebars;