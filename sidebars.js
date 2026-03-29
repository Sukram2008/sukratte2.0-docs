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
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Admin-Tools',
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
                'discord/befehle/Admin-Tools/Admin-Befehle/AdminMovechannel',
                'discord/befehle/Admin-Tools/Admin-Befehle/AdminMoverole',
                'discord/befehle/Admin-Tools/Admin-Befehle/AdminSetcategory',
              ],
            },
            {
              type: 'category',
              label: 'Rollen-Befehle',
              link: { type: 'generated-index', slug: '/category/discord/befehle/admin-tools/rollen-befehle' },
              items: [
                'discord/befehle/Admin-Tools/Rollen-Befehle/RolesGive',
                'discord/befehle/Admin-Tools/Rollen-Befehle/RolesRemove',
                'discord/befehle/Admin-Tools/Rollen-Befehle/RolesStatus',
              ],
            },
            {
              type: 'category',
              label: 'Extra-Befehle',
              link: { type: 'generated-index', slug: '/category/discord/befehle/admin-tools/extra-befehle' },
              items: [
                'discord/befehle/Admin-Tools/Extra-Befehle/Stealemote',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'AFK System',
          link: { type: 'generated-index', slug: '/category/discord/befehle/afk-system' },
          items: [
            'discord/befehle/AFK-System/AFK-Befehle/AFKStart',
            'discord/befehle/AFK-System/AFK-Befehle/AFKEnd',
          ],
        },
        {
          type: 'category',
          label: 'Anonymer Chat',
          link: { type: 'generated-index', slug: '/category/discord/befehle/anonymer-chat' },
          items: [
            {
              type: 'category',
              label: 'Nutzer-Befehle',
              link: { type: 'generated-index', slug: '/category/discord/befehle/anonymer-chat/nutzer-befehle' },
              items: [
                'discord/befehle/Anonymer-Chat/Nutzer-Befehle/AnonymousMessage',
              ],
            },
            {
              type: 'category',
              label: 'Moderator-Befehle',
              link: { type: 'generated-index', slug: '/category/discord/befehle/anonymer-chat/moderator-befehle' },
              items: [
                'discord/befehle/Anonymer-Chat/Moderator-Befehle/ModerateAnonymousChannelDeleteMessage',
                'discord/befehle/Anonymer-Chat/Moderator-Befehle/ModerateAnonymousChannelDisable',
                'discord/befehle/Anonymer-Chat/Moderator-Befehle/ModerateAnonymousChannelEnable',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'BetterStatus',
          link: { type: 'generated-index', slug: '/category/discord/befehle/betterstatus' },
          items: ['discord/befehle/Betterstatus/Status'],
        },
        {
          type: 'category',
          label: 'Bewerbungen',
          link: { type: 'generated-index', slug: '/category/discord/befehle/bewerbungen' },
          items: ['discord/befehle/Bewerbungen/Apply'],
        },
        {
          type: 'category',
          label: 'Color me',
          link: { type: 'generated-index', slug: '/category/discord/befehle/color-me' },
          items: [
            'discord/befehle/Color-me/Color-meManage',
            'discord/befehle/Color-me/Color-meRemove',
          ],
        },
        {
          type: 'category',
          label: 'Einladungsverfolgung',
          link: { type: 'generated-index', slug: '/category/discord/befehle/einladungsverfolgung' },
          items: [
            'discord/befehle/Einladungsverfolgung/TraceInvites'
          ],
        },
        {
          type: 'category',
          label: 'Errate die Nummer',
          link: { type: 'generated-index', slug: '/category/discord/befehle/errate-die-nummer' },
          items: [
            'discord/befehle/Errate-die-Nummer/GuessStatus',
            'discord/befehle/Errate-die-Nummer/GuessCreate',
            'discord/befehle/Errate-die-Nummer/GuessEnd',
          ],
        },
        {
          type: 'category',
          label: 'Erinnerungen',
          link: { type: 'generated-index', slug: '/category/discord/befehle/Erinnerungen' },
          items: ['discord/befehle/Erinnerungen/RemindMe'],
        },
        {
          type: 'category',
          label: 'Fun-Befehle',
          link: { type: 'generated-index', slug: '/category/discord/befehle/fun-befehle' },
          items: [
            {
              type: 'category',
              label: 'Interaktions-Befehle',
              link: { type: 'generated-index', slug: '/category/discord/befehle/fun-befehle/interaktions-befehle' },
              items: [
                'discord/befehle/Fun-Befehle/Interaktions-Befehle/FunHug',
                'discord/befehle/Fun-Befehle/Interaktions-Befehle/FunKiss',
                'discord/befehle/Fun-Befehle/Interaktions-Befehle/FunPat',
                'discord/befehle/Fun-Befehle/Interaktions-Befehle/FunSlap',
              ],
            },
            {
              type: 'category',
              label: 'Random-Befehle',
              link: { type: 'generated-index', slug: '/category/discord/befehle/fun-befehle/random-befehle' },
              items: [
                'discord/befehle/Fun-Befehle/Random-Befehle/Random8Ball',
                'discord/befehle/Fun-Befehle/Random-Befehle/RandomCoinflip',
                'discord/befehle/Fun-Befehle/Random-Befehle/RandomDice',
                'discord/befehle/Fun-Befehle/Random-Befehle/RandomIkea-name',
                'discord/befehle/Fun-Befehle/Random-Befehle/RandomNumber',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Geburtstags-Kalender',
          link: {
            type: 'generated-index',
            slug: '/category/discord/befehle/geburtstags-kalender',
          },
          items: [
            {
              type: 'category',
              label: 'Nutzer-Befehle',
              link: { type: 'generated-index', slug: '/category/discord/befehle/geburtstags-kalender/nutzer-befehle' },
              items: [
                'discord/befehle/Geburtstags-Kalender/Nutzer-Befehle/BirthdayStatus',
                'discord/befehle/Geburtstags-Kalender/Nutzer-Befehle/BirthdaySet',
                'discord/befehle/Geburtstags-Kalender/Nutzer-Befehle/BirthdayDelete',
              ],
            },
            {
              type: 'category',
              label: 'Admin-Befehle',
              link: { type: 'generated-index', slug: '/category/discord/befehle/geburtstags-kalender/admin-befehle' },
              items: [
                'discord/befehle/Geburtstags-Kalender/Admin-Befehle/ManageBirthdaySet',
                'discord/befehle/Geburtstags-Kalender/Admin-Befehle/ManageBirthdayRemove',
                'discord/befehle/Geburtstags-Kalender/Admin-Befehle/ManageBirthdayLock',
                'discord/befehle/Geburtstags-Kalender/Admin-Befehle/ManageBirthdayUnlock',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Gewinnspiele',
          link: {
            type: 'generated-index',
            slug: '/category/discord/befehle/gewinnspiele',
          },
          items: [
            {
              type: 'category',
              label: 'Nutzer-Befehle',
              link: { type: 'generated-index', slug: '/category/discord/befehle/gewinnspiele/nutzer-befehle' },
              items: [
                'discord/befehle/Gewinnspiele/Nutzer-Befehle/GMessages',
              ],
            },
            {
              type: 'category',
              label: 'Team-Befehle',
              link: { type: 'generated-index', slug: '/category/discord/befehle/gewinnspiele/team-befehle' },
              items: [
                'discord/befehle/Gewinnspiele/Team-Befehle/GmanageStart',
                'discord/befehle/Gewinnspiele/Team-Befehle/GmanageEnd',
                'discord/befehle/Gewinnspiele/Team-Befehle/GmanageReroll',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Info-Befehle',
          link: {
            type: 'generated-index',
            slug: '/category/discord/befehle/info-befehle',
          },
          items: [
            'discord/befehle/Info-Befehle/InfoChannel',
            'discord/befehle/Info-Befehle/InfoRole',
            'discord/befehle/Info-Befehle/InfoServer',
            'discord/befehle/Info-Befehle/InfoUser',
          ],
        },
        {
          type: 'category',
          label: 'Level-System',
          link: {
            type: 'generated-index',
            slug: '/category/discord/befehle/level-system',
          },
          items: [
            {
              type: 'category',
              label: 'Nutzer-Befehle',
              link: { type: 'generated-index', slug: '/category/discord/befehle/level-system/nutzer-befehle' },
              items: [
                'discord/befehle/Level-System/Nutzer-Befehle/LevelLeaderboard',
                'discord/befehle/Level-System/Nutzer-Befehle/LevelProfile',
              ],
            },
            {
              type: 'category',
              label: 'Admin-Befehle',
              link: { type: 'generated-index', slug: '/category/discord/befehle/level-system/admin-befehle' },
              items: [
                'discord/befehle/Level-System/Admin-Befehle/ManageLevelAdd',
                'discord/befehle/Level-System/Admin-Befehle/ManageLevelRemove',
                'discord/befehle/Level-System/Admin-Befehle/ManageLevelResetXP',
                'discord/befehle/Level-System/Admin-Befehle/ManageLevelSet',
                'discord/befehle/Level-System/Admin-Befehle/ManageLevelXPAdd',
                'discord/befehle/Level-System/Admin-Befehle/ManageLevelXPRemove',
                'discord/befehle/Level-System/Admin-Befehle/ManageLevelXPSet',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Massenrolle',
          link: {
            type: 'generated-index',
            slug: '/category/discord/befehle/massenrolle',
          },
          items: [
            'discord/befehle/Massenrolle/MassroleAdd',
            'discord/befehle/Massenrolle/MassroleRemove',
            'discord/befehle/Massenrolle/MassroleRemoveAll',
          ],
        },
        {
          type: 'category',
          label: 'Moderation-und-Sicherheit',
          link: {
            type: 'generated-index',
            slug: '/category/discord/befehle/moderation-und-sicherheit',
          },
          items: [
            {
              type: 'category',
              label: 'Nutzer-Befehle',
              link: { type: 'generated-index', slug: '/category/discord/befehle/moderation-und-sicherheit/nutzer-befehle' },
              items: [
                'discord/befehle/Moderation-und-Sicherheit/Nutzer-Befehle/ModerateReport',
              ],
            },
            {
              type: 'category',
              label: 'Moderations-Aktionen',
              link: { type: 'generated-index', slug: '/category/discord/befehle/moderation-und-sicherheit/moderations-aktionen' },
              items: [
                'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateActions',
                'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateClear',
                'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateWarn',
                'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateRevokeWarn',
                'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateMute',
                'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateUnmute',
                'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateChannelMute',
                'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateRemoveChannelMute',
                'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateQurantine',
                'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateUnquarantine',
                'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateKick',
                'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateBan',
                'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateUnban',
              ],
            },
            {
              type: 'category',
              label: 'Kanal-Verwaltung',
              link: { type: 'generated-index', slug: '/category/discord/befehle/moderation-und-sicherheit/kanal-verwaltung' },
              items: [
                'discord/befehle/Moderation-und-Sicherheit/Kanal-Verwaltung/ModerateLock',
                'discord/befehle/Moderation-und-Sicherheit/Kanal-Verwaltung/ModerateUnlock',
                'discord/befehle/Moderation-und-Sicherheit/Kanal-Verwaltung/ModerateLockdown',
              ],
            },
            {
              type: 'category',
              label: 'Notizen',
              link: { type: 'generated-index', slug: '/category/discord/befehle/moderation-und-sicherheit/notizen' },
              items: [
                'discord/befehle/Moderation-und-Sicherheit/Notizen/ModerateNotesCreate',
                'discord/befehle/Moderation-und-Sicherheit/Notizen/ModerateNotesEdit',
                'discord/befehle/Moderation-und-Sicherheit/Notizen/ModerateNotesDelete',
                'discord/befehle/Moderation-und-Sicherheit/Notizen/ModerateNotesView',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Minispiele',
          link: { type: 'generated-index', slug: '/category/discord/befehle/minispiele' },
          items: [
            // 'discord/befehle/Minispiele/ConnectFour',
            'discord/befehle/Minispiele/Duel',
          ],
        },
        // {
        //   type: 'category',
        //   label: 'Economy System',
        //   link: { type: 'generated-index', slug: '/category/discord/befehle/economy-system' },
        //   items: [
        //     {
        //       type: 'category',
        //       label: 'Economy-Befehle',
        //       link: { type: 'generated-index', slug: '/category/discord/befehle/economy-system/economy-befehle' },
        //       items: [
        //         'discord/befehle/Economy System/Economy-Befehle/EconomyAdd',
        //         'discord/befehle/Economy System/Economy-Befehle/EconomyBalance',
        //         'discord/befehle/Economy System/Economy-Befehle/EconomyCrime',
        //         'discord/befehle/Economy System/Economy-Befehle/EconomyDaily',
        //         'discord/befehle/Economy System/Economy-Befehle/EconomyDeposit',
        //         'discord/befehle/Economy System/Economy-Befehle/EconomyDestroy',
        //         'discord/befehle/Economy System/Economy-Befehle/EconomyDropDisable',
        //         'discord/befehle/Economy System/Economy-Befehle/EconomyDropEnable',
        //         'discord/befehle/Economy System/Economy-Befehle/EconomyRemove',
        //         'discord/befehle/Economy System/Economy-Befehle/EconomyRob',
        //         'discord/befehle/Economy System/Economy-Befehle/EconomySet',
        //         'discord/befehle/Economy System/Economy-Befehle/EconomyWeekly',
        //         'discord/befehle/Economy System/Economy-Befehle/EconomyWithdraw',
        //         'discord/befehle/Economy System/Economy-Befehle/EconomyWork',
        //       ],
        //     },
        //     {
        //       type: 'category',
        //       label: 'Shop-Befehle',
        //       link: { type: 'generated-index', slug: '/category/discord/befehle/economy-system/shop-befehle' },
        //       items: [
        //         'discord/befehle/Economy System/Shop-Befehle/ShopAdd',
        //         'discord/befehle/Economy System/Shop-Befehle/ShopBuy',
        //         'discord/befehle/Economy System/Shop-Befehle/ShopDelete',
        //         'discord/befehle/Economy System/Shop-Befehle/ShopList',
        //       ],
        //     },
        //   ],
        // },
      ],
    },
  ],
};

export default sidebars;
