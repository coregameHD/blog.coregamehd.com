// src/data/menu.ts

export const headerMenu = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Profile', link: 'https://coregamehd.com' },
    { name: 'Projects', showArrow: true,
        children: [
            { name: 'Kagami Visual Novel', link: 'https://www.facebook.com/kagamivisualnovel' },
            { name: 'Kagami Nihongo', link: 'https://www.facebook.com/kagaminihongo' },
        ]
    },
];

export const footerMenu = [
    { name: 'Style Guide', link: '/style-guide' },
];

export const legalMenu = [
    { name: 'Docs', link: 'https://docs.coregamehd.com' },
    { name: 'Template', link: 'https://template.coregamehd.com' },
    { name: 'Github', link: 'https://github.com/coregameHD/blog.coregamehd.com' }
];