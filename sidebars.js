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
            { type: 'category', label: 'Allgemein', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Build-In-Commands/Nutzer-Befehle/Help'] },
            { type: 'category', label: 'Fehlermeldungen', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Eigene-Befehle/Fehlermeldungen/BugReport'] },
            { type: 'category', label: 'AFK-System', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/AFK-System/AFK-Befehle/AFKStart', 'discord/nutzer-bereich/AFK-System/AFK-Befehle/AFKEnd'] },
            { type: 'category', label: 'Anonymer Chat', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Anonymer-Chat/Nutzer-Befehle/AnonymousMessage'] },
            { type: 'category', label: 'Bewerbungen', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Bewerbungen/Apply'] },
            { type: 'category', label: 'Color-me', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Color-me/Color-meManage', 'discord/nutzer-bereich/Color-me/Color-meRemove'] },
            { type: 'category', label: 'Erinnerungen', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Erinnerungen/RemindMe'] },
            { type: 'category', label: 'Fun-Befehle', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Fun-Befehle/Interaktions-Befehle/FunHug', 'discord/nutzer-bereich/Fun-Befehle/Interaktions-Befehle/FunKiss', 'discord/nutzer-bereich/Fun-Befehle/Interaktions-Befehle/FunPat', 'discord/nutzer-bereich/Fun-Befehle/Interaktions-Befehle/FunSlap', 'discord/nutzer-bereich/Fun-Befehle/Random-Befehle/Random8Ball', 'discord/nutzer-bereich/Fun-Befehle/Random-Befehle/RandomCoinflip', 'discord/nutzer-bereich/Fun-Befehle/Random-Befehle/RandomDice', 'discord/nutzer-bereich/Fun-Befehle/Random-Befehle/RandomIkea-name', 'discord/nutzer-bereich/Fun-Befehle/Random-Befehle/RandomNumber'] },
            { type: 'category', label: 'Geburtstags-Kalender', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Geburtstags-Kalender/Nutzer-Befehle/BirthdaySet', 'discord/nutzer-bereich/Geburtstags-Kalender/Nutzer-Befehle/BirthdayStatus', 'discord/nutzer-bereich/Geburtstags-Kalender/Nutzer-Befehle/BirthdayDelete'] },
            { type: 'category', label: 'Gewinnspiele', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Gewinnspiele/Nutzer-Befehle/GMessages'] },
            { type: 'category', label: 'Info-Befehle', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Info-Befehle/InfoUser', 'discord/nutzer-bereich/Info-Befehle/InfoServer', 'discord/nutzer-bereich/Info-Befehle/InfoChannel', 'discord/nutzer-bereich/Info-Befehle/InfoRole'] },
            { type: 'category', label: 'Level-System', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Level-System/Nutzer-Befehle/LevelProfile', 'discord/nutzer-bereich/Level-System/Nutzer-Befehle/LevelLeaderboard'] },
            { type: 'category', label: 'Minispiele', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Minispiele/ConnectFour', 'discord/nutzer-bereich/Minispiele/Duel', 'discord/nutzer-bereich/Minispiele/Tic-Tac-Toe', 'discord/nutzer-bereich/Minispiele/Rock-Paper-Scissors', 'discord/nutzer-bereich/Minispiele/Uno'] },
            { type: 'category', label: 'Moderation & Sicherheit', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Moderation-und-Sicherheit/Nutzer-Befehle/ModerateReport'] },
            { type: 'category', label: 'Ping-Schutz', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Ping-Schutz/Nutzer-Befehle/PingProtectionListProtected', 'discord/nutzer-bereich/Ping-Schutz/Nutzer-Befehle/PingProtectionListWhitelisted'] },
            { type: 'category', label: 'Sammel-die-Codes', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Sammel-die-Codes/Nutzer-Befehle/HuntTheCodeRedeem', 'discord/nutzer-bereich/Sammel-die-Codes/Nutzer-Befehle/HuntTheCodeProfile', 'discord/nutzer-bereich/Sammel-die-Codes/Nutzer-Befehle/HuntTheCodeLeaderboard'] },
            { type: 'category', label: 'Schach', link: { type: 'generated-index' }, items: [ 'discord/nutzer-bereich/Schach/ChessChallenge', 'discord/nutzer-bereich/Schach/ChessChallengeAI', 'discord/nutzer-bereich/Schach/ChessGames', 'discord/nutzer-bereich/Schach/ChessHistory'] },            { type: 'category', label: 'Temporäre-Channel', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Temporäre-Channel/TempChannelEdit', 'discord/nutzer-bereich/Temporäre-Channel/TempChannelMode', 'discord/nutzer-bereich/Temporäre-Channel/TempChannelAddUser', 'discord/nutzer-bereich/Temporäre-Channel/TempChannelRemoveUser', 'discord/nutzer-bereich/Temporäre-Channel/TempChannelListUsers'] },
            { type: 'category', label: 'Vorschläge', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Vorschläge/Nutzer-Befehle/SuggestionSubmit'] },
            { type: 'category', label: 'Wirtschaftssystem', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Wirtschaftssystem/Finanzen/EconomyBalance', 'discord/nutzer-bereich/Wirtschaftssystem/Finanzen/EconomyDeposit', 'discord/nutzer-bereich/Wirtschaftssystem/Geldquellen/EconomyWork', 'discord/nutzer-bereich/Wirtschaftssystem/Geldquellen/EconomyDaily', 'discord/nutzer-bereich/Wirtschaftssystem/Geldquellen/EconomyCrime', 'discord/nutzer-bereich/Wirtschaftssystem/Geldquellen/EconomyRob', 'discord/nutzer-bereich/Wirtschaftssystem/Shop/Nutzer-Befehle/ShopList', 'discord/nutzer-bereich/Wirtschaftssystem/Shop/Nutzer-Befehle/ShopBuy'] },        
            ]
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
            { type: 'category', label: 'Admin-Tools', link: { type: 'generated-index' }, items: ['discord/team-bereich/Admin-Tools/Admin-Befehle/AdminSetcategory', 'discord/team-bereich/Admin-Tools/Admin-Befehle/AdminMovechannel', 'discord/team-bereich/Admin-Tools/Admin-Befehle/AdminMoverole', 'discord/team-bereich/Admin-Tools/Rollen-Befehle/RolesStatus', 'discord/team-bereich/Admin-Tools/Rollen-Befehle/RolesGive', 'discord/team-bereich/Admin-Tools/Rollen-Befehle/RolesRemove', 'discord/team-bereich/Admin-Tools/Extra-Befehle/Stealemote'] },
            { type: 'category', label: 'Anonymer Chat', link: { type: 'generated-index' }, items: ['discord/team-bereich/Anonymer-Chat/Moderator-Befehle/ModerateAnonymousChannelEnable', 'discord/team-bereich/Anonymer-Chat/Moderator-Befehle/ModerateAnonymousChannelDisable', 'discord/team-bereich/Anonymer-Chat/Moderator-Befehle/ModerateAnonymousChannelDeleteMessage'] },
            { type: 'category', label: 'Betterstatus', link: { type: 'generated-index' }, items: ['discord/team-bereich/Betterstatus/Status'] },
            { type: 'category', label: 'Einladungsverfolgung', link: { type: 'generated-index' }, items: ['discord/team-bereich/Einladungsverfolgung/TraceInvites'] },
            { type: 'category', label: 'Errate-die-Nummer', link: { type: 'generated-index' }, items: ['discord/team-bereich/Errate-die-Nummer/GuessCreate', 'discord/team-bereich/Errate-die-Nummer/GuessStatus', 'discord/team-bereich/Errate-die-Nummer/GuessEnd'] },
            { type: 'category', label: 'Geburtstags-Kalender', link: { type: 'generated-index' }, items: ['discord/team-bereich/Geburtstags-Kalender/Admin-Befehle/ManageBirthdaySet', 'discord/team-bereich/Geburtstags-Kalender/Admin-Befehle/ManageBirthdayRemove', 'discord/team-bereich/Geburtstags-Kalender/Admin-Befehle/ManageBirthdayLock', 'discord/team-bereich/Geburtstags-Kalender/Admin-Befehle/ManageBirthdayUnlock'] },
            { type: 'category', label: 'Gewinnspiele', link: { type: 'generated-index' }, items: ['discord/team-bereich/Gewinnspiele/Team-Befehle/GmanageStart', 'discord/team-bereich/Gewinnspiele/Team-Befehle/GmanageReroll', 'discord/team-bereich/Gewinnspiele/Team-Befehle/GmanageEnd'] },
            { type: 'category', label: 'Kommunikation', link: { type: 'generated-index' }, items: ['discord/team-bereich/Eigene-Befehle/Kommunikation/DM', 'discord/team-bereich/Eigene-Befehle/Kommunikation/ShoutOut'] },
            { type: 'category', label: 'Level-System', link: { type: 'generated-index' }, items: ['discord/team-bereich/Level-System/Admin-Befehle/ManageLevelSet', 'discord/team-bereich/Level-System/Admin-Befehle/ManageLevelAdd', 'discord/team-bereich/Level-System/Admin-Befehle/ManageLevelRemove', 'discord/team-bereich/Level-System/Admin-Befehle/ManageLevelResetXP', 'discord/team-bereich/Level-System/Admin-Befehle/ManageLevelXPSet', 'discord/team-bereich/Level-System/Admin-Befehle/ManageLevelXPAdd', 'discord/team-bereich/Level-System/Admin-Befehle/ManageLevelXPRemove'] },
            { type: 'category', label: 'Massenrolle', link: { type: 'generated-index' }, items: ['discord/team-bereich/Massenrolle/MassroleAdd', 'discord/team-bereich/Massenrolle/MassroleRemove', 'discord/team-bereich/Massenrolle/MassroleRemoveAll'] },
            { type: 'category', label: 'Moderation & Sicherheit', link: { type: 'generated-index' }, items: ['discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateActions', 'discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateWarn', 'discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateRevokeWarn', 'discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateMute', 'discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateUnmute', 'discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateKick', 'discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateBan', 'discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateUnban', 'discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateClear', 'discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateQuarantine', 'discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateUnquarantine', 'discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateChannelMute', 'discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateRemoveChannelMute', 'discord/team-bereich/Moderation-und-Sicherheit/Kanal-Verwaltung/ModerateLock', 'discord/team-bereich/Moderation-und-Sicherheit/Kanal-Verwaltung/ModerateUnlock', 'discord/team-bereich/Moderation-und-Sicherheit/Kanal-Verwaltung/ModerateLockdown', 'discord/team-bereich/Moderation-und-Sicherheit/Notizen/ModerateNotesView', 'discord/team-bereich/Moderation-und-Sicherheit/Notizen/ModerateNotesCreate', 'discord/team-bereich/Moderation-und-Sicherheit/Notizen/ModerateNotesEdit', 'discord/team-bereich/Moderation-und-Sicherheit/Notizen/ModerateNotesDelete'] },
            { type: 'category', label: 'Organisation', link: { type: 'generated-index' }, items: ['discord/team-bereich/Eigene-Befehle/Organisation/TaskShare'] },
            { type: 'category', label: 'Partner-Liste', link: { type: 'generated-index' }, items: ['discord/team-bereich/Partner-Liste/PartnerListAdd', 'discord/team-bereich/Partner-Liste/PartnerListEdit', 'discord/team-bereich/Partner-Liste/PartnerListDelete'] },
            { type: 'category', label: 'Ping-Schutz', link: { type: 'generated-index' }, items: ['discord/team-bereich/Ping-Schutz/Team-Befehle/PingProtectionUserPanel', 'discord/team-bereich/Ping-Schutz/Team-Befehle/PingProtectionUserHistory', 'discord/team-bereich/Ping-Schutz/Team-Befehle/PingProtectionUserActionsHistory'] },
            { type: 'category', label: 'Sammel-die-Codes', link: { type: 'generated-index' }, items: ['discord/team-bereich/Sammel-die-Codes/Admin-Befehle/HuntTheCodeAdminCreateCode', 'discord/team-bereich/Sammel-die-Codes/Admin-Befehle/HuntTheCodeAdminReport', 'discord/team-bereich/Sammel-die-Codes/Admin-Befehle/HuntTheCodeAdminEnd'] },
            { type: 'category', label: 'System-Befehle', link: { type: 'generated-index' }, items: ['discord/team-bereich/Build-In-Commands/Admin-Befehle/Reload'] },
            { type: 'category', label: 'Team-Verwaltung', link: { type: 'generated-index' }, items: ['discord/team-bereich/Eigene-Befehle/Team-Verwaltung/AddTeam', 'discord/team-bereich/Eigene-Befehle/Team-Verwaltung/UpdateTeam', 'discord/team-bereich/Eigene-Befehle/Team-Verwaltung/RemoveTeam', 'discord/team-bereich/Eigene-Befehle/Team-Verwaltung/TeamAbmelden', 'discord/team-bereich/Eigene-Befehle/Team-Verwaltung/TeamWarn', 'discord/team-bereich/Eigene-Befehle/Kommunikation/Gelesen'] },
            { type: 'category', label: 'Teammitglieder-Ziele', link: { type: 'generated-index' }, items: ['discord/team-bereich/Teammitglieder-Ziele/TeamGoalsProgress', 'discord/team-bereich/Teammitglieder-Ziele/TeamGoalsVoiceProgress', 'discord/team-bereich/Teammitglieder-Ziele/TeamGoalsHistory'] },
            { type: 'category', label: 'Umfragen', link: { type: 'generated-index' }, items: ['discord/team-bereich/Umfragen/PollCreate', 'discord/team-bereich/Umfragen/PollEnd', 'discord/team-bereich/Umfragen/PollUserInfos'] },
            { type: 'category', label: 'Vorschläge', link: { type: 'generated-index' }, items: ['discord/team-bereich/Vorschläge/Team-Befehle/SuggestionAccept', 'discord/team-bereich/Vorschläge/Team-Befehle/SuggestionDeny'] },
            { type: 'category', label: 'Wirtschaftssystem', link: { type: 'generated-index' }, items: ['discord/team-bereich/Wirtschaftssystem/Team-Befehle/EconomyAdd', 'discord/team-bereich/Wirtschaftssystem/Team-Befehle/EconomySet', 'discord/team-bereich/Wirtschaftssystem/Team-Befehle/EconomyRemove', 'discord/team-bereich/Wirtschaftssystem/Team-Befehle/EconomyDestroy', 'discord/team-bereich/Wirtschaftssystem/Team-Befehle/EconomyDropMsgEnable', 'discord/team-bereich/Wirtschaftssystem/Team-Befehle/EconomyDropMsgDisable', 'discord/team-bereich/Wirtschaftssystem/Shop/Admin-Befehle/ShopAdd', 'discord/team-bereich/Wirtschaftssystem/Shop/Admin-Befehle/ShopEdit', 'discord/team-bereich/Wirtschaftssystem/Shop/Admin-Befehle/ShopDelete'] },
            ]
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
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/admin-tools' },
              items: [
                {
                  type: 'category',
                  label: 'Admin-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/admin-tools/admin-befehle' },
                  items: [
                    'discord/befehle/custom-bot/Admin-Tools/Admin-Befehle/AdminSetcategory',
                    'discord/befehle/custom-bot/Admin-Tools/Admin-Befehle/AdminMovechannel',
                    'discord/befehle/custom-bot/Admin-Tools/Admin-Befehle/AdminMoverole',
                  ],
                },
                {
                  type: 'category',
                  label: 'Rollen-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/admin-tools/rollen-befehle' },
                  items: [
                    'discord/befehle/custom-bot/Admin-Tools/Rollen-Befehle/RolesStatus',
                    'discord/befehle/custom-bot/Admin-Tools/Rollen-Befehle/RolesGive',
                    'discord/befehle/custom-bot/Admin-Tools/Rollen-Befehle/RolesRemove',
                  ],
                },
                {
                  type: 'category',
                  label: 'Extra-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/admin-tools/extra-befehle' },
                  items: [
                    'discord/befehle/custom-bot/Admin-Tools/Extra-Befehle/Stealemote',
                  ],
                },
              ],
            },

            /* --- A: AFK System --- */
            {
              type: 'category',
              label: 'AFK System',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/afk-system' },
              items: [
                'discord/befehle/custom-bot/AFK-System/AFK-Befehle/AFKStart',
                'discord/befehle/custom-bot/AFK-System/AFK-Befehle/AFKEnd',
              ],
            },

            /* --- A: Anonymer Chat --- */
            {
              type: 'category',
              label: 'Anonymer Chat',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/anonymer-chat' },
              items: [
                {
                  type: 'category',
                  label: 'Nutzer-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/anonymer-chat/nutzer-befehle' },
                  items: [
                    'discord/befehle/custom-bot/Anonymer-Chat/Nutzer-Befehle/AnonymousMessage',
                  ],
                },
                {
                  type: 'category',
                  label: 'Moderator-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/anonymer-chat/moderator-befehle' },
                  items: [
                    'discord/befehle/custom-bot/Anonymer-Chat/Moderator-Befehle/ModerateAnonymousChannelEnable',
                    'discord/befehle/custom-bot/Anonymer-Chat/Moderator-Befehle/ModerateAnonymousChannelDisable',
                    'discord/befehle/custom-bot/Anonymer-Chat/Moderator-Befehle/ModerateAnonymousChannelDeleteMessage',
                  ],
                },
              ],
            },

            /* --- B: BetterStatus --- */
            {
              type: 'category',
              label: 'BetterStatus',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/betterstatus' },
              items: [
                'discord/befehle/custom-bot/Betterstatus/Status',
              ],
            },

            /* --- B: Bewerbungen --- */
            {
              type: 'category',
              label: 'Bewerbungen',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/bewerbungen' },
              items: [
                'discord/befehle/custom-bot/Bewerbungen/Apply'
              ],
            },

            /* --- B: Build-In-Commands --- */
            {
              type: 'category',
              label: 'Build-In-Commands (Allgemein/System)',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/build-in-commands' },
              items: [
                {
                  type: 'category',
                  label: 'Nutzer-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/build-in-commands/nutzer-befehle' },
                  items: [
                    'discord/befehle/custom-bot/Build-In-Commands/Nutzer-Befehle/Help',
                  ],
                },
                {
                  type: 'category',
                  label: 'Admin-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/build-in-commands/admin-befehle' },
                  items: [
                    'discord/befehle/custom-bot/Build-In-Commands/Admin-Befehle/Reload',
                  ],
                },
              ],
            },

            /* --- C: Color me --- */
            {
              type: 'category',
              label: 'Color me',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/color-me' },
              items: [
                'discord/befehle/custom-bot/Color-me/Color-meManage',
                'discord/befehle/custom-bot/Color-me/Color-meRemove',
              ],
            },

            /* --- E: Einladungsverfolgung --- */
            {
              type: 'category',
              label: 'Einladungsverfolgung',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/einladungsverfolgung' },
              items: [
                'discord/befehle/custom-bot/Einladungsverfolgung/TraceInvites',
              ],
            },

            /* --- E: Erinnerungen --- */
            {
              type: 'category',
              label: 'Erinnerungen',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/erinnerungen' },
              items: [
                'discord/befehle/custom-bot/Erinnerungen/RemindMe',
              ],
            },

            /* --- E: Errate die Nummer --- */
            {
              type: 'category',
              label: 'Errate die Nummer',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/errate-die-nummer' },
              items: [
                'discord/befehle/custom-bot/Errate-die-Nummer/GuessCreate',
                'discord/befehle/custom-bot/Errate-die-Nummer/GuessStatus',
                'discord/befehle/custom-bot/Errate-die-Nummer/GuessEnd',
              ],
            },

            /* --- F: Fehlermeldungen --- */
            {
              type: 'category',
              label: 'Fehlermeldungen',
              link: { type: 'generated-index', slug: '/alle-befehle/fehlermeldungen' },
              items: [
                'discord/befehle/custom-bot/Eigene-Befehle/Fehlermeldungen/BugReport',
              ],
            },

            /* --- F: Fun-Befehle --- */
            {
              type: 'category',
              label: 'Fun-Befehle',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/fun-befehle' },
              items: [
                {
                  type: 'category',
                  label: 'Interaktions-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/fun-befehle/interaktions-befehle' },
                  items: [
                    'discord/befehle/custom-bot/Fun-Befehle/Interaktions-Befehle/FunHug',
                    'discord/befehle/custom-bot/Fun-Befehle/Interaktions-Befehle/FunPat',
                    'discord/befehle/custom-bot/Fun-Befehle/Interaktions-Befehle/FunKiss',
                    'discord/befehle/custom-bot/Fun-Befehle/Interaktions-Befehle/FunSlap',
                  ],
                },
                {
                  type: 'category',
                  label: 'Random-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/fun-befehle/random-befehle' },
                  items: [
                    'discord/befehle/custom-bot/Fun-Befehle/Random-Befehle/RandomNumber',
                    'discord/befehle/custom-bot/Fun-Befehle/Random-Befehle/RandomCoinflip',
                    'discord/befehle/custom-bot/Fun-Befehle/Random-Befehle/RandomDice',
                    'discord/befehle/custom-bot/Fun-Befehle/Random-Befehle/Random8Ball',
                    'discord/befehle/custom-bot/Fun-Befehle/Random-Befehle/RandomIkea-name',
                  ],
                },
              ],
            },

            /* --- G: Geburtstags-Kalender --- */
            {
              type: 'category',
              label: 'Geburtstags-Kalender',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/geburtstags-kalender' },
              items: [
                {
                  type: 'category',
                  label: 'Nutzer-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/geburtstags-kalender/nutzer-befehle' },
                  items: [
                    'discord/befehle/custom-bot/Geburtstags-Kalender/Nutzer-Befehle/BirthdayStatus',
                    'discord/befehle/custom-bot/Geburtstags-Kalender/Nutzer-Befehle/BirthdaySet',
                    'discord/befehle/custom-bot/Geburtstags-Kalender/Nutzer-Befehle/BirthdayDelete',
                  ],
                },
                {
                  type: 'category',
                  label: 'Admin-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/geburtstags-kalender/admin-befehle' },
                  items: [
                    'discord/befehle/custom-bot/Geburtstags-Kalender/Admin-Befehle/ManageBirthdayUnlock',
                    'discord/befehle/custom-bot/Geburtstags-Kalender/Admin-Befehle/ManageBirthdayLock',
                    'discord/befehle/custom-bot/Geburtstags-Kalender/Admin-Befehle/ManageBirthdaySet',
                    'discord/befehle/custom-bot/Geburtstags-Kalender/Admin-Befehle/ManageBirthdayRemove',
                  ],
                },
              ],
            },

            /* --- G: Gewinnspiele --- */
            {
              type: 'category',
              label: 'Gewinnspiele',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/gewinnspiele' },
              items: [
                {
                  type: 'category',
                  label: 'Nutzer-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/gewinnspiele/nutzer-befehle' },
                  items: [
                    'discord/befehle/custom-bot/Gewinnspiele/Nutzer-Befehle/GMessages',
                  ],
                },
                {
                  type: 'category',
                  label: 'Team-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/gewinnspiele/team-befehle' },
                  items: [
                    'discord/befehle/custom-bot/Gewinnspiele/Team-Befehle/GmanageStart',
                    'discord/befehle/custom-bot/Gewinnspiele/Team-Befehle/GmanageReroll',
                    'discord/befehle/custom-bot/Gewinnspiele/Team-Befehle/GmanageEnd',
                  ],
                },
              ],
            },

            /* --- I: Info-Befehle --- */
            {
              type: 'category',
              label: 'Info-Befehle',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/info-befehle' },
              items: [
                'discord/befehle/custom-bot/Info-Befehle/InfoUser',
                'discord/befehle/custom-bot/Info-Befehle/InfoServer',
                'discord/befehle/custom-bot/Info-Befehle/InfoChannel',
                'discord/befehle/custom-bot/Info-Befehle/InfoRole',
              ],
            },

            /* --- K: Kommunikation --- */
            {
              type: 'category',
              label: 'Kommunikation',
              link: { type: 'generated-index', slug: '/alle-befehle/kommunikation' },
              items: [
                'discord/team-bereich/Eigene-Befehle/Kommunikation/DM',
                'discord/team-bereich/Eigene-Befehle/Kommunikation/Gelesen',
                'discord/team-bereich/Eigene-Befehle/Kommunikation/ShoutOut',
              ],
            },

            /* --- L: Level-System --- */
            {
              type: 'category',
              label: 'Level-System',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/level-system' },
              items: [
                {
                  type: 'category',
                  label: 'Nutzer-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/level-system/nutzer-befehle' },
                  items: [
                    'discord/befehle/custom-bot/Level-System/Nutzer-Befehle/LevelProfile',
                    'discord/befehle/custom-bot/Level-System/Nutzer-Befehle/LevelLeaderboard',
                  ],
                },
                {
                  type: 'category',
                  label: 'Admin-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/level-system/admin-befehle' },
                  items: [
                    'discord/befehle/custom-bot/Level-System/Admin-Befehle/ManageLevelSet',
                    'discord/befehle/custom-bot/Level-System/Admin-Befehle/ManageLevelAdd',
                    'discord/befehle/custom-bot/Level-System/Admin-Befehle/ManageLevelRemove',
                    'discord/befehle/custom-bot/Level-System/Admin-Befehle/ManageLevelXPSet',
                    'discord/befehle/custom-bot/Level-System/Admin-Befehle/ManageLevelXPAdd',
                    'discord/befehle/custom-bot/Level-System/Admin-Befehle/ManageLevelXPRemove',
                    'discord/befehle/custom-bot/Level-System/Admin-Befehle/ManageLevelResetXP',
                  ],
                },
              ],
            },

            /* --- M: Massenrolle --- */
            {
              type: 'category',
              label: 'Massenrolle',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/massenrolle' },
              items: [
                'discord/befehle/custom-bot/Massenrolle/MassroleAdd',
                'discord/befehle/custom-bot/Massenrolle/MassroleRemove',
                'discord/befehle/custom-bot/Massenrolle/MassroleRemoveAll',
              ],
            },

            /* --- M: Minispiele --- */
            {
              type: 'category',
              label: 'Minispiele',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/minispiele' },
              items: [
                'discord/befehle/custom-bot/Minispiele/Duel',
                'discord/befehle/custom-bot/Minispiele/Rock-Paper-Scissors',
                'discord/befehle/custom-bot/Minispiele/Tic-Tac-Toe',
              ],
            },

            /* --- M: Moderation-und-Sicherheit --- */
            {
              type: 'category',
              label: 'Moderation und Sicherheit',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/moderation-und-sicherheit' },
              items: [
                {
                  type: 'category',
                  label: 'Nutzer-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/moderation-und-sicherheit/nutzer-befehle' },
                  items: [
                    'discord/befehle/custom-bot/Moderation-und-Sicherheit/Nutzer-Befehle/ModerateReport',
                  ],
                },
                {
                  type: 'category',
                  label: 'Moderations-Aktionen',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/moderation-und-sicherheit/moderations-aktionen' },
                  items: [
                    'discord/befehle/custom-bot/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateActions',
                    'discord/befehle/custom-bot/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateWarn',
                    'discord/befehle/custom-bot/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateRevokeWarn',
                    'discord/befehle/custom-bot/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateMute',
                    'discord/befehle/custom-bot/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateUnmute',
                    'discord/befehle/custom-bot/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateKick',
                    'discord/befehle/custom-bot/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateBan',
                    'discord/befehle/custom-bot/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateUnban',
                    'discord/befehle/custom-bot/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateClear',
                    'discord/befehle/custom-bot/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateQuarantine',
                    'discord/befehle/custom-bot/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateUnquarantine',
                    'discord/befehle/custom-bot/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateChannelMute',
                    'discord/befehle/custom-bot/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateRemoveChannelMute',
                  ],
                },
                {
                  type: 'category',
                  label: 'Kanal-Verwaltung',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/moderation-und-sicherheit/kanal-verwaltung' },
                  items: [
                    'discord/befehle/custom-bot/Moderation-und-Sicherheit/Kanal-Verwaltung/ModerateLock',
                    'discord/befehle/custom-bot/Moderation-und-Sicherheit/Kanal-Verwaltung/ModerateUnlock',
                    'discord/befehle/custom-bot/Moderation-und-Sicherheit/Kanal-Verwaltung/ModerateLockdown',
                  ],
                },
                {
                  type: 'category',
                  label: 'Notizen',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/moderation-und-sicherheit/notizen' },
                  items: [
                    'discord/befehle/custom-bot/Moderation-und-Sicherheit/Notizen/ModerateNotesView',
                    'discord/befehle/custom-bot/Moderation-und-Sicherheit/Notizen/ModerateNotesCreate',
                    'discord/befehle/custom-bot/Moderation-und-Sicherheit/Notizen/ModerateNotesEdit',
                    'discord/befehle/custom-bot/Moderation-und-Sicherheit/Notizen/ModerateNotesDelete',
                  ],
                },
              ],
            },

            /* --- O: Organisation --- */
            {
              type: 'category',
              label: 'Organisation',
              link: { type: 'generated-index', slug: '/alle-befehle/organisation' },
              items: [
                'discord/team-bereich/Eigene-Befehle/Organisation/TaskShare',
                'discord/team-bereich/Eigene-Befehle/Organisation/PartnerGiveaway',
                'discord/team-bereich/Eigene-Befehle/Organisation/TeamsitzungErstellen',
              ],
            },

            /* --- P: Partner-Liste --- */
            {
              type: 'category',
              label: 'Partner-Liste',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/partner-liste' },
              items: [
                'discord/befehle/custom-bot/Partner-Liste/PartnerListAdd',
                'discord/befehle/custom-bot/Partner-Liste/PartnerListEdit',
                'discord/befehle/custom-bot/Partner-Liste/PartnerListDelete',
              ],
            },

            /* --- P: Ping-Schutz --- */
            {
              type: 'category',
              label: 'Ping-Schutz',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/ping-schutz' },
              items: [
                {
                  type: 'category',
                  label: 'Nutzer-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/ping-schutz/nutzer-befehle' },
                  items: [
                    'discord/befehle/custom-bot/Ping-Schutz/Nutzer-Befehle/PingProtectionListProtected',
                    'discord/befehle/custom-bot/Ping-Schutz/Nutzer-Befehle/PingProtectionListWhitelisted',
                  ],
                },
                {
                  type: 'category',
                  label: 'Team-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/ping-schutz/team-befehle' },
                  items: [
                    'discord/befehle/custom-bot/Ping-Schutz/Team-Befehle/PingProtectionUserActionsHistory',
                    'discord/befehle/custom-bot/Ping-Schutz/Team-Befehle/PingProtectionUserHistory',
                    'discord/befehle/custom-bot/Ping-Schutz/Team-Befehle/PingProtectionUserPanel',
                  ],
                },
              ],
            },

            /* --- S: Sammel-die-Codes --- */
            {
              type: 'category',
              label: 'Sammel die Codes',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/sammel-die-codes' },
              items: [
                {
                  type: 'category',
                  label: 'Nutzer-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/sammel-die-codes/nutzer-befehle' },
                  items: [
                    'discord/befehle/custom-bot/Sammel-die-Codes/Nutzer-Befehle/HuntTheCodeProfile',
                    'discord/befehle/custom-bot/Sammel-die-Codes/Nutzer-Befehle/HuntTheCodeLeaderboard',
                    'discord/befehle/custom-bot/Sammel-die-Codes/Nutzer-Befehle/HuntTheCodeRedeem',
                  ],
                },
                {
                  type: 'category',
                  label: 'Admin-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/sammel-die-codes/admin-befehle' },
                  items: [
                    'discord/befehle/custom-bot/Sammel-die-Codes/Admin-Befehle/HuntTheCodeAdminReport',
                    'discord/befehle/custom-bot/Sammel-die-Codes/Admin-Befehle/HuntTheCodeAdminCreateCode',
                    'discord/befehle/custom-bot/Sammel-die-Codes/Admin-Befehle/HuntTheCodeAdminEnd',
                  ],
                },
              ],
            },

            /* --- S: Schach --- */
            {
              type: 'category',
              label: 'Schach',
              link: { type: 'generated-index', slug: '/alle-befehle/schach' },
              items: [
                'discord/befehle/custom-bot/Schach/ChessChallenge', 
                'discord/befehle/custom-bot/Schach/ChessChallengeAI', 
                'discord/befehle/custom-bot/Schach/ChessGames', 
                'discord/befehle/custom-bot/Schach/ChessHistory'
              ],
            },

            /* --- S: Support --- */
            {
              type: 'category',
              label: 'TerminAnfragen',
              link: { type: 'generated-index', slug: '/alle-befehle/support' },
              items: [
                'discord/befehle/custom-bot/Eigene-Befehle/Support/TerminAnfragen',
              ],
            },

            /* --- T: Teammitglieder-Ziele --- */
            {
              type: 'category',
              label: 'Teammitglieder-Ziele',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/teammitglieder-ziele' },
              items: [
                'discord/befehle/custom-bot/Teammitglieder-Ziele/TeamGoalsHistory',
                'discord/befehle/custom-bot/Teammitglieder-Ziele/TeamGoalsProgress',
                'discord/befehle/custom-bot/Teammitglieder-Ziele/TeamGoalsVoiceProgress',
              ],
            },

            /* --- T: Team-Verwaltung (Eigene Befehle) --- */
            { 
              type: 'category', 
              label: 'Team-Verwaltung', 
              link: { type: 'generated-index' }, 
              items: [
                'discord/team-bereich/Eigene-Befehle/Team-Verwaltung/AddTeam',
                'discord/team-bereich/Eigene-Befehle/Team-Verwaltung/UpdateTeam',
                'discord/team-bereich/Eigene-Befehle/Team-Verwaltung/RemoveTeam',
                'discord/team-bereich/Eigene-Befehle/Team-Verwaltung/TeamAbmelden',
                'discord/team-bereich/Eigene-Befehle/Team-Verwaltung/TeamWarn',
              ] 
            },

            /* --- T: Temporäre Channel --- */
            {
              type: 'category',
              label: 'Temporäre Channel',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/temporäre-channel' },
              items: [
                'discord/befehle/custom-bot/Temporäre-Channel/TempChannelMode',
                'discord/befehle/custom-bot/Temporäre-Channel/TempChannelAddUser',
                'discord/befehle/custom-bot/Temporäre-Channel/TempChannelRemoveUser',
                'discord/befehle/custom-bot/Temporäre-Channel/TempChannelListUsers',
                'discord/befehle/custom-bot/Temporäre-Channel/TempChannelEdit',
              ],
            },

            /* --- U: Umfragen --- */
            {
              type: 'category',
              label: 'Umfragen',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/umfragen' },
              items: [
                'discord/befehle/custom-bot/Umfragen/PollUserInfos',
                'discord/befehle/custom-bot/Umfragen/PollCreate',
                'discord/befehle/custom-bot/Umfragen/PollEnd',
              ],
            },

            /* --- V: Vorschläge --- */
            {
              type: 'category',
              label: 'Vorschläge',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/vorschlaege' },
              items: [
                {
                  type: 'category',
                  label: 'Nutzer-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/vorschlaege/nutzer-befehle' },
                  items: [
                    'discord/befehle/custom-bot/Vorschläge/Nutzer-Befehle/SuggestionSubmit',
                  ],
                },
                {
                  type: 'category',
                  label: 'Team-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/vorschlaege/team-befehle' },
                  items: [
                    'discord/befehle/custom-bot/Vorschläge/Team-Befehle/SuggestionAccept',
                    'discord/befehle/custom-bot/Vorschläge/Team-Befehle/SuggestionDeny',
                  ],
                },
              ],
            },

            /* --- W: Wirtschaftssystem --- */
            {
              type: 'category',
              label: 'Wirtschaftssystem',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/wirtschaftssystem' },
              items: [
                {
                  type: 'category',
                  label: 'Finanzen',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/wirtschaftssystem/finanzen' },
                  items: [
                    'discord/befehle/custom-bot/Wirtschaftssystem/Finanzen/EconomyBalance',
                    'discord/befehle/custom-bot/Wirtschaftssystem/Finanzen/EconomyDeposit',
                  ],
                },
                {
                  type: 'category',
                  label: 'Geldquellen',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/wirtschaftssystem/geldquellen' },
                  items: [
                    'discord/befehle/custom-bot/Wirtschaftssystem/Geldquellen/EconomyCrime',
                    'discord/befehle/custom-bot/Wirtschaftssystem/Geldquellen/EconomyDaily',
                    'discord/befehle/custom-bot/Wirtschaftssystem/Geldquellen/EconomyRob',
                    'discord/befehle/custom-bot/Wirtschaftssystem/Geldquellen/EconomyWork',
                  ],
                },
                {
                  type: 'category',
                  label: 'Shop',
                  items: [
                    {
                      type: 'category',
                      label: 'Nutzer-Befehle',
                      items: [
                        'discord/befehle/custom-bot/Wirtschaftssystem/Shop/Nutzer-Befehle/ShopBuy',
                        'discord/befehle/custom-bot/Wirtschaftssystem/Shop/Nutzer-Befehle/ShopList',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Admin-Befehle',
                      items: [
                        'discord/befehle/custom-bot/Wirtschaftssystem/Shop/Admin-Befehle/ShopAdd',
                        'discord/befehle/custom-bot/Wirtschaftssystem/Shop/Admin-Befehle/ShopDelete',
                        'discord/befehle/custom-bot/Wirtschaftssystem/Shop/Admin-Befehle/ShopEdit',
                      ],
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'Team-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bot/wirtschaftssystem/team-befehle' },
                  items: [
                    'discord/befehle/custom-bot/Wirtschaftssystem/Team-Befehle/EconomyAdd',
                    'discord/befehle/custom-bot/Wirtschaftssystem/Team-Befehle/EconomyDestroy',
                    'discord/befehle/custom-bot/Wirtschaftssystem/Team-Befehle/EconomyDropMsgDisable',
                    'discord/befehle/custom-bot/Wirtschaftssystem/Team-Befehle/EconomyDropMsgEnable',
                    'discord/befehle/custom-bot/Wirtschaftssystem/Team-Befehle/EconomyRemove',
                    'discord/befehle/custom-bot/Wirtschaftssystem/Team-Befehle/EconomySet',
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