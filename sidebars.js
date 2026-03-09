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
      collapsed: false,
      items: [
        // 1. Admin Tools
        {
          type: 'category',
          label: '📦 Admin-Tools',
          link: { type: 'generated-index', slug: '/category/discord/befehle/admin-tools' },
          items: [
            {
              type: 'category',
              label: 'Admin-Befehle',
              items: [
                'discord/befehle/Admin Tools/Admin-Befehle/AdminMovechannel',
                'discord/befehle/Admin Tools/Admin-Befehle/AdminMoverole',
                'discord/befehle/Admin Tools/Admin-Befehle/AdminSetcategory',
              ],
            },
            {
              type: 'category',
              label: 'Rollen-Befehle',
              items: [
                'discord/befehle/Admin Tools/Rollen-Befehle/RolesGive',
                'discord/befehle/Admin Tools/Rollen-Befehle/RolesRemove',
                'discord/befehle/Admin Tools/Rollen-Befehle/RolesStatus',
              ],
            },
            {
              type: 'category',
              label: 'Emote-Befehle',
              items: ['discord/befehle/Admin Tools/Emote-Befehle/Stealemote'],
            },
          ],
        },
        // 2. AFK System
        {
          type: 'category',
          label: '📦 AFK-System',
          link: { type: 'generated-index', slug: '/category/discord/befehle/afk-system' },
          items: [
            'discord/befehle/AFK-System/AFK-Befehle/AFKEnd',
            'discord/befehle/AFK-System/AFK-Befehle/AFKStart',
          ],
        },
        // 3. Anonymer Chat
        {
          type: 'category',
          label: '📦 Anonymer Chat',
          link: { type: 'generated-index', slug: '/category/discord/befehle/anonymer-chat' },
          items: [
            'discord/befehle/Anonymer Chat/Nutzer-Befehle/AnonymousMessage',
            'discord/befehle/Anonymer Chat/Moderator-Befehle/ModerateAnonymousChannelEnable',
            'discord/befehle/Anonymer Chat/Moderator-Befehle/ModerateAnonymousChannelDisable',
            'discord/befehle/Anonymer Chat/Moderator-Befehle/ModerateAnonymousChannelDeleteMessage',
          ],
        },
        // 4. Bewerbungen
        {
          type: 'category',
          label: '📦 Bewerbungen',
          items: ['discord/befehle/Bewerbungen/Apply'],
        },
        // 5. Betterstatus & Geburtstage
        {
          type: 'category',
          label: '📦 Status & Kalender',
          items: [
            'discord/befehle/Betterstatus/status',
            'discord/befehle/Geburtstags-Kalender/BirthdaySet',
            'discord/befehle/Geburtstags-Kalender/BirthdayStatus',
            'discord/befehle/Geburtstags-Kalender/BirthdayDelete',
          ],
        },
        // 6. Color me & Minispiele
        {
          type: 'category',
          label: '📦 Personalisierung & Spiele',
          items: [
            'discord/befehle/Color me/Color-meManage',
            'discord/befehle/Color me/Color-meRemove',
            'discord/befehle/Minispiele/ConnectFour',
            'discord/befehle/Minispiele/Duel',
          ],
        },
        // 7. Economy System
        {
          type: 'category',
          label: '📦 Economy/Wirtschaft',
          link: { type: 'generated-index', slug: '/category/discord/befehle/economy' },
          items: [
            {
              type: 'category',
              label: 'Wirtschafts-Befehle',
              items: [
                'discord/befehle/Economy System/Economy-Befehle/EconomyAdd',
                'discord/befehle/Economy System/Economy-Befehle/EconomyBalance',
                'discord/befehle/Economy System/Economy-Befehle/EconomyWork',
              ],
            },
            {
              type: 'category',
              label: 'Shop-System',
              items: [
                'discord/befehle/Economy System/Shop-Befehle/ShopList',
                'discord/befehle/Economy System/Shop-Befehle/ShopBuy',
              ],
            },
          ],
        },
        // 8. Fun-Befehle
        {
          type: 'category',
          label: '📦 Fun-Befehle',
          items: [
            'discord/befehle/Fun-Befehle/Interaktions-Befehle/FunHug',
            'discord/befehle/Fun-Befehle/Interaktions-Befehle/FunKiss',
            'discord/befehle/Fun-Befehle/Random-Befehle/Random8Ball',
            'discord/befehle/Fun-Befehle/Random-Befehle/RandomCoinflip',
          ],
        },
        // 9. Errate die Nummer & Gewinnspiele
        {
          type: 'category',
          label: '📦 Events & Games',
          items: [
            'discord/befehle/Errate die Nummer/GuessCreate',
            'discord/befehle/Errate die Nummer/GuessStatus',
            'discord/befehle/Gewinnspiele/GmanageStart',
            'discord/befehle/Gewinnspiele/GmanageEnd',
          ],
        },
        // 10. Build-In Commands
        {
          type: 'category',
          label: '⚙️ Build-In-Commands',
          items: [
            'discord/befehle/Build-In/help',
            'discord/befehle/Build-In/reload',
          ],
        },
      ],
    },
  ],
};

export default sidebars;