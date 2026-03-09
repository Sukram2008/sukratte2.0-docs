/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
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
    {
      type: 'category',
      label: '📦 AFK-System',
      link: { type: 'generated-index', slug: '/afk-system' },
      items: ['afk-system/afk'],
    },
    {
      type: 'category',
      label: '📦 Economy',
      link: { type: 'generated-index', slug: '/economy' },
      items: [
        {
          type: 'category',
          label: 'Coins & Befehle',
          items: ['economy/economy-befehle/economy'],
        },
        {
          type: 'category',
          label: 'Shop System',
          items: ['economy/shop/shop'],
        },
      ],
    },
    {
      type: 'category',
      label: '⚙️ Build-In-Commands',
      items: ['build-in/help', 'build-in/reload'],
    },
  ],
};

export default sidebars;