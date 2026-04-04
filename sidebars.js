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
            { type: 'category', label: 'Minispiele', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Minispiele/Duel', 'discord/nutzer-bereich/Minispiele/Tic-Tac-Toe', 'discord/nutzer-bereich/Minispiele/Rock-Paper-Scissors', 'discord/nutzer-bereich/Minispiele/Uno'] },
            { type: 'category', label: 'Moderation & Sicherheit', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Moderation-und-Sicherheit/Nutzer-Befehle/ModerateReport'] },
            { type: 'category', label: 'Ping-Schutz', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Ping-Schutz/Nutzer-Befehle/PingProtectionListProtected', 'discord/nutzer-bereich/Ping-Schutz/Nutzer-Befehle/PingProtectionListWhitelisted'] },
            { type: 'category', label: 'Sammel-die-Codes', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Sammel-die-Codes/Nutzer-Befehle/HuntTheCodeRedeem', 'discord/nutzer-bereich/Sammel-die-Codes/Nutzer-Befehle/HuntTheCodeProfile', 'discord/nutzer-bereich/Sammel-die-Codes/Nutzer-Befehle/HuntTheCodeLeaderboard'] },
            { type: 'category', label: 'Temporäre-Channel', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Temporäre-Channel/TempChannelEdit', 'discord/nutzer-bereich/Temporäre-Channel/TempChannelMode', 'discord/nutzer-bereich/Temporäre-Channel/TempChannelAddUser', 'discord/nutzer-bereich/Temporäre-Channel/TempChannelRemoveUser', 'discord/nutzer-bereich/Temporäre-Channel/TempChannelListUsers'] },
            { type: 'category', label: 'Vorschläge', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Vorschläge/Nutzer-Befehle/SuggestionSubmit'] },
            { type: 'category', label: 'Wirtschaftssystem', link: { type: 'generated-index' }, items: ['discord/nutzer-bereich/Wirtschaftssystem/Finanzen/EconomyBalance', 'discord/nutzer-bereich/Wirtschaftssystem/Finanzen/EconomyDeposit', 'discord/nutzer-bereich/Wirtschaftssystem/Geldquellen/EconomyWork', 'discord/nutzer-bereich/Wirtschaftssystem/Geldquellen/EconomyDaily', 'discord/nutzer-bereich/Wirtschaftssystem/Geldquellen/EconomyCrime', 'discord/nutzer-bereich/Wirtschaftssystem/Geldquellen/EconomyRob'] },
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
            { type: 'category', label: 'Team-Verwaltung', link: { type: 'generated-index' }, items: ['discord/team-bereich/Eigene-Befehle/Team-Verwaltung/AddTeam', 'discord/team-bereich/Eigene-Befehle/Team-Verwaltung/UpdateTeam', 'discord/team-bereich/Eigene-Befehle/Team-Verwaltung/RemoveTeam'] },
            { type: 'category', label: 'Teammitglieder-Ziele', link: { type: 'generated-index' }, items: ['discord/team-bereich/Teammitglieder-Ziele/TeamGoalsProgress', 'discord/team-bereich/Teammitglieder-Ziele/TeamGoalsVoiceProgress', 'discord/team-bereich/Teammitglieder-Ziele/TeamGoalsHistory'] },
            { type: 'category', label: 'Umfragen', link: { type: 'generated-index' }, items: ['discord/team-bereich/Umfragen/PollCreate', 'discord/team-bereich/Umfragen/PollEnd', 'discord/team-bereich/Umfragen/PollUserInfos'] },
            { type: 'category', label: 'Vorschläge', link: { type: 'generated-index' }, items: ['discord/team-bereich/Vorschläge/Team-Befehle/SuggestionAccept', 'discord/team-bereich/Vorschläge/Team-Befehle/SuggestionDeny'] },
            { type: 'category', label: 'Wirtschaftssystem', link: { type: 'generated-index' }, items: ['discord/team-bereich/Wirtschaftssystem/Team-Befehle/EconomyAdd', 'discord/team-bereich/Wirtschaftssystem/Team-Befehle/EconomySet', 'discord/team-bereich/Wirtschaftssystem/Team-Befehle/EconomyRemove', 'discord/team-bereich/Wirtschaftssystem/Team-Befehle/EconomyDestroy', 'discord/team-bereich/Wirtschaftssystem/Team-Befehle/EconomyDropMsgEnable', 'discord/team-bereich/Wirtschaftssystem/Team-Befehle/EconomyDropMsgDisable'] },
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

            /* --- B: Build-In-Commands --- */
            {
              type: 'category',
              label: 'Build-In-Commands (Allgemein/System)',
              link: { type: 'generated-index', slug: '/category/discord/befehle/build-in-commands' },
              items: [
                {
                  type: 'category',
                  label: 'Nutzer-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/build-in-commands/nutzer-befehle' },
                  items: [
                    'discord/befehle/Build-In-Commands/Nutzer-Befehle/Help',
                  ],
                },
                {
                  type: 'category',
                  label: 'Admin-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/build-in-commands/admin-befehle' },
                  items: [
                    'discord/befehle/Build-In-Commands/Admin-Befehle/Reload',
                  ],
                },
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

            /* --- F: Fehlermeldungen --- */
            {
              type: 'category',
              label: 'Fehlermeldungen',
              link: { type: 'generated-index', slug: '/alle-befehle/fehlermeldungen' },
              items: [
                'discord/befehle/Eigene-Befehle/Fehlermeldungen/BugReport',
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
                {
                  type: 'category',
                  label: 'Nutzer-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/ping-schutz/nutzer-befehle' },
                  items: [
                    'discord/befehle/Ping-Schutz/Nutzer-Befehle/PingProtectionListProtected',
                    'discord/befehle/Ping-Schutz/Nutzer-Befehle/PingProtectionListWhitelisted',
                  ],
                },
                {
                  type: 'category',
                  label: 'Team-Befehle',
                  link: { type: 'generated-index', slug: '/category/discord/befehle/ping-schutz/team-befehle' },
                  items: [
                    'discord/befehle/Ping-Schutz/Team-Befehle/PingProtectionUserActionsHistory',
                    'discord/befehle/Ping-Schutz/Team-Befehle/PingProtectionUserHistory',
                    'discord/befehle/Ping-Schutz/Team-Befehle/PingProtectionUserPanel',
                  ],
                },
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

            /* --- S: Support --- */
            {
              type: 'category',
              label: 'TerminAnfragen',
              link: { type: 'generated-index', slug: '/alle-befehle/support' },
              items: [
                'discord/befehle/Eigene-Befehle/Support/TerminAnfragen',
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