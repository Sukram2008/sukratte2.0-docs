// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    /* ==========================================
     * 1. NUTZER-BEREICH
     * ========================================== */
    {
      type: "category",
      label: "Nutzer-Bereich",
      link: { type: "generated-index", slug: "/nutzer" },
      items: [
        {
          type: "category",
          label: "Custom-Bot Befehle",
          link: {
            type: "generated-index",
            slug: "/nutzer/custom-bot-befehle",
          },
          items: [
            {
              type: "category",
              label: "Allgemein",
              link: { type: "generated-index" },
              items: [
                "discord/nutzer-bereich/Build-In-Commands/Nutzer-Befehle/Help",
              ],
            },

            {
              type: "category",
              label: "Interne Statistiken",
              link: { type: "generated-index" },
              items: [
                "discord/nutzer-bereich/Build-In-Commands/Nutzer-Befehle/Interne-Statistiken/AnalyticsPrivacyOptIn",
                "discord/nutzer-bereich/Build-In-Commands/Nutzer-Befehle/Interne-Statistiken/AnalyticsPrivacyOptOut",
                "discord/nutzer-bereich/Build-In-Commands/Nutzer-Befehle/Interne-Statistiken/MyStats",
                "discord/nutzer-bereich/Build-In-Commands/Nutzer-Befehle/Interne-Statistiken/ServerStats",
              ],
            },

            {
              type: "category",
              label: "Fehlermeldungen",
              link: { type: "generated-index" },
              items: [
                "discord/nutzer-bereich/Eigene-Befehle/Fehlermeldungen/BugReport",
              ],
            },

            {
              type: "category",
              label: "AFK-System",
              link: { type: "generated-index" },
              items: [
                "discord/nutzer-bereich/AFK-System/AFK-Befehle/AFKStart",
                "discord/nutzer-bereich/AFK-System/AFK-Befehle/AFKEnd",
              ],
            },

            {
              type: "category",
              label: "Aktivitäts-Streak",
              link: { type: "generated-index" },
              items: [
                "discord/nutzer-bereich/Aktivitäts-Streak/StreakHide",
                "discord/nutzer-bereich/Aktivitäts-Streak/StreakLeaderboard",
                "discord/nutzer-bereich/Aktivitäts-Streak/StreakRestore",
                "discord/nutzer-bereich/Aktivitäts-Streak/StreakView",
              ],
            },

            {
              type: "category",
              label: "Anonymer Chat",
              link: { type: "generated-index" },
              items: [
                "discord/nutzer-bereich/Anonymer-Chat/Nutzer-Befehle/AnonymousMessage",
              ],
            },

            {
              type: "category",
              label: "Bewerbungen",
              link: { type: "generated-index" },
              items: [
                "discord/nutzer-bereich/Bewerbungen/Apply",
              ],
            },

            {
              type: "category",
              label: "Color-me",
              link: { type: "generated-index" },
              items: [
                "discord/nutzer-bereich/Color-me/Color-meManage",
                "discord/nutzer-bereich/Color-me/Color-meRemove",
              ],
            },

            {
              type: "category",
              label: "Support",
              link: { type: "generated-index" },
              items: [
                "discord/nutzer-bereich/Eigene-Befehle/Support/TerminAnfragen",
              ],
            },

            {
              type: "category",
              label: "Erinnerungen",
              link: { type: "generated-index" },
              items: [
                "discord/nutzer-bereich/Erinnerungen/RemindMe",
              ],
            },

            {
              type: "category",
              label: "Fun-Befehle",
              link: { type: "generated-index" },
              items: [
                "discord/nutzer-bereich/Fun-Befehle/Interaktions-Befehle/FunHug",
                "discord/nutzer-bereich/Fun-Befehle/Interaktions-Befehle/FunKiss",
                "discord/nutzer-bereich/Fun-Befehle/Interaktions-Befehle/FunPat",
                "discord/nutzer-bereich/Fun-Befehle/Interaktions-Befehle/FunSlap",

                "discord/nutzer-bereich/Fun-Befehle/Random-Befehle/Random8Ball",
                "discord/nutzer-bereich/Fun-Befehle/Random-Befehle/RandomCoinflip",
                "discord/nutzer-bereich/Fun-Befehle/Random-Befehle/RandomDice",
                "discord/nutzer-bereich/Fun-Befehle/Random-Befehle/RandomIkea-name",
                "discord/nutzer-bereich/Fun-Befehle/Random-Befehle/RandomNumber",
              ],
            },

            {
              type: "category",
              label: "Geburtstags-Kalender",
              link: { type: "generated-index" },
              items: [
                "discord/nutzer-bereich/Geburtstags-Kalender/Nutzer-Befehle/BirthdaySet",
                "discord/nutzer-bereich/Geburtstags-Kalender/Nutzer-Befehle/BirthdayStatus",
                "discord/nutzer-bereich/Geburtstags-Kalender/Nutzer-Befehle/BirthdayDelete",
                "discord/nutzer-bereich/Geburtstags-Kalender/Nutzer-Befehle/BirthdayUpcoming",
              ],
            },

            {
              type: "category",
              label: "Halloween-Event",
              link: { type: "generated-index" },
              items: [
                "discord/nutzer-bereich/Halloween-Event/HalloweenEventInfos",
                "discord/nutzer-bereich/Halloween-Event/Candyshop",
                "discord/nutzer-bereich/Halloween-Event/Spook",
                "discord/nutzer-bereich/Halloween-Event/Trickortreat",
              ],
            },

            {
              type: "category",
              label: "Gewinnspiele",
              link: { type: "generated-index" },
              items: [
                "discord/nutzer-bereich/Gewinnspiele/Nutzer-Befehle/GMessages",
              ],
            },

            {
              type: "category",
              label: "Info-Befehle",
              link: { type: "generated-index" },
              items: [
                "discord/nutzer-bereich/Info-Befehle/InfoUser",
                "discord/nutzer-bereich/Info-Befehle/InfoServer",
                "discord/nutzer-bereich/Info-Befehle/InfoChannel",
                "discord/nutzer-bereich/Info-Befehle/InfoRole",
              ],
            },

            {
              type: "category",
              label: "Level-System",
              link: { type: "generated-index" },
              items: [
                "discord/nutzer-bereich/Level-System/Nutzer-Befehle/LevelProfile",
                "discord/nutzer-bereich/Level-System/Nutzer-Befehle/LevelLeaderboard",
                "discord/nutzer-bereich/Level-System/Nutzer-Befehle/CalculateLevel",
              ],
            },

            {
              type: "category",
              label: "Minispiele",
              link: { type: "generated-index" },
              items: [
                "discord/nutzer-bereich/Minispiele/ConnectFour",
                "discord/nutzer-bereich/Minispiele/Duel",

                {
                  type: "category",
                  label: "Ein-Wort-Geschichte",
                  link: { type: "generated-index" },
                  items: [
                    "discord/nutzer-bereich/Minispiele/Ein-Wort-Geschichte/WordStoryEnd",
                    "discord/nutzer-bereich/Minispiele/Ein-Wort-Geschichte/WordStoryFull",
                    "discord/nutzer-bereich/Minispiele/Ein-Wort-Geschichte/WordStoryNew",
                    "discord/nutzer-bereich/Minispiele/Ein-Wort-Geschichte/WordStoryStats",
                    "discord/nutzer-bereich/Minispiele/Ein-Wort-Geschichte/WordStoryStatus",
                  ],
                },

                {
                  type: "category",
                  label: "Hau-den-Maulwurf",
                  link: { type: "generated-index" },
                  items: [
                    "discord/nutzer-bereich/Minispiele/Hau-den-Maulwurf/HauDenMaulwurfStarten",
                  ],
                },

                "discord/nutzer-bereich/Minispiele/Rock-Paper-Scissors",

                {
                  type: "category",
                  label: "Schach",
                  link: { type: "generated-index" },
                  items: [
                    "discord/nutzer-bereich/Minispiele/Schach/ChessChallenge",
                    "discord/nutzer-bereich/Minispiele/Schach/ChessChallengeAI",
                    "discord/nutzer-bereich/Minispiele/Schach/ChessGames",
                    "discord/nutzer-bereich/Minispiele/Schach/ChessHistory",
                  ],
                },

                "discord/nutzer-bereich/Minispiele/Tic-Tac-Toe",
                "discord/nutzer-bereich/Minispiele/Uno",

                {
                  type: "category",
                  label: "Wortkette",
                  link: { type: "generated-index" },
                  items: [
                    "discord/nutzer-bereich/Minispiele/Wortkette/WordChainReset",
                    "discord/nutzer-bereich/Minispiele/Wortkette/WordChainStats",
                    "discord/nutzer-bereich/Minispiele/Wortkette/WordChainStatus",
                  ],
                },

                {
                  type: "category",
                  label: "Wortsalat",
                  link: { type: "generated-index" },
                  items: [
                    "discord/nutzer-bereich/Minispiele/Wortsalat/WortsalatEinreichen",
                    "discord/nutzer-bereich/Minispiele/Wortsalat/WortsalatEnde",
                    "discord/nutzer-bereich/Minispiele/Wortsalat/WortsalatProfil",
                    "discord/nutzer-bereich/Minispiele/Wortsalat/WortsalatStart",
                  ],
                },
              ],
            },

            {
              type: "category",
              label: "Moderation & Sicherheit",
              link: { type: "generated-index" },
              items: [
                "discord/nutzer-bereich/Moderation-und-Sicherheit/Nutzer-Befehle/ModerateReport",
              ],
            },

            {
              type: "category",
              label: "Ping-Schutz",
              link: { type: "generated-index" },
              items: [
                "discord/nutzer-bereich/Ping-Schutz/Nutzer-Befehle/PingProtectionListProtected",
                "discord/nutzer-bereich/Ping-Schutz/Nutzer-Befehle/PingProtectionListWhitelisted",
              ],
            },

            {
              type: "category",
              label: "Sammel-die-Codes",
              link: { type: "generated-index" },
              items: [
                "discord/nutzer-bereich/Sammel-die-Codes/Nutzer-Befehle/HuntTheCodeRedeem",
                "discord/nutzer-bereich/Sammel-die-Codes/Nutzer-Befehle/HuntTheCodeProfile",
                "discord/nutzer-bereich/Sammel-die-Codes/Nutzer-Befehle/HuntTheCodeLeaderboard",
              ],
            },

            {
              type: "category",
              label: "Temporäre-Channel",
              link: { type: "generated-index" },
              items: [
                "discord/nutzer-bereich/Temporäre-Channel/TempChannelEdit",
                "discord/nutzer-bereich/Temporäre-Channel/TempChannelMode",
                "discord/nutzer-bereich/Temporäre-Channel/TempChannelAddUser",
                "discord/nutzer-bereich/Temporäre-Channel/TempChannelRemoveUser",
                "discord/nutzer-bereich/Temporäre-Channel/TempChannelListUsers",
              ],
            },

            {
              type: "category",
              label: "Vorschläge",
              link: { type: "generated-index" },
              items: [
                "discord/nutzer-bereich/Vorschläge/Nutzer-Befehle/SuggestionSubmit",
              ],
            },

            {
              type: "category",
              label: "Wirtschaftssystem",
              link: { type: "generated-index" },
              items: [
                {
                  type: "category",
                  label: "Finanzen",
                  link: { type: "generated-index" },
                  items: [
                    "discord/nutzer-bereich/Wirtschaftssystem/Finanzen/EconomyBalance",
                    "discord/nutzer-bereich/Wirtschaftssystem/Finanzen/EconomyDeposit",
                    "discord/nutzer-bereich/Wirtschaftssystem/Finanzen/EconomyWithdraw",
                  ],
                },

                {
                  type: "category",
                  label: "Geldquellen",
                  link: { type: "generated-index" },
                  items: [
                    "discord/nutzer-bereich/Wirtschaftssystem/Geldquellen/EconomyWork",
                    "discord/nutzer-bereich/Wirtschaftssystem/Geldquellen/EconomyDaily",
                    "discord/nutzer-bereich/Wirtschaftssystem/Geldquellen/EconomyWeekly",
                    "discord/nutzer-bereich/Wirtschaftssystem/Geldquellen/EconomyCrime",
                    "discord/nutzer-bereich/Wirtschaftssystem/Geldquellen/EconomyRob",
                  ],
                },

                {
                  type: "category",
                  label: "Shop",
                  link: { type: "generated-index" },
                  items: [
                    "discord/nutzer-bereich/Wirtschaftssystem/Shop/Nutzer-Befehle/ShopList",
                    "discord/nutzer-bereich/Wirtschaftssystem/Shop/Nutzer-Befehle/ShopBuy",
                  ],
                },
              ],
            },
          ],
        },

        {
          type: "category",
          label: "Kontextmenü-Aktionen",
          link: {
            type: "generated-index",
            slug: "/nutzer/kontextmenue-aktionen",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "discord/nutzer-bereich/Kontextmenü-Aktionen",
            },
          ],
        },
      ],
    },

    /* ==========================================
     * 2. TEAM-BEREICH
     * ========================================== */
    {
      type: "category",
      label: "Team-Bereich",
      link: { type: "generated-index", slug: "/team" },
      items: [
        {
          type: "category",
          label: "Custom-Bot Befehle",
          link: {
            type: "generated-index",
            slug: "/team/custom-bot-befehle",
          },
          items: [
            {
              type: "category",
              label: "Admin-Tools",
              link: { type: "generated-index" },
              items: [
                "discord/team-bereich/Admin-Tools/Admin-Befehle/AdminSetcategory",
                "discord/team-bereich/Admin-Tools/AdminMovechannel",
                "discord/team-bereich/Admin-Tools/AdminMoverole",
                "discord/team-bereich/Admin-Tools/Rollen-Befehle/RolesStatus",
                "discord/team-bereich/Admin-Tools/Rollen-Befehle/RolesGive",
                "discord/team-bereich/Admin-Tools/Rollen-Befehle/RolesRemove",
                "discord/team-bereich/Admin-Tools/Extra-Befehle/Stealemote",
              ],
            },

            {
              type: "category",
              label: "Anonymer Chat",
              link: { type: "generated-index" },
              items: [
                "discord/team-bereich/Anonymer-Chat/Moderator-Befehle/ModerateAnonymousChannelEnable",
                "discord/team-bereich/Anonymer-Chat/Moderator-Befehle/ModerateAnonymousChannelDisable",
                "discord/team-bereich/Anonymer-Chat/Moderator-Befehle/ModerateAnonymousChannelDeleteMessage",
              ],
            },

            {
              type: "category",
              label: "Anti-Nuke-Schutz",
              link: { type: "generated-index" },
              items: [
                "discord/team-bereich/Anti-Nuke-Schutz/AntiNukeStatus",
                "discord/team-bereich/Anti-Nuke-Schutz/AntiNukeUndo",
                "discord/team-bereich/Anti-Nuke-Schutz/Whitelist/AntiNukeWhitelistAdd",
                "discord/team-bereich/Anti-Nuke-Schutz/Whitelist/AntiNukeWhitelistList",
                "discord/team-bereich/Anti-Nuke-Schutz/Whitelist/AntiNukeWhitelistRemove",
              ],
            },

            {
              type: "category",
              label: "Betterstatus",
              link: { type: "generated-index" },
              items: [
                "discord/team-bereich/Betterstatus/Status",
              ],
            },

            {
              type: "category",
              label: "Einladungsverfolgung",
              link: { type: "generated-index" },
              items: [
                "discord/team-bereich/Einladungsverfolgung/TraceInvites",
              ],
            },

            {
              type: "category",
              label: "Errate-die-Nummer",
              link: { type: "generated-index" },
              items: [
                "discord/team-bereich/Errate-die-Nummer/GuessCreate",
                "discord/team-bereich/Errate-die-Nummer/GuessStatus",
                "discord/team-bereich/Errate-die-Nummer/GuessEnd",
              ],
            },

            {
              type: "category",
              label: "Geburtstags-Kalender",
              link: { type: "generated-index" },
              items: [
                "discord/team-bereich/Geburtstags-Kalender/Admin-Befehle/ManageBirthdaySet",
                "discord/team-bereich/Geburtstags-Kalender/Admin-Befehle/ManageBirthdayRemove",
                "discord/team-bereich/Geburtstags-Kalender/Admin-Befehle/ManageBirthdayLock",
                "discord/team-bereich/Geburtstags-Kalender/Admin-Befehle/ManageBirthdayUnlock",
              ],
            },

            {
              type: "category",
              label: "Gewinnspiele",
              link: { type: "generated-index" },
              items: [
                "discord/team-bereich/Gewinnspiele/Team-Befehle/GmanageStart",
                "discord/team-bereich/Gewinnspiele/Team-Befehle/GmanageReroll",
                "discord/team-bereich/Gewinnspiele/Team-Befehle/GmanageEnd",
                "discord/team-bereich/Gewinnspiele/Team-Befehle/GmanageParticipants",
              ],
            },

            {
              type: "category",
              label: "Kommunikation",
              link: { type: "generated-index" },
              items: [
                "discord/team-bereich/Eigene-Befehle/Kommunikation/DM",
                "discord/team-bereich/Eigene-Befehle/Kommunikation/Gelesen",
                "discord/team-bereich/Eigene-Befehle/Kommunikation/ShoutOut",
              ],
            },

            {
              type: "category",
              label: "Level-System",
              link: { type: "generated-index" },
              items: [
                "discord/team-bereich/Level-System/Admin-Befehle/ManageLevelSet",
                "discord/team-bereich/Level-System/Admin-Befehle/ManageLevelAdd",
                "discord/team-bereich/Level-System/Admin-Befehle/ManageLevelRemove",
                "discord/team-bereich/Level-System/Admin-Befehle/ManageLevelResetXP",
                "discord/team-bereich/Level-System/Admin-Befehle/ManageLevelXPSet",
                "discord/team-bereich/Level-System/Admin-Befehle/ManageLevelXPAdd",
                "discord/team-bereich/Level-System/Admin-Befehle/ManageLevelXPRemove",
              ],
            },

            {
              type: "category",
              label: "Massenrolle",
              link: { type: "generated-index" },
              items: [
                "discord/team-bereich/Massenrolle/MassroleAdd",
                "discord/team-bereich/Massenrolle/MassroleRemove",
                "discord/team-bereich/Massenrolle/MassroleRemoveAll",
              ],
            },

            {
              type: "category",
              label: "Moderation & Sicherheit",
              link: { type: "generated-index" },
              items: [
                "discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateActions",
                "discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateWarn",
                "discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateRevokeWarn",
                "discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateMute",
                "discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateUnmute",
                "discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateKick",
                "discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateBan",
                "discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateUnban",
                "discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateClear",
                "discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateQuarantine",
                "discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateUnquarantine",
                "discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateChannelMute",
                "discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateRemoveChannelMute",
                "discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateEditDuration",
                "discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateEditReason",
                "discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateAddProof",
                "discord/team-bereich/Moderation-und-Sicherheit/Moderations-Aktionen/ModerateInvolve",

                "discord/team-bereich/Moderation-und-Sicherheit/Kanal-Verwaltung/ModerateLock",
                "discord/team-bereich/Moderation-und-Sicherheit/Kanal-Verwaltung/ModerateUnlock",
                "discord/team-bereich/Moderation-und-Sicherheit/Kanal-Verwaltung/ModerateLockdown",

                "discord/team-bereich/Moderation-und-Sicherheit/Notizen/ModerateNotesView",
                "discord/team-bereich/Moderation-und-Sicherheit/Notizen/ModerateNotesCreate",
                "discord/team-bereich/Moderation-und-Sicherheit/Notizen/ModerateNotesEdit",
                "discord/team-bereich/Moderation-und-Sicherheit/Notizen/ModerateNotesDelete",
              ],
            },

            {
              type: "category",
              label: "Organisation",
              link: { type: "generated-index" },
              items: [
                "discord/team-bereich/Eigene-Befehle/Organisation/PartnerGiveaway",
                "discord/team-bereich/Eigene-Befehle/Organisation/TaskShare",
                "discord/team-bereich/Eigene-Befehle/Organisation/TeamsitzungErstellen",
              ],
            },

            {
              type: "category",
              label: "Partner-Liste",
              link: { type: "generated-index" },
              items: [
                "discord/team-bereich/Partner-Liste/PartnerListAdd",
                "discord/team-bereich/Partner-Liste/PartnerListEdit",
                "discord/team-bereich/Partner-Liste/PartnerListDelete",
              ],
            },

            {
              type: "category",
              label: "Ping-Schutz",
              link: { type: "generated-index" },
              items: [
                "discord/team-bereich/Ping-Schutz/Team-Befehle/PingProtectionUserPanel",
                "discord/team-bereich/Ping-Schutz/Team-Befehle/PingProtectionUserHistory",
                "discord/team-bereich/Ping-Schutz/Team-Befehle/PingProtectionUserActionsHistory",
              ],
            },

            {
              type: "category",
              label: "Personalmanagementsystem",
              link: { type: "generated-index" },
              items: [
                {
                  type: "category",
                  label: "Abwesenheit",
                  link: { type: "generated-index" },
                  items: [
                    "discord/team-bereich/Personalmanagmentsystem/Abwesenheit/StaffStatusLoaAdmin",
                    "discord/team-bereich/Personalmanagmentsystem/Abwesenheit/StaffStatusLoaList",
                    "discord/team-bereich/Personalmanagmentsystem/Abwesenheit/StaffStatusLoaRequest",
                    "discord/team-bereich/Personalmanagmentsystem/Abwesenheit/StaffStatusLoaView",
                  ],
                },

                {
                  type: "category",
                  label: "Aktivitätsüberprüfung",
                  link: { type: "generated-index" },
                  items: [
                    "discord/team-bereich/Personalmanagmentsystem/Aktivitätsüberprüfung/StaffManagementActivityCheckEnd",
                    "discord/team-bereich/Personalmanagmentsystem/Aktivitätsüberprüfung/StaffManagementActivityCheckStart",
                    "discord/team-bereich/Personalmanagmentsystem/Aktivitätsüberprüfung/StaffManagementActivityCheckView",
                  ],
                },

                {
                  type: "category",
                  label: "Beförderung",
                  link: { type: "generated-index" },
                  items: [
                    "discord/team-bereich/Personalmanagmentsystem/Beförderung/StaffManagementPromotionHistory",
                    "discord/team-bereich/Personalmanagmentsystem/Beförderung/StaffManagementPromotionPromote",
                  ],
                },

                {
                  type: "category",
                  label: "Bewertungen",
                  link: { type: "generated-index" },
                  items: [
                    "discord/team-bereich/Personalmanagmentsystem/Bewertungen/StaffManagementReviewHistory",
                    "discord/team-bereich/Personalmanagmentsystem/Bewertungen/StaffManagementReviewSubmit",
                  ],
                },

                {
                  type: "category",
                  label: "Profil",
                  link: { type: "generated-index" },
                  items: [
                    "discord/team-bereich/Personalmanagmentsystem/Profil/StaffManagementProfileEdit",
                    "discord/team-bereich/Personalmanagmentsystem/Profil/StaffManagementProfileView",
                    "discord/team-bereich/Personalmanagmentsystem/Profil/StaffManagementProfileWipe",
                  ],
                },

                {
                  type: "category",
                  label: "Reduzierte Aktivität",
                  link: { type: "generated-index" },
                  items: [
                    "discord/team-bereich/Personalmanagmentsystem/Reduzierte-Aktivität/StaffStatusRaAdmin",
                    "discord/team-bereich/Personalmanagmentsystem/Reduzierte-Aktivität/StaffStatusRaList",
                    "discord/team-bereich/Personalmanagmentsystem/Reduzierte-Aktivität/StaffStatusRaRequest",
                    "discord/team-bereich/Personalmanagmentsystem/Reduzierte-Aktivität/StaffStatusRaView",
                  ],
                },

                {
                  type: "category",
                  label: "Verstöße",
                  link: { type: "generated-index" },
                  items: [
                    "discord/team-bereich/Personalmanagmentsystem/Verstöße/StaffManagementInfractionHistory",
                    "discord/team-bereich/Personalmanagmentsystem/Verstöße/StaffManagementInfractionIssue",
                    "discord/team-bereich/Personalmanagmentsystem/Verstöße/StaffManagementInfractionSuspend",
                    "discord/team-bereich/Personalmanagmentsystem/Verstöße/StaffManagementInfractionVoid",
                  ],
                },

                "discord/team-bereich/Personalmanagmentsystem/StaffManagementPanel",
              ],
            },

            {
              type: "category",
              label: "Sammel-die-Codes",
              link: { type: "generated-index" },
              items: [
                "discord/team-bereich/Sammel-die-Codes/Admin-Befehle/HuntTheCodeAdminCreateCode",
                "discord/team-bereich/Sammel-die-Codes/Admin-Befehle/HuntTheCodeAdminReport",
                "discord/team-bereich/Sammel-die-Codes/Admin-Befehle/HuntTheCodeAdminEnd",
              ],
            },

            {
              type: "category",
              label: "System-Befehle",
              link: { type: "generated-index" },
              items: [
                "discord/team-bereich/Build-In-Commands/Admin-Befehle/Reload",
              ],
            },

            {
              type: "category",
              label: "Team-Verwaltung",
              link: { type: "generated-index" },
              items: [
                "discord/team-bereich/Eigene-Befehle/Team-Verwaltung/AddTeam",
                "discord/team-bereich/Eigene-Befehle/Team-Verwaltung/UpdateTeam",
                "discord/team-bereich/Eigene-Befehle/Team-Verwaltung/RemoveTeam",
                "discord/team-bereich/Eigene-Befehle/Team-Verwaltung/TeamAbmelden",
                "discord/team-bereich/Eigene-Befehle/Team-Verwaltung/TeamWarn",
              ],
            },

            {
              type: "category",
              label: "Teammitglieder-Ziele",
              link: { type: "generated-index" },
              items: [
                "discord/team-bereich/Teammitglieder-Ziele/TeamGoalsProgress",
                "discord/team-bereich/Teammitglieder-Ziele/TeamGoalsVoiceProgress",
                "discord/team-bereich/Teammitglieder-Ziele/TeamGoalsHistory",
              ],
            },

            {
              type: "category",
              label: "Umfragen",
              link: { type: "generated-index" },
              items: [
                "discord/team-bereich/Umfragen/PollCreate",
                "discord/team-bereich/Umfragen/PollEnd",
                "discord/team-bereich/Umfragen/PollUserInfos",
              ],
            },

            {
              type: "category",
              label: "Vorschläge",
              link: { type: "generated-index" },
              items: [
                "discord/team-bereich/Vorschläge/Team-Befehle/SuggestionAccept",
                "discord/team-bereich/Vorschläge/Team-Befehle/SuggestionDeny",
              ],
            },

            {
              type: "category",
              label: "Wirtschaftssystem",
              link: { type: "generated-index" },
              items: [
                {
                  type: "category",
                  label: "Shop",
                  link: { type: "generated-index" },
                  items: [
                    "discord/team-bereich/Wirtschaftssystem/Shop/Admin-Befehle/ShopAdd",
                    "discord/team-bereich/Wirtschaftssystem/Shop/Admin-Befehle/ShopEdit",
                    "discord/team-bereich/Wirtschaftssystem/Shop/Admin-Befehle/ShopDelete",
                  ],
                },

                {
                  type: "category",
                  label: "Team-Befehle",
                  link: { type: "generated-index" },
                  items: [
                    "discord/team-bereich/Wirtschaftssystem/Team-Befehle/EconomyAdd",
                    "discord/team-bereich/Wirtschaftssystem/Team-Befehle/EconomySet",
                    "discord/team-bereich/Wirtschaftssystem/Team-Befehle/EconomyRemove",
                    "discord/team-bereich/Wirtschaftssystem/Team-Befehle/EconomyDestroy",
                    "discord/team-bereich/Wirtschaftssystem/Team-Befehle/EconomyDropMsgEnable",
                    "discord/team-bereich/Wirtschaftssystem/Team-Befehle/EconomyDropMsgDisable",
                  ],
                },
              ],
            },
          ],
        },

        {
          type: "category",
          label: "Kontextmenü-Aktionen",
          link: {
            type: "generated-index",
            slug: "/team/kontextmenue-aktionen",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "discord/team-bereich/Kontextmenü-Aktionen",
            },
          ],
        },
      ],
    },

    /* ==========================================
     * 3. ALLE BEFEHLE
     * Vollständiges Archiv aller Custom-Bot-Dokumente
     * ========================================== */
    {
      type: "category",
      label: "Alle Befehle",
      link: {
        type: "generated-index",
        slug: "/alle-befehle",
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Kontextmenü-Aktionen",
          link: {
            type: "generated-index",
            slug: "/alle-befehle/kontextmenue-aktionen",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "discord/kontextmenü",
            },
          ],
        },

        {
          type: "category",
          label: "Custom-Bot Befehle",
          link: {
            type: "generated-index",
            slug: "/alle-befehle/custom-bot",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "discord/befehle/custom-bot",
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;