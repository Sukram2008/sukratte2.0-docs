// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    /* ==========================================
       1. NUTZER-BEFEHLE (Module als Ordner)
       ========================================== */
    {
      type: 'category',
      label: 'Nutzer-Bereich',
      link: { type: 'generated-index', slug: '/nutzer' },
      items: [
        {
          type: 'category',
          label: 'Custom-Bot Befehle',
          link: { type: 'generated-index', slug: '/nutzer/custom-bot-befehle' },
          items: [
            { type: 'category', label: 'AFK-System', items: ['discord/nutzer-bereich/AFK-System/AFK-Befehle/AFKStart', 'discord/nutzer-bereich/AFK-System/AFK-Befehle/AFKEnd'] },
            { type: 'category', label: 'Anonymer Chat', items: ['discord/nutzer-bereich/Anonymer-Chat/Nutzer-Befehle/AnonymousMessage'] },
            { type: 'category', label: 'Betterstatus', items: ['discord/nutzer-bereich/Betterstatus/Status'] },
            { type: 'category', label: 'Bewerbungen', items: ['discord/nutzer-bereich/Bewerbungen/Apply'] },
            { type: 'category', label: 'Color me', items: ['discord/nutzer-bereich/Color-me/Color-meManage', 'discord/nutzer-bereich/Color-me/Color-meRemove'] },
            { type: 'category', label: 'Erinnerungen', items: ['discord/nutzer-bereich/Erinnerungen/RemindMe'] },
            { type: 'category', label: 'Errate die Nummer', items: ['discord/nutzer-bereich/Errate-die-Nummer/GuessStatus'] },
            { type: 'category', label: 'Fun-Befehle', items: ['discord/nutzer-bereich/Fun-Befehle/Interaktions-Befehle/FunHug', 'discord/nutzer-bereich/Fun-Befehle/Interaktions-Befehle/FunPat', 'discord/nutzer-bereich/Fun-Befehle/Interaktions-Befehle/FunKiss', 'discord/nutzer-bereich/Fun-Befehle/Interaktions-Befehle/FunSlap', 'discord/nutzer-bereich/Fun-Befehle/Random-Befehle/RandomNumber', 'discord/nutzer-bereich/Fun-Befehle/Random-Befehle/RandomCoinflip', 'discord/nutzer-bereich/Fun-Befehle/Random-Befehle/RandomDice', 'discord/nutzer-bereich/Fun-Befehle/Random-Befehle/Random8Ball', 'discord/nutzer-bereich/Fun-Befehle/Random-Befehle/RandomIkea-name'] },
            { type: 'category', label: 'Geburtstags-Kalender', items: ['discord/nutzer-bereich/Geburtstags-Kalender/Nutzer-Befehle/BirthdayStatus', 'discord/nutzer-bereich/Geburtstags-Kalender/Nutzer-Befehle/BirthdaySet', 'discord/nutzer-bereich/Geburtstags-Kalender/Nutzer-Befehle/BirthdayDelete'] },
            { type: 'category', label: 'Gewinnspiele', items: ['discord/nutzer-bereich/Gewinnspiele/Nutzer-Befehle/GMessages'] },
            { type: 'category', label: 'Info-Befehle', items: ['discord/nutzer-bereich/Info-Befehle/InfoUser', 'discord/nutzer-bereich/Info-Befehle/InfoServer'] },
            { type: 'category', label: 'Level-System', items: ['discord/nutzer-bereich/Level-System/Nutzer-Befehle/LevelProfile', 'discord/nutzer-bereich/Level-System/Nutzer-Befehle/LevelLeaderboard'] },
            { type: 'category', label: 'Minispiele', items: ['discord/nutzer-bereich/Minispiele/Duel', 'discord/nutzer-bereich/Minispiele/Rock-Paper-Scissors', 'discord/nutzer-bereich/Minispiele/Tic-Tac-Toe'] },
            { type: 'category', label: 'Sicherheit', items: ['discord/nutzer-bereich/Moderation-und-Sicherheit/Nutzer-Befehle/ModerateReport'] },
            { type: 'category', label: 'Sammel die Codes', items: ['discord/nutzer-bereich/Sammel-die-Codes/Nutzer-Befehle/HuntTheCodeProfile', 'discord/nutzer-bereich/Sammel-die-Codes/Nutzer-Befehle/HuntTheCodeLeaderboard', 'discord/nutzer-bereich/Sammel-die-Codes/Nutzer-Befehle/HuntTheCodeRedeem'] },
            { type: 'category', label: 'Umfragen', items: ['discord/nutzer-bereich/Umfragen/PollUserInfos'] },
            { type: 'category', label: 'Vorschläge', items: ['discord/nutzer-bereich/Vorschläge/Nutzer-Befehle/SuggestionSubmit'] },
            { type: 'category', label: 'Wirtschaftssystem', items: ['discord/nutzer-bereich/Wirtschaftssystem/Finanzen/EconomyBalance', 'discord/nutzer-bereich/Wirtschaftssystem/Finanzen/EconomyDeposit', 'discord/nutzer-bereich/Wirtschaftssystem/Geldquellen/EconomyCrime', 'discord/nutzer-bereich/Wirtschaftssystem/Geldquellen/EconomyDaily', 'discord/nutzer-bereich/Wirtschaftssystem/Geldquellen/EconomyRob', 'discord/nutzer-bereich/Wirtschaftssystem/Geldquellen/EconomyWork'] },
          ],
        },
        // { type: 'category', label: 'Support-Bot Befehle' , items: [] },
      ],
    },

    /* ==========================================
       2. TEAM-BEFEHLE (Module als Ordner)
       ========================================== */
    {
      type: 'category',
      label: 'Team-Bereich',
      link: { type: 'generated-index', slug: '/team' },
      items: [
        {
          type: 'category',
          label: 'Custom-Bot Befehle',
          link: { type: 'generated-index', slug: '/team/custom-bot-befehle' },
          items: [
            { type: 'category', label: 'Admin-Tools', items: ['team-bereich/Admin-Tools/Admin-Befehle/AdminSetcategory', 'team-bereich/Admin-Tools/Admin-Befehle/AdminMovechannel', 'team-bereich/Admin-Tools/Admin-Befehle/AdminMoverole', 'team-bereich/Admin-Tools/Rollen-Befehle/RolesStatus', 'team-bereich/Admin-Tools/Rollen-Befehle/RolesGive', 'team-bereich/Admin-Tools/Rollen-Befehle/RolesRemove', 'team-bereich/Admin-Tools/Extra-Befehle/Stealemote'] },
            { type: 'category', label: 'Anonymer Chat', items: ['team-bereich/Anonymer-Chat/Moderator-Befehle/ModerateAnonymousChannelEnable', 'team-bereich/Anonymer-Chat/Moderator-Befehle/ModerateAnonymousChannelDisable', 'team-bereich/Anonymer-Chat/Moderator-Befehle/ModerateAnonymousChannelDeleteMessage'] },
            { type: 'category', label: 'Einladungsverfolgung', items: ['team-bereich/Einladungsverfolgung/TraceInvites'] },
            { type: 'category', label: 'Errate die Nummer', items: ['team-bereich/Errate-die-Nummer/GuessCreate', 'team-bereich/Errate-die-Nummer/GuessEnd'] },
            { type: 'category', label: 'Geburtstags-Kalender', items: ['team-bereich/Geburtstags-Kalender/Admin-Befehle/ManageBirthdayUnlock', 'team-bereich/Geburtstags-Kalender/Admin-Befehle/ManageBirthdayLock', 'team-bereich/Geburtstags-Kalender/Admin-Befehle/ManageBirthdaySet', 'team-bereich/Geburtstags-Kalender/Admin-Befehle/ManageBirthdayRemove'] },
            { type: 'category', label: 'Gewinnspiele', items: ['team-bereich/Gewinnspiele/Team-Befehle/GmanageStart', 'team-bereich/Gewinnspiele/Team-Befehle/GmanageReroll', 'team-bereich/Gewinnspiele/Team-Befehle/GmanageEnd'] },
            { type: 'category', label: 'Level-System', items: ['team-bereich/Level-System/Admin-Befehle/ManageLevelSet', 'team-bereich/Level-System/Admin-Befehle/ManageLevelAdd', 'team-bereich/Level-System/Admin-Befehle/ManageLevelRemove', 'team-bereich/Level-System/Admin-Befehle/ManageLevelXPSet', 'team-bereich/Level-System/Admin-Befehle/ManageLevelXPAdd', 'team-bereich/Level-System/Admin-Befehle/ManageLevelXPRemove', 'team-bereich/Level-System/Admin-Befehle/ManageLevelResetXP'] },
            { type: 'category', label: 'Massenrolle', items: ['team-bereich/Massenrolle/MassroleAdd', 'team-bereich/Massenrolle/MassroleRemove', 'team-bereich/Massenrolle/MassroleRemoveAll'] },
            { type: 'category', label: 'Moderation & Sicherheit', items: ['team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateActions', 'team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateWarn', 'team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateRevokeWarn', 'team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateMute', 'team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateUnmute', 'team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateKick', 'team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateBan', 'team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateUnban', 'team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateClear', 'team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateQuarantine', 'team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateUnquarantine', 'team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateChannelMute', 'team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateRemoveChannelMute', 'team-bereich/Moderation-und-Sicherheit/Kanal-Verwaltung/ModerateLock', 'team-bereich/Moderation-und-Sicherheit/Kanal-Verwaltung/ModerateUnlock', 'team-bereich/Moderation-und-Sicherheit/Kanal-Verwaltung/ModerateLockdown', 'team-bereich/Moderation-und-Sicherheit/Notizen/ModerateNotesView', 'team-bereich/Moderation-und-Sicherheit/Notizen/ModerateNotesCreate', 'team-bereich/Moderation-und-Sicherheit/Notizen/ModerateNotesEdit', 'team-bereich/Moderation-und-Sicherheit/Notizen/ModerateNotesDelete'] },
            { type: 'category', label: 'Partner-Liste', items: ['team-bereich/Partner-Liste/PartnerListAdd', 'team-bereich/Partner-Liste/PartnerListEdit', 'team-bereich/Partner-Liste/PartnerListDelete'] },
            { type: 'category', label: 'Ping-Schutz', items: ['team-bereich/Ping-Schutz/PingProtectionUserPanel', 'team-bereich/Ping-Schutz/PingProtectionListProtected', 'team-bereich/Ping-Schutz/PingProtectionListWhitelisted', 'team-bereich/Ping-Schutz/PingProtectionUserHistory', 'team-bereich/Ping-Schutz/PingProtectionUserActionsHistory'] },
            { type: 'category', label: 'Sammel die Codes', items: ['team-bereich/Sammel-die-Codes/Admin-Befehle/HuntTheCodeAdminReport', 'team-bereich/Sammel-die-Codes/Admin-Befehle/HuntTheCodeAdminCreateCode', 'team-bereich/Sammel-die-Codes/Admin-Befehle/HuntTheCodeAdminEnd'] },
            { type: 'category', label: 'Team-Ziele', items: ['team-bereich/Teammitglieder-Ziele/TeamGoalsHistory', 'team-bereich/Teammitglieder-Ziele/TeamGoalsProgress', 'team-bereich/Teammitglieder-Ziele/TeamGoalsVoiceProgress'] },
            { type: 'category', label: 'Temporäre Channel', items: ['team-bereich/Temporäre-Channel/TempChannelMode', 'team-bereich/Temporäre-Channel/TempChannelAddUser', 'team-bereich/Temporäre-Channel/TempChannelRemoveUser', 'team-bereich/Temporäre-Channel/TempChannelListUsers', 'team-bereich/Temporäre-Channel/TempChannelEdit'] },
            { type: 'category', label: 'Umfragen', items: ['team-bereich/Umfragen/PollCreate', 'team-bereich/Umfragen/PollEnd'] },
            { type: 'category', label: 'Vorschläge', items: ['team-bereich/Vorschläge/Team-Befehle/SuggestionAccept', 'team-bereich/Vorschläge/Team-Befehle/SuggestionDeny'] },
            { type: 'category', label: 'Wirtschaftssystem', items: ['team-bereich/Wirtschaftssystem/Team-Befehle/EconomyAdd', 'team-bereich/Wirtschaftssystem/Team-Befehle/EconomyDestroy', 'team-bereich/Wirtschaftssystem/Team-Befehle/EconomyDropMsgDisable', 'team-bereich/Wirtschaftssystem/Team-Befehle/EconomyDropMsgEnable', 'team-bereich/Wirtschaftssystem/Team-Befehle/EconomyRemove', 'team-bereich/Wirtschaftssystem/Team-Befehle/EconomySet'] },
          ],
        },
        // { type: 'category', label: 'Support-Bot Befehle', items: [] },
      ],
    },

    /* ==========================================
       3. ALLE BEFEHLE (Das komplette Archiv)
       ========================================== */
    {
      type: 'category',
      label: 'Alle Befehle',
      link: { type: 'generated-index', slug: '/alle-befehle' },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Custom-Bot Befehle',
          link: { type: 'generated-index', slug: '/alle-befehle/custom-bot' },
          items: [
            {
              type: 'category',
              label: 'Admin-Tools',
              link: { type: 'generated-index', slug: '/category/discord/befehle/admin-tools' },
              items: [
                {
                  type: 'category',
                  label: 'Admin-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/admin-tools/admin-befehle' },
                  items: [
                    'discord/befehle/Admin-Tools/Admin-Befehle/AdminSetcategory',
                    'discord/befehle/Admin-Tools/Admin-Befehle/AdminMovechannel',
                    'discord/befehle/Admin-Tools/Admin-Befehle/AdminMoverole',
                  ],
                },
                {
                  type: 'category',
                  label: 'Rollen-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/admin-tools/rollen-befehle' },
                  items: [
                    'discord/befehle/Admin-Tools/Rollen-Befehle/RolesStatus',
                    'discord/befehle/Admin-Tools/Rollen-Befehle/RolesGive',
                    'discord/befehle/Admin-Tools/Rollen-Befehle/RolesRemove',
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

            /* --- A: AFK System --- */
            {
              type: 'category',
              label: 'AFK System',
              link: { type: 'generated-index', slug: '/category/discord/befehle/afk-system' },
              items: [
                'discord/befehle/AFK-System/AFK-Befehle/AFKStart',
                'discord/befehle/AFK-System/AFK-Befehle/AFKEnd',
              ],
            },

            /* --- A: Anonymer Chat --- */
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
                    'discord/befehle/Anonymer-Chat/Moderator-Befehle/ModerateAnonymousChannelEnable',
                    'discord/befehle/Anonymer-Chat/Moderator-Befehle/ModerateAnonymousChannelDisable',
                    'discord/befehle/Anonymer-Chat/Moderator-Befehle/ModerateAnonymousChannelDeleteMessage',
                  ],
                },
              ],
            },

            /* --- B: BetterStatus --- */
            {
              type: 'category',
              label: 'BetterStatus',
              link: { type: 'generated-index', slug: '/category/discord/befehle/betterstatus' },
              items: [
                'discord/befehle/Betterstatus/Status',
              ],
            },

            /* --- B: Bewerbungen --- */
            {
              type: 'category',
              label: 'Bewerbungen',
              link: { type: 'generated-index', slug: '/category/discord/befehle/bewerbungen' },
              items: [
                'discord/befehle/Bewerbungen/Apply'
              ],
            },

            /* --- C: Color me --- */
            {
              type: 'category',
              label: 'Color me',
              link: { type: 'generated-index', slug: '/category/discord/befehle/color-me' },
              items: [
                'discord/befehle/Color-me/Color-meManage',
                'discord/befehle/Color-me/Color-meRemove',
              ],
            },

            /* --- E: Einladungsverfolgung --- */
            {
              type: 'category',
              label: 'Einladungsverfolgung',
              link: { type: 'generated-index', slug: '/category/discord/befehle/einladungsverfolgung' },
              items: [
                'discord/befehle/Einladungsverfolgung/TraceInvites',
              ],
            },

            /* --- E: Erinnerungen --- */
            {
              type: 'category',
              label: 'Erinnerungen',
              link: { type: 'generated-index', slug: '/category/discord/befehle/erinnerungen' },
              items: [
                'discord/befehle/Erinnerungen/RemindMe',
              ],
            },

            /* --- E: Errate die Nummer --- */
            {
              type: 'category',
              label: 'Errate die Nummer',
              link: { type: 'generated-index', slug: '/category/discord/befehle/errate-die-nummer' },
              items: [
                'discord/befehle/Errate-die-Nummer/GuessCreate',
                'discord/befehle/Errate-die-Nummer/GuessStatus',
                'discord/befehle/Errate-die-Nummer/GuessEnd',
              ],
            },

            /* --- F: Fun-Befehle --- */
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
                    'discord/befehle/Fun-Befehle/Interaktions-Befehle/FunPat',
                    'discord/befehle/Fun-Befehle/Interaktions-Befehle/FunKiss',
                    'discord/befehle/Fun-Befehle/Interaktions-Befehle/FunSlap',
                  ],
                },
                {
                  type: 'category',
                  label: 'Random-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/fun-befehle/random-befehle' },
                  items: [
                    'discord/befehle/Fun-Befehle/Random-Befehle/RandomNumber',
                    'discord/befehle/Fun-Befehle/Random-Befehle/RandomCoinflip',
                    'discord/befehle/Fun-Befehle/Random-Befehle/RandomDice',
                    'discord/befehle/Fun-Befehle/Random-Befehle/Random8Ball',
                    'discord/befehle/Fun-Befehle/Random-Befehle/RandomIkea-name',
                  ],
                },
              ],
            },

            /* --- G: Geburtstags-Kalender --- */
            {
              type: 'category',
              label: 'Geburtstags-Kalender',
              link: { type: 'generated-index', slug: '/category/discord/befehle/geburtstags-kalender' },
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
                    'discord/befehle/Geburtstags-Kalender/Admin-Befehle/ManageBirthdayUnlock',
                    'discord/befehle/Geburtstags-Kalender/Admin-Befehle/ManageBirthdayLock',
                    'discord/befehle/Geburtstags-Kalender/Admin-Befehle/ManageBirthdaySet',
                    'discord/befehle/Geburtstags-Kalender/Admin-Befehle/ManageBirthdayRemove',
                  ],
                },
              ],
            },

            /* --- G: Gewinnspiele --- */
            {
              type: 'category',
              label: 'Gewinnspiele',
              link: { type: 'generated-index', slug: '/category/discord/befehle/gewinnspiele' },
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
                    'discord/befehle/Gewinnspiele/Team-Befehle/GmanageReroll',
                    'discord/befehle/Gewinnspiele/Team-Befehle/GmanageEnd',
                  ],
                },
              ],
            },

            /* --- I: Info-Befehle --- */
            {
              type: 'category',
              label: 'Info-Befehle',
              link: { type: 'generated-index', slug: '/category/discord/befehle/info-befehle' },
              items: [
                'discord/befehle/Info-Befehle/InfoUser',
                'discord/befehle/Info-Befehle/InfoServer',
                'discord/befehle/Info-Befehle/InfoChannel',
                'discord/befehle/Info-Befehle/InfoRole',
              ],
            },

            /* --- L: Level-System --- */
            {
              type: 'category',
              label: 'Level-System',
              link: { type: 'generated-index', slug: '/category/discord/befehle/level-system' },
              items: [
                {
                  type: 'category',
                  label: 'Nutzer-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/level-system/nutzer-befehle' },
                  items: [
                    'discord/befehle/Level-System/Nutzer-Befehle/LevelProfile',
                    'discord/befehle/Level-System/Nutzer-Befehle/LevelLeaderboard',
                  ],
                },
                {
                  type: 'category',
                  label: 'Admin-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/level-system/admin-befehle' },
                  items: [
                    'discord/befehle/Level-System/Admin-Befehle/ManageLevelSet',
                    'discord/befehle/Level-System/Admin-Befehle/ManageLevelAdd',
                    'discord/befehle/Level-System/Admin-Befehle/ManageLevelRemove',
                    'discord/befehle/Level-System/Admin-Befehle/ManageLevelXPSet',
                    'discord/befehle/Level-System/Admin-Befehle/ManageLevelXPAdd',
                    'discord/befehle/Level-System/Admin-Befehle/ManageLevelXPRemove',
                    'discord/befehle/Level-System/Admin-Befehle/ManageLevelResetXP',
                  ],
                },
              ],
            },

            /* --- M: Massenrolle --- */
            {
              type: 'category',
              label: 'Massenrolle',
              link: { type: 'generated-index', slug: '/category/discord/befehle/massenrolle' },
              items: [
                'discord/befehle/Massenrolle/MassroleAdd',
                'discord/befehle/Massenrolle/MassroleRemove',
                'discord/befehle/Massenrolle/MassroleRemoveAll',
              ],
            },

            /* --- M: Minispiele --- */
            {
              type: 'category',
              label: 'Minispiele',
              link: { type: 'generated-index', slug: '/category/discord/befehle/minispiele' },
              items: [
                'discord/befehle/Minispiele/Duel',
                'discord/befehle/Minispiele/Rock-Paper-Scissors',
                'discord/befehle/Minispiele/Tic-Tac-Toe',
              ],
            },

            /* --- M: Moderation-und-Sicherheit --- */
            {
              type: 'category',
              label: 'Moderation und Sicherheit',
              link: { type: 'generated-index', slug: '/category/discord/befehle/moderation-und-sicherheit' },
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
                    'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateWarn',
                    'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateRevokeWarn',
                    'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateMute',
                    'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateUnmute',
                    'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateKick',
                    'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateBan',
                    'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateUnban',
                    'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateClear',
                    'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateQuarantine',
                    'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateUnquarantine',
                    'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateChannelMute',
                    'discord/befehle/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateRemoveChannelMute',
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
                    'discord/befehle/Moderation-und-Sicherheit/Notizen/ModerateNotesView',
                    'discord/befehle/Moderation-und-Sicherheit/Notizen/ModerateNotesCreate',
                    'discord/befehle/Moderation-und-Sicherheit/Notizen/ModerateNotesEdit',
                    'discord/befehle/Moderation-und-Sicherheit/Notizen/ModerateNotesDelete',
                  ],
                },
              ],
            },

            /* --- P: Partner-Liste --- */
            {
              type: 'category',
              label: 'Partner-Liste',
              link: { type: 'generated-index', slug: '/category/discord/befehle/partner-liste' },
              items: [
                'discord/befehle/Partner-Liste/PartnerListAdd',
                'discord/befehle/Partner-Liste/PartnerListEdit',
                'discord/befehle/Partner-Liste/PartnerListDelete',
              ],
            },

            /* --- P: Ping-Schutz --- */
            {
              type: 'category',
              label: 'Ping-Schutz',
              link: { type: 'generated-index', slug: '/category/discord/befehle/ping-schutz' },
              items: [
                'discord/befehle/Ping-Schutz/PingProtectionUserPanel',
                'discord/befehle/Ping-Schutz/PingProtectionListProtected',
                'discord/befehle/Ping-Schutz/PingProtectionListWhitelisted',
                'discord/befehle/Ping-Schutz/PingProtectionUserHistory',
                'discord/befehle/Ping-Schutz/PingProtectionUserActionsHistory',
              ],
            },

            /* --- S: Sammel-die-Codes --- */
            {
              type: 'category',
              label: 'Sammel die Codes',
              link: { type: 'generated-index', slug: '/category/discord/befehle/sammel-die-codes' },
              items: [
                {
                  type: 'category',
                  label: 'Nutzer-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/sammel-die-codes/nutzer-befehle' },
                  items: [
                    'discord/befehle/Sammel-die-Codes/Nutzer-Befehle/HuntTheCodeProfile',
                    'discord/befehle/Sammel-die-Codes/Nutzer-Befehle/HuntTheCodeLeaderboard',
                    'discord/befehle/Sammel-die-Codes/Nutzer-Befehle/HuntTheCodeRedeem',
                  ],
                },
                {
                  type: 'category',
                  label: 'Admin-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/sammel-die-codes/admin-befehle' },
                  items: [
                    'discord/befehle/Sammel-die-Codes/Admin-Befehle/HuntTheCodeAdminReport',
                    'discord/befehle/Sammel-die-Codes/Admin-Befehle/HuntTheCodeAdminCreateCode',
                    'discord/befehle/Sammel-die-Codes/Admin-Befehle/HuntTheCodeAdminEnd',
                  ],
                },
              ],
            },

            /* --- T: Teammitglieder-Ziele --- */
            {
              type: 'category',
              label: 'Teammitglieder-Ziele',
              link: { type: 'generated-index', slug: '/category/discord/befehle/teammitglieder-ziele' },
              items: [
                'discord/befehle/Teammitglieder-Ziele/TeamGoalsHistory',
                'discord/befehle/Teammitglieder-Ziele/TeamGoalsProgress',
                'discord/befehle/Teammitglieder-Ziele/TeamGoalsVoiceProgress',
              ],
            },

            /* --- T: Temporäre Channel --- */
            {
              type: 'category',
              label: 'Temporäre Channel',
              link: { type: 'generated-index', slug: '/category/discord/befehle/temporäre-channel' },
              items: [
                'discord/befehle/Temporäre-Channel/TempChannelMode',
                'discord/befehle/Temporäre-Channel/TempChannelAddUser',
                'discord/befehle/Temporäre-Channel/TempChannelRemoveUser',
                'discord/befehle/Temporäre-Channel/TempChannelListUsers',
                'discord/befehle/Temporäre-Channel/TempChannelEdit',
              ],
            },

            /* --- U: Umfragen --- */
            {
              type: 'category',
              label: 'Umfragen',
              link: { type: 'generated-index', slug: '/category/discord/befehle/umfragen' },
              items: [
                'discord/befehle/Umfragen/PollUserInfos',
                'discord/befehle/Umfragen/PollCreate',
                'discord/befehle/Umfragen/PollEnd',
              ],
            },

            /* --- V: Vorschläge --- */
            {
              type: 'category',
              label: 'Vorschläge',
              link: { type: 'generated-index', slug: '/category/discord/befehle/vorschlaege' },
              items: [
                {
                  type: 'category',
                  label: 'Nutzer-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/vorschlaege/nutzer-befehle' },
                  items: [
                    'discord/befehle/Vorschläge/Nutzer-Befehle/SuggestionSubmit',
                  ],
                },
                {
                  type: 'category',
                  label: 'Team-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/vorschlaege/team-befehle' },
                  items: [
                    'discord/befehle/Vorschläge/Team-Befehle/SuggestionAccept',
                    'discord/befehle/Vorschläge/Team-Befehle/SuggestionDeny',
                  ],
                },
              ],
            },

            /* --- W: Wirtschaftssystem --- */
            {
              type: 'category',
              label: 'Wirtschaftssystem',
              link: { type: 'generated-index', slug: '/category/discord/befehle/wirtschaftssystem' },
              items: [
                {
                  type: 'category',
                  label: 'Finanzen',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/wirtschaftssystem/finanzen' },
                  items: [
                    'discord/befehle/Wirtschaftssystem/Finanzen/EconomyBalance',
                    'discord/befehle/Wirtschaftssystem/Finanzen/EconomyDeposit',
                  ],
                },
                {
                  type: 'category',
                  label: 'Geldquellen',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/wirtschaftssystem/geldquellen' },
                  items: [
                    'discord/befehle/Wirtschaftssystem/Geldquellen/EconomyCrime',
                    'discord/befehle/Wirtschaftssystem/Geldquellen/EconomyDaily',
                    'discord/befehle/Wirtschaftssystem/Geldquellen/EconomyRob',
                    'discord/befehle/Wirtschaftssystem/Geldquellen/EconomyWork',
                  ],
                },
                {
                  type: 'category',
                  label: 'Team-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/wirtschaftssystem/team-befehle' },
                  items: [
                    'discord/befehle/Wirtschaftssystem/Team-Befehle/EconomyAdd',
                    'discord/befehle/Wirtschaftssystem/Team-Befehle/EconomyDestroy',
                    'discord/befehle/Wirtschaftssystem/Team-Befehle/EconomyDropMsgDisable',
                    'discord/befehle/Wirtschaftssystem/Team-Befehle/EconomyDropMsgEnable',
                    'discord/befehle/Wirtschaftssystem/Team-Befehle/EconomyRemove',
                    'discord/befehle/Wirtschaftssystem/Team-Befehle/EconomySet',
                  ],
                },
              ],
            },
          ], // Ende Items von Custom-Bot
        }, // Ende Kategorie Custom-Bot
        // {
        //   type: 'category',
        //   label: 'Support-Bot Befehle',
        //   link: { type: 'generated-index', slug: '/alle-befehle/support-bot'},
        //   items: [
        //     // Alle Support-Bot Dateien kommen hierhin
        //   ]
        // }
      ], // Ende Items von Alle Befehle
    }, // Ende Kategorie Alle Befehle
  ],
};

export default sidebars;