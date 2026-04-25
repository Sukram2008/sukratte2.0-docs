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
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botadmin-tools' },
              items: [
                {
                  type: 'category',
                  label: 'Admin-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botadmin-tools/admin-befehle' },
                  items: [
                    'discord/befehle/custom-botAdmin-Tools/Admin-Befehle/AdminSetcategory',
                    'discord/befehle/custom-botAdmin-Tools/Admin-Befehle/AdminMovechannel',
                    'discord/befehle/custom-botAdmin-Tools/Admin-Befehle/AdminMoverole',
                  ],
                },
                {
                  type: 'category',
                  label: 'Rollen-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botadmin-tools/rollen-befehle' },
                  items: [
                    'discord/befehle/custom-botAdmin-Tools/Rollen-Befehle/RolesStatus',
                    'discord/befehle/custom-botAdmin-Tools/Rollen-Befehle/RolesGive',
                    'discord/befehle/custom-botAdmin-Tools/Rollen-Befehle/RolesRemove',
                  ],
                },
                {
                  type: 'category',
                  label: 'Extra-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botadmin-tools/extra-befehle' },
                  items: [
                    'discord/befehle/custom-botAdmin-Tools/Extra-Befehle/Stealemote',
                  ],
                },
              ],
            },

            /* --- A: AFK System --- */
            {
              type: 'category',
              label: 'AFK System',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botafk-system' },
              items: [
                'discord/befehle/custom-botAFK-System/AFK-Befehle/AFKStart',
                'discord/befehle/custom-botAFK-System/AFK-Befehle/AFKEnd',
              ],
            },

            /* --- A: Anonymer Chat --- */
            {
              type: 'category',
              label: 'Anonymer Chat',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botanonymer-chat' },
              items: [
                {
                  type: 'category',
                  label: 'Nutzer-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botanonymer-chat/nutzer-befehle' },
                  items: [
                    'discord/befehle/custom-botAnonymer-Chat/Nutzer-Befehle/AnonymousMessage',
                  ],
                },
                {
                  type: 'category',
                  label: 'Moderator-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botanonymer-chat/moderator-befehle' },
                  items: [
                    'discord/befehle/custom-botAnonymer-Chat/Moderator-Befehle/ModerateAnonymousChannelEnable',
                    'discord/befehle/custom-botAnonymer-Chat/Moderator-Befehle/ModerateAnonymousChannelDisable',
                    'discord/befehle/custom-botAnonymer-Chat/Moderator-Befehle/ModerateAnonymousChannelDeleteMessage',
                  ],
                },
              ],
            },

            /* --- B: BetterStatus --- */
            {
              type: 'category',
              label: 'BetterStatus',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botbetterstatus' },
              items: [
                'discord/befehle/custom-botBetterstatus/Status',
              ],
            },

            /* --- B: Bewerbungen --- */
            {
              type: 'category',
              label: 'Bewerbungen',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botbewerbungen' },
              items: [
                'discord/befehle/custom-botBewerbungen/Apply'
              ],
            },

            /* --- B: Build-In-Commands --- */
            {
              type: 'category',
              label: 'Build-In-Commands (Allgemein/System)',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botbuild-in-commands' },
              items: [
                {
                  type: 'category',
                  label: 'Nutzer-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botbuild-in-commands/nutzer-befehle' },
                  items: [
                    'discord/befehle/custom-botBuild-In-Commands/Nutzer-Befehle/Help',
                  ],
                },
                {
                  type: 'category',
                  label: 'Admin-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botbuild-in-commands/admin-befehle' },
                  items: [
                    'discord/befehle/custom-botBuild-In-Commands/Admin-Befehle/Reload',
                  ],
                },
              ],
            },

            /* --- C: Color me --- */
            {
              type: 'category',
              label: 'Color me',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botcolor-me' },
              items: [
                'discord/befehle/custom-botColor-me/Color-meManage',
                'discord/befehle/custom-botColor-me/Color-meRemove',
              ],
            },

            /* --- E: Einladungsverfolgung --- */
            {
              type: 'category',
              label: 'Einladungsverfolgung',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-boteinladungsverfolgung' },
              items: [
                'discord/befehle/custom-botEinladungsverfolgung/TraceInvites',
              ],
            },

            /* --- E: Erinnerungen --- */
            {
              type: 'category',
              label: 'Erinnerungen',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-boterinnerungen' },
              items: [
                'discord/befehle/custom-botErinnerungen/RemindMe',
              ],
            },

            /* --- E: Errate die Nummer --- */
            {
              type: 'category',
              label: 'Errate die Nummer',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-boterrate-die-nummer' },
              items: [
                'discord/befehle/custom-botErrate-die-Nummer/GuessCreate',
                'discord/befehle/custom-botErrate-die-Nummer/GuessStatus',
                'discord/befehle/custom-botErrate-die-Nummer/GuessEnd',
              ],
            },

            /* --- F: Fehlermeldungen --- */
            {
              type: 'category',
              label: 'Fehlermeldungen',
              link: { type: 'generated-index', slug: '/alle-befehle/fehlermeldungen' },
              items: [
                'discord/befehle/custom-botEigene-Befehle/Fehlermeldungen/BugReport',
              ],
            },

            /* --- F: Fun-Befehle --- */
            {
              type: 'category',
              label: 'Fun-Befehle',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botfun-befehle' },
              items: [
                {
                  type: 'category',
                  label: 'Interaktions-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botfun-befehle/interaktions-befehle' },
                  items: [
                    'discord/befehle/custom-botFun-Befehle/Interaktions-Befehle/FunHug',
                    'discord/befehle/custom-botFun-Befehle/Interaktions-Befehle/FunPat',
                    'discord/befehle/custom-botFun-Befehle/Interaktions-Befehle/FunKiss',
                    'discord/befehle/custom-botFun-Befehle/Interaktions-Befehle/FunSlap',
                  ],
                },
                {
                  type: 'category',
                  label: 'Random-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botfun-befehle/random-befehle' },
                  items: [
                    'discord/befehle/custom-botFun-Befehle/Random-Befehle/RandomNumber',
                    'discord/befehle/custom-botFun-Befehle/Random-Befehle/RandomCoinflip',
                    'discord/befehle/custom-botFun-Befehle/Random-Befehle/RandomDice',
                    'discord/befehle/custom-botFun-Befehle/Random-Befehle/Random8Ball',
                    'discord/befehle/custom-botFun-Befehle/Random-Befehle/RandomIkea-name',
                  ],
                },
              ],
            },

            /* --- G: Geburtstags-Kalender --- */
            {
              type: 'category',
              label: 'Geburtstags-Kalender',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botgeburtstags-kalender' },
              items: [
                {
                  type: 'category',
                  label: 'Nutzer-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botgeburtstags-kalender/nutzer-befehle' },
                  items: [
                    'discord/befehle/custom-botGeburtstags-Kalender/Nutzer-Befehle/BirthdayStatus',
                    'discord/befehle/custom-botGeburtstags-Kalender/Nutzer-Befehle/BirthdaySet',
                    'discord/befehle/custom-botGeburtstags-Kalender/Nutzer-Befehle/BirthdayDelete',
                  ],
                },
                {
                  type: 'category',
                  label: 'Admin-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botgeburtstags-kalender/admin-befehle' },
                  items: [
                    'discord/befehle/custom-botGeburtstags-Kalender/Admin-Befehle/ManageBirthdayUnlock',
                    'discord/befehle/custom-botGeburtstags-Kalender/Admin-Befehle/ManageBirthdayLock',
                    'discord/befehle/custom-botGeburtstags-Kalender/Admin-Befehle/ManageBirthdaySet',
                    'discord/befehle/custom-botGeburtstags-Kalender/Admin-Befehle/ManageBirthdayRemove',
                  ],
                },
              ],
            },

            /* --- G: Gewinnspiele --- */
            {
              type: 'category',
              label: 'Gewinnspiele',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botgewinnspiele' },
              items: [
                {
                  type: 'category',
                  label: 'Nutzer-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botgewinnspiele/nutzer-befehle' },
                  items: [
                    'discord/befehle/custom-botGewinnspiele/Nutzer-Befehle/GMessages',
                  ],
                },
                {
                  type: 'category',
                  label: 'Team-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botgewinnspiele/team-befehle' },
                  items: [
                    'discord/befehle/custom-botGewinnspiele/Team-Befehle/GmanageStart',
                    'discord/befehle/custom-botGewinnspiele/Team-Befehle/GmanageReroll',
                    'discord/befehle/custom-botGewinnspiele/Team-Befehle/GmanageEnd',
                  ],
                },
              ],
            },

            /* --- I: Info-Befehle --- */
            {
              type: 'category',
              label: 'Info-Befehle',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botinfo-befehle' },
              items: [
                'discord/befehle/custom-botInfo-Befehle/InfoUser',
                'discord/befehle/custom-botInfo-Befehle/InfoServer',
                'discord/befehle/custom-botInfo-Befehle/InfoChannel',
                'discord/befehle/custom-botInfo-Befehle/InfoRole',
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
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botlevel-system' },
              items: [
                {
                  type: 'category',
                  label: 'Nutzer-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botlevel-system/nutzer-befehle' },
                  items: [
                    'discord/befehle/custom-botLevel-System/Nutzer-Befehle/LevelProfile',
                    'discord/befehle/custom-botLevel-System/Nutzer-Befehle/LevelLeaderboard',
                  ],
                },
                {
                  type: 'category',
                  label: 'Admin-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botlevel-system/admin-befehle' },
                  items: [
                    'discord/befehle/custom-botLevel-System/Admin-Befehle/ManageLevelSet',
                    'discord/befehle/custom-botLevel-System/Admin-Befehle/ManageLevelAdd',
                    'discord/befehle/custom-botLevel-System/Admin-Befehle/ManageLevelRemove',
                    'discord/befehle/custom-botLevel-System/Admin-Befehle/ManageLevelXPSet',
                    'discord/befehle/custom-botLevel-System/Admin-Befehle/ManageLevelXPAdd',
                    'discord/befehle/custom-botLevel-System/Admin-Befehle/ManageLevelXPRemove',
                    'discord/befehle/custom-botLevel-System/Admin-Befehle/ManageLevelResetXP',
                  ],
                },
              ],
            },

            /* --- M: Massenrolle --- */
            {
              type: 'category',
              label: 'Massenrolle',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botmassenrolle' },
              items: [
                'discord/befehle/custom-botMassenrolle/MassroleAdd',
                'discord/befehle/custom-botMassenrolle/MassroleRemove',
                'discord/befehle/custom-botMassenrolle/MassroleRemoveAll',
              ],
            },

            /* --- M: Minispiele --- */
            {
              type: 'category',
              label: 'Minispiele',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botminispiele' },
              items: [
                'discord/befehle/custom-botMinispiele/Duel',
                'discord/befehle/custom-botMinispiele/Rock-Paper-Scissors',
                'discord/befehle/custom-botMinispiele/Tic-Tac-Toe',
              ],
            },

            /* --- M: Moderation-und-Sicherheit --- */
            {
              type: 'category',
              label: 'Moderation und Sicherheit',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botmoderation-und-sicherheit' },
              items: [
                {
                  type: 'category',
                  label: 'Nutzer-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botmoderation-und-sicherheit/nutzer-befehle' },
                  items: [
                    'discord/befehle/custom-botModeration-und-Sicherheit/Nutzer-Befehle/ModerateReport',
                  ],
                },
                {
                  type: 'category',
                  label: 'Moderations-Aktionen',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botmoderation-und-sicherheit/moderations-aktionen' },
                  items: [
                    'discord/befehle/custom-botModeration-und-Sicherheit/Moderations-Aktionen/ModerateActions',
                    'discord/befehle/custom-botModeration-und-Sicherheit/Moderations-Aktionen/ModerateWarn',
                    'discord/befehle/custom-botModeration-und-Sicherheit/Moderations-Aktionen/ModerateRevokeWarn',
                    'discord/befehle/custom-botModeration-und-Sicherheit/Moderations-Aktionen/ModerateMute',
                    'discord/befehle/custom-botModeration-und-Sicherheit/Moderations-Aktionen/ModerateUnmute',
                    'discord/befehle/custom-botModeration-und-Sicherheit/Moderations-Aktionen/ModerateKick',
                    'discord/befehle/custom-botModeration-und-Sicherheit/Moderations-Aktionen/ModerateBan',
                    'discord/befehle/custom-botModeration-und-Sicherheit/Moderations-Aktionen/ModerateUnban',
                    'discord/befehle/custom-botModeration-und-Sicherheit/Moderations-Aktionen/ModerateClear',
                    'discord/befehle/custom-botModeration-und-Sicherheit/Moderations-Aktionen/ModerateQuarantine',
                    'discord/befehle/custom-botModeration-und-Sicherheit/Moderations-Aktionen/ModerateUnquarantine',
                    'discord/befehle/custom-botModeration-und-Sicherheit/Moderations-Aktionen/ModerateChannelMute',
                    'discord/befehle/custom-botModeration-und-Sicherheit/Moderations-Aktionen/ModerateRemoveChannelMute',
                  ],
                },
                {
                  type: 'category',
                  label: 'Kanal-Verwaltung',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botmoderation-und-sicherheit/kanal-verwaltung' },
                  items: [
                    'discord/befehle/custom-botModeration-und-Sicherheit/Kanal-Verwaltung/ModerateLock',
                    'discord/befehle/custom-botModeration-und-Sicherheit/Kanal-Verwaltung/ModerateUnlock',
                    'discord/befehle/custom-botModeration-und-Sicherheit/Kanal-Verwaltung/ModerateLockdown',
                  ],
                },
                {
                  type: 'category',
                  label: 'Notizen',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botmoderation-und-sicherheit/notizen' },
                  items: [
                    'discord/befehle/custom-botModeration-und-Sicherheit/Notizen/ModerateNotesView',
                    'discord/befehle/custom-botModeration-und-Sicherheit/Notizen/ModerateNotesCreate',
                    'discord/befehle/custom-botModeration-und-Sicherheit/Notizen/ModerateNotesEdit',
                    'discord/befehle/custom-botModeration-und-Sicherheit/Notizen/ModerateNotesDelete',
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
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botpartner-liste' },
              items: [
                'discord/befehle/custom-botPartner-Liste/PartnerListAdd',
                'discord/befehle/custom-botPartner-Liste/PartnerListEdit',
                'discord/befehle/custom-botPartner-Liste/PartnerListDelete',
              ],
            },

            /* --- P: Ping-Schutz --- */
            {
              type: 'category',
              label: 'Ping-Schutz',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botping-schutz' },
              items: [
                {
                  type: 'category',
                  label: 'Nutzer-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botping-schutz/nutzer-befehle' },
                  items: [
                    'discord/befehle/custom-botPing-Schutz/Nutzer-Befehle/PingProtectionListProtected',
                    'discord/befehle/custom-botPing-Schutz/Nutzer-Befehle/PingProtectionListWhitelisted',
                  ],
                },
                {
                  type: 'category',
                  label: 'Team-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botping-schutz/team-befehle' },
                  items: [
                    'discord/befehle/custom-botPing-Schutz/Team-Befehle/PingProtectionUserActionsHistory',
                    'discord/befehle/custom-botPing-Schutz/Team-Befehle/PingProtectionUserHistory',
                    'discord/befehle/custom-botPing-Schutz/Team-Befehle/PingProtectionUserPanel',
                  ],
                },
              ],
            },

            /* --- S: Sammel-die-Codes --- */
            {
              type: 'category',
              label: 'Sammel die Codes',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botsammel-die-codes' },
              items: [
                {
                  type: 'category',
                  label: 'Nutzer-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botsammel-die-codes/nutzer-befehle' },
                  items: [
                    'discord/befehle/custom-botSammel-die-Codes/Nutzer-Befehle/HuntTheCodeProfile',
                    'discord/befehle/custom-botSammel-die-Codes/Nutzer-Befehle/HuntTheCodeLeaderboard',
                    'discord/befehle/custom-botSammel-die-Codes/Nutzer-Befehle/HuntTheCodeRedeem',
                  ],
                },
                {
                  type: 'category',
                  label: 'Admin-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botsammel-die-codes/admin-befehle' },
                  items: [
                    'discord/befehle/custom-botSammel-die-Codes/Admin-Befehle/HuntTheCodeAdminReport',
                    'discord/befehle/custom-botSammel-die-Codes/Admin-Befehle/HuntTheCodeAdminCreateCode',
                    'discord/befehle/custom-botSammel-die-Codes/Admin-Befehle/HuntTheCodeAdminEnd',
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
                'discord/befehle/custom-botSchach/ChessChallenge', 
                'discord/befehle/custom-botSchach/ChessChallengeAI', 
                'discord/befehle/custom-botSchach/ChessGames', 
                'discord/befehle/custom-botSchach/ChessHistory'
              ],
            },

            /* --- S: Support --- */
            {
              type: 'category',
              label: 'TerminAnfragen',
              link: { type: 'generated-index', slug: '/alle-befehle/support' },
              items: [
                'discord/befehle/custom-botEigene-Befehle/Support/TerminAnfragen',
              ],
            },

            /* --- T: Teammitglieder-Ziele --- */
            {
              type: 'category',
              label: 'Teammitglieder-Ziele',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botteammitglieder-ziele' },
              items: [
                'discord/befehle/custom-botTeammitglieder-Ziele/TeamGoalsHistory',
                'discord/befehle/custom-botTeammitglieder-Ziele/TeamGoalsProgress',
                'discord/befehle/custom-botTeammitglieder-Ziele/TeamGoalsVoiceProgress',
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
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-bottemporäre-channel' },
              items: [
                'discord/befehle/custom-botTemporäre-Channel/TempChannelMode',
                'discord/befehle/custom-botTemporäre-Channel/TempChannelAddUser',
                'discord/befehle/custom-botTemporäre-Channel/TempChannelRemoveUser',
                'discord/befehle/custom-botTemporäre-Channel/TempChannelListUsers',
                'discord/befehle/custom-botTemporäre-Channel/TempChannelEdit',
              ],
            },

            /* --- U: Umfragen --- */
            {
              type: 'category',
              label: 'Umfragen',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botumfragen' },
              items: [
                'discord/befehle/custom-botUmfragen/PollUserInfos',
                'discord/befehle/custom-botUmfragen/PollCreate',
                'discord/befehle/custom-botUmfragen/PollEnd',
              ],
            },

            /* --- V: Vorschläge --- */
            {
              type: 'category',
              label: 'Vorschläge',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botvorschlaege' },
              items: [
                {
                  type: 'category',
                  label: 'Nutzer-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botvorschlaege/nutzer-befehle' },
                  items: [
                    'discord/befehle/custom-botVorschläge/Nutzer-Befehle/SuggestionSubmit',
                  ],
                },
                {
                  type: 'category',
                  label: 'Team-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botvorschlaege/team-befehle' },
                  items: [
                    'discord/befehle/custom-botVorschläge/Team-Befehle/SuggestionAccept',
                    'discord/befehle/custom-botVorschläge/Team-Befehle/SuggestionDeny',
                  ],
                },
              ],
            },

            /* --- W: Wirtschaftssystem --- */
            {
              type: 'category',
              label: 'Wirtschaftssystem',
              link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botwirtschaftssystem' },
              items: [
                {
                  type: 'category',
                  label: 'Finanzen',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botwirtschaftssystem/finanzen' },
                  items: [
                    'discord/befehle/custom-botWirtschaftssystem/Finanzen/EconomyBalance',
                    'discord/befehle/custom-botWirtschaftssystem/Finanzen/EconomyDeposit',
                  ],
                },
                {
                  type: 'category',
                  label: 'Geldquellen',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botwirtschaftssystem/geldquellen' },
                  items: [
                    'discord/befehle/custom-botWirtschaftssystem/Geldquellen/EconomyCrime',
                    'discord/befehle/custom-botWirtschaftssystem/Geldquellen/EconomyDaily',
                    'discord/befehle/custom-botWirtschaftssystem/Geldquellen/EconomyRob',
                    'discord/befehle/custom-botWirtschaftssystem/Geldquellen/EconomyWork',
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
                        'discord/befehle/custom-botWirtschaftssystem/Shop/Nutzer-Befehle/ShopBuy',
                        'discord/befehle/custom-botWirtschaftssystem/Shop/Nutzer-Befehle/ShopList',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Admin-Befehle',
                      items: [
                        'discord/befehle/custom-botWirtschaftssystem/Shop/Admin-Befehle/ShopAdd',
                        'discord/befehle/custom-botWirtschaftssystem/Shop/Admin-Befehle/ShopDelete',
                        'discord/befehle/custom-botWirtschaftssystem/Shop/Admin-Befehle/ShopEdit',
                      ],
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'Team-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/custom-botwirtschaftssystem/team-befehle' },
                  items: [
                    'discord/befehle/custom-botWirtschaftssystem/Team-Befehle/EconomyAdd',
                    'discord/befehle/custom-botWirtschaftssystem/Team-Befehle/EconomyDestroy',
                    'discord/befehle/custom-botWirtschaftssystem/Team-Befehle/EconomyDropMsgDisable',
                    'discord/befehle/custom-botWirtschaftssystem/Team-Befehle/EconomyDropMsgEnable',
                    'discord/befehle/custom-botWirtschaftssystem/Team-Befehle/EconomyRemove',
                    'discord/befehle/custom-botWirtschaftssystem/Team-Befehle/EconomySet',
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