// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    // 1. Admin-Tools
    {
      type: 'category',
      label: '📦 Admin-Tools',
      link: { type: 'generated-index', slug: '/admin-tools' },
      items: [
        'admin-tools/admin',
        'admin-tools/roles',
        'admin-tools/stealemote',
      ],
    },
    // 2. AFK-System
    {
      type: 'category',
      label: '📦 AFK-System',
      link: { type: 'generated-index', slug: '/afk-system' },
      items: ['afk-system/afk'],
    },
    // 3. Anonymer Chat
    {
      type: 'category',
      label: '📦 Anonymer Chat',
      link: { type: 'generated-index', slug: '/anonymer-chat' },
      items: [
        'anonymer-chat/anonymous-message',
        'anonymer-chat/moderate-anonymous-channel',
      ],
    },
    // 4. Bewerbungen
    {
      type: 'category',
      label: '📦 Bewerbungen',
      link: { type: 'generated-index', slug: '/bewerbungen' },
      items: ['bewerbungen/apply'],
    },
    // 5. Betterstatus
    {
      type: 'category',
      label: '📦 Betterstatus',
      link: { type: 'generated-index', slug: '/betterstatus' },
      items: ['betterstatus/status'],
    },
    // 6. Geburtstags-Kalender
    {
      type: 'category',
      label: '📦 Geburtstags-Kalender',
      link: { type: 'generated-index', slug: '/geburtstag' },
      items: ['geburtstag/birthday'],
    },
    // 7. Color me
    {
      type: 'category',
      label: '📦 Color me',
      link: { type: 'generated-index', slug: '/color-me' },
      items: ['color-me/color-me'],
    },
    // 8. Minispiele (Vier gewinnt, Duel)
    {
      type: 'category',
      label: '📦 Minispiele',
      link: { type: 'generated-index', slug: '/minispiele' },
      items: [
        'minispiele/connect-four',
        'minispiele/duel',
      ],
    },
    // 9. Economy (mit Unterordnern)
    {
      type: 'category',
      label: '📦 Economy',
      link: { type: 'generated-index', slug: '/economy-uebersicht' },
      items: [
        {
          type: 'category',
          label: 'Wirtschaft',
          items: ['economy/economy'],
        },
        {
          type: 'category',
          label: 'Shop',
          items: ['economy/shop'],
        },
      ],
    },
    // 10. Fun-Befehle
    {
      type: 'category',
      label: '📦 Fun-Befehle',
      link: { type: 'generated-index', slug: '/fun' },
      items: [
        'fun/hug',
        'fun/kiss',
        'fun/pat',
        'fun/random',
        'fun/slap',
      ],
    },
    // 11. Gewinnspiele
    {
      type: 'category',
      label: '📦 Gewinnspiele',
      link: { type: 'generated-index', slug: '/giveaway' },
      items: [
        'giveaway/gmanage',
        'giveaway/gmessages',
      ],
    },
    // 12. Errate die Nummer
    {
      type: 'category',
      label: '📦 Errate die Nummer',
      link: { type: 'generated-index', slug: '/guess-number' },
      items: ['games/guess-the-number'],
    },
    // 13. Sammel die Codes
    {
      type: 'category',
      label: '📦 Sammel die Codes',
      link: { type: 'generated-index', slug: '/hunt-code' },
      items: [
        'games/hunt-the-code-admin',
        'games/hunt-the-code',
      ],
    },
    // 14. Info & Tracking
    {
      type: 'category',
      label: '📦 Info & Tracking',
      items: [
        'info/info',
        'info/trace-invites',
      ],
    },
    // 15. Level-System
    {
      type: 'category',
      label: '📦 Level-System',
      items: [
        'levels/leaderboard',
        'levels/manage-levels',
        'levels/profile',
      ],
    },
    // 16. Moderation & Sicherheit
    {
      type: 'category',
      label: '📦 Moderation & Sicherheit',
      items: [
        'mod/moderate',
        'mod/report',
        'mod/massrole',
        'mod/ping-protection',
      ],
    },
    // 17. Interaktion (Umfragen, Vorschläge, etc.)
    {
      type: 'category',
      label: '📦 Interaktion',
      items: [
        'interaktion/poll',
        'interaktion/remind-me',
        'interaktion/suggestion',
        'interaktion/manage-suggestion',
      ],
    },
    // 18. Technik (Temp-Channel, Partner)
    {
      type: 'category',
      label: '📦 Technik',
      items: [
        'technik/temp-channel',
        'technik/partner',
      ],
    },
    // 19. Weitere Spiele
    {
      type: 'category',
      label: '📦 Weitere Spiele',
      items: [
        'games/rock-paper-scissors',
        'games/tic-tac-toe',
        'games/uno',
      ],
    },
    // 20. Build-In
    {
      type: 'category',
      label: '⚙️ Build-In-Commands',
      items: [
        'system/help',
        'system/reload',
      ],
    },
  ],
};

export default sidebars;