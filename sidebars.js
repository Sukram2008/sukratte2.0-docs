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
        // WICHTIG: Hier KEIN "/docs" reinschreiben! 
        // Docusaurus macht automatisch "/docs/category/discord/befehle" daraus.
        slug: '/category/discord/befehle', 
      },
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Admin Tools',
          link: {
            type: 'generated-index',
            slug: '/category/discord/befehle/admin-tools',
          },
          items: [
            {
              type: 'category',
              label: 'Admin-Befehle',
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
          link: { type: 'generated-index', slug: '/category/discord/befehle/afk-system' },
          items: [
            'discord/befehle/AFK-System/AFK-Befehle/AFKEnd',
            'discord/befehle/AFK-System/AFK-Befehle/AFKStart',
          ],
        },
        {
          type: 'category',
          label: 'Anonymer Chat',
          link: { type: 'generated-index', slug: '/category/discord/befehle/anonymer-chat' },
          items: [
            {
              type: 'category',
              label: 'Moderator-Befehle',
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
          link: { type: 'generated-index', slug: '/category/discord/befehle/bewerbungen' },
          items: ['discord/befehle/Bewerbungen/Apply'],
        },
        {
          type: 'category',
          label: 'BetterStatus',
          link: { type: 'generated-index', slug: '/category/discord/befehle/betterstatus' },
          items: ['discord/befehle/Betterstatus/Status'],
        },
        {
          type: 'category',
          label: 'Color me',
          link: { type: 'generated-index', slug: '/category/discord/befehle/color-me' },
          items: [
            'discord/befehle/Color me/Color-meManage',
            'discord/befehle/Color me/Color-meRemove',
          ],
        },
        {
          type: 'category',
          label: 'Geburtstags-Kalender',
          link: { type: 'generated-index', slug: '/category/discord/befehle/geburtstags-kalender' },
          items: [
            'discord/befehle/Geburtstags-Kalender/BirthdaySet',
            'discord/befehle/Geburtstags-Kalender/BirthdayDelete',
            'discord/befehle/Geburtstags-Kalender/BirthdayStatus',
          ],
        },
      ],
    },
  ],
};

export default sidebars;