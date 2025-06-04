// Projects configuration
const projectsConfig = {
    personal: [
        {
            id: 'personal1',
            icon: '🎮',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop&crop=center',
            title: { ru: 'Эпическая RPG Приключение', en: 'Epic Adventure RPG' },
            description: {
                ru: 'Фэнтезийная RPG с глубоким сюжетом и захватывающим геймплеем',
                en: 'A fantasy RPG with deep storyline and immersive gameplay mechanics'
            },
            tags: ['Unity', 'C#', 'RPG'],
            detailedDescription: {
                ru: 'Полноценная RPG с открытым миром, включающая в себя систему квестов, прокачки персонажей, крафтинга и боевую систему в реальном времени. Игра создана на Unity с использованием современных технологий рендеринга.',
                en: 'A full-featured open-world RPG featuring quest system, character progression, crafting, and real-time combat. Built with Unity using modern rendering technologies.'
            },
            media: {
                type: "image", // "youtube", "video", "iframe"
                url: "https://example.com/image.jpg",
            },
            links: [
                { text: { ru: 'Играть', en: 'Play' }, url: '#' },
                { text: { ru: 'Код на GitHub', en: 'GitHub Code' }, url: '#' }
            ]
        }
    ],
    commercial: [
        {
            id: 'commercial1',
            icon: '💼',
            image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2515030/header.jpg?t=1747307341',
            title: {
                ru: 'Dark Lord',
                en: 'Dark Lord'
            },
            tags: ['2D', 'PC', 'Card Game'],
            detailedDescription: {
                ru: 'Коммерческий проект для мобильных платформ с более чем 1 миллионом скачиваний. Включает систему монетизации, аналитику и социальные функции. Разработка велась в команде из 5 человек.',
                en: 'Commercial mobile project with over 1 million downloads. Features monetization system, analytics, and social features. Developed by a team of 5 people.'
            },
            media: {
                type: "video",
                url: "https://video.fastly.steamstatic.com/store_trailers/257046532/movie_max_vp9.webm?t=1723741288",
            },
            links: [
                { text: { ru: 'Steam', en: 'Steam' }, url: 'https://store.steampowered.com/app/2515030/Dark_Lord/' }
            ]
        }
    ]
};