// Projects configuration
const projectsConfig = [
    {
        id: 'proj-15',
        icon: '💼',
        image: 'projects/proj-15/cover.jpg',
        title: {
            ru: 'Фриланс проект',
            en: 'Freelance project'
        },
        tags: ['Commercial', 'Solo', '2D', 'Mobile'],
        genreTags: ['Hyper Casual'],
        detailedDescription: {
            ru: "<div class=\"project-meta\"><p><strong>Роль:</strong> Unity-разработчик (соло)</p><p><strong>Платформа:</strong> Mobile</p><p><strong>Технологии:</strong> Unity UI, Unity Physics, VContainer</p></div><h4>Описание:</h4><p>Полноценная 2D мини-игра, выполненная на фрилансе по техническому заданию заказчика.</p><p>Игрок свайпом двигает сани и ловит падающие подарки, составляя их в стопку. Если подарок упал — игра заканчивается.</p><p>В игре два режима: основной сосредоточен на сборе как можно большего количества подарков, а во втором игроку нужно собрать заданное количество, чтобы получить денежное вознаграждение.</p><p>В магазине игрок может приобрести улучшенные сани за игровую валюту, заработанную в челенджах.</p>",
            en: "<div class=\"project-meta\"><p><strong>Role:</strong> Unity Developer (Solo)</p><p><strong>Platform:</strong> Mobile</p><p><strong>Technologies:</strong> Unity UI, Unity Physics, VContainer</p></div><h4>Description:</h4><p>A fully-featured 2D mini-game developed as a freelance project based on the client's technical specification.</p><p>The player swipes to move a sled and catch falling gifts, stacking them up. If a gift falls to the ground, the game ends.</p><p>There are two game modes: the main one focuses on collecting as many gifts as possible, while the second requires the player to gather a specific number of gifts to earn a monetary reward.</p><p>The in-game store allows players to purchase upgraded sleds using in-game currency earned in challenge mode.</p>"
        },
        media: {
            type: 'youtube',
            url: 'https://youtube.com/shorts/f4ExH99TjLk'
        }
    },
    {
        id: 'test-project-1',
        icon: '💼',
        image: 'projects/test-project-1/cover.jpg',
        title: {
            ru: 'Тестовый проект',
            en: 'Test project'
        },
        tags: ['Personal', 'Test', '3D'],
        genreTags: ['AI Bots', 'Resource Collection'],
        detailedDescription: {
            ru: "<div class=\"project-meta\"><p><strong>Технологии:</strong> Unity UI, AI Navigation, MVC, State Machine</p></div><h4>Описание:</h4><p>В проекте реализована система сбора ресурсов с участием ботов двух фракций.</p><p>Случайные ресурсы появляются в произвольных точках пространства. У каждой базы есть собственные боты, которые автоматически собирают ресурсы по заданному алгоритму.</p><p>Для навигации используются NavMesh-агенты, что позволяет ботам эффективно обходить препятствия. Поведение ботов организовано с помощью паттерна «машина состояний».</p><p>В проекте используется архитектурный паттерн MVC. Есть точка входа, отвечающая за инициализацию основных игровых сущностей. Логика обновления объектов централизована через TickManager.</p><p>Простой пользовательский интерфейс позволяет:</p><ul class=\"tasks-list\"><li><span>Настраивать количество ботов у каждой базы</span></li><li><span>Изменять скорость их передвижения</span></li><li><span>Регулировать частоту появления ресурсов</span></li><li><span>Включать и отключать визуализацию маршрутов</span></li><li><span>Просматривать текущее количество ресурсов на каждой базе</span></li></ul>",
            en: "<div class=\"project-meta\"><p><strong>Technologies:</strong> Unity UI, AI Navigation, MVC, State Machine</p></div><h4>Description:</h4><p>The project implements a resource collection system involving bots from two factions.</p><p>Random resources spawn at random positions in the environment. Each base has its own bots that automatically collect resources according to a predefined algorithm.</p><p>Navigation is handled by NavMesh agents, allowing bots to effectively avoid obstacles. Bot behavior is organized using the State Machine pattern.</p><p>The project uses the MVC architectural pattern. There is an entry point responsible for initializing core game entities. Object logic updates are centralized via a TickManager.</p><p>A simple user interface allows:</p><ul class=\"tasks-list\"><li><span>Adjusting the number of bots at each base</span></li><li><span>Changing bot movement speed</span></li><li><span>Configuring resource spawn rate</span></li><li><span>Enabling or disabling path visualization</span></li><li><span>Displaying current resource amounts at each base</span></li></ul>"
        },
        media: {
            type: 'youtube',
            url: 'https://youtu.be/KmBP4TYE7Ac'
        },
        links: [
            { text: { ru: 'GitHub', en: 'GitHub' }, url: 'https://github.com/4xlander/test-project-1' }
        ]
    },
    {
        id: 'drawing-ball',
        icon: '💼',
        image: 'projects/drawing-ball/cover.jpg',
        title: {
            ru: 'Фриланс проект',
            en: 'Freelance project'
        },
        tags: ['Commercial', 'Solo', '2D', 'Mobile'],
        genreTags: ['Hyper Casual'],
        detailedDescription: {
            ru: "<div class=\"project-meta\"><p><strong>Роль:</strong> Unity-разработчик (соло)</p><p><strong>Платформа:</strong> Mobile</p><p><strong>Технологии:</strong> Unity UI, Unity Physics, VContainer</p></div><h4>Описание:</h4><p>Полноценная 2D мини-игра, выполненная на фрилансе по техническому заданию заказчика.</p><p>Игрок, по принципу рогатки, запускает кружок по плоскости. Перемещаясь внутри границы, кружок закрашивает предоставленную фигуру. После того как будет закрашена определённая площадь фигуры, открывается следующий уровень.</p><p>При столкновении кружка с границей или с другими кружками-ботами игрок получает денежное вознаграждение. Заработанные деньги можно потратить на дополнительные опции:</p><ul class=\"tasks-list\"><li><span>Усиление отскока кружка от границы</span></li><li><span>Увеличение денежного вознаграждения за столкновения</span></li><li><span>Покупку вспомогательных кружков-ботов, которые двигаются в случайном направлении и также закрашивают фигуру</span></li></ul>",
            en: "<div class=\"project-meta\"><p><strong>Role:</strong> Unity Developer (solo)</p><p><strong>Platform:</strong> Mobile</p><p><strong>Technologies:</strong> Unity UI, Unity Physics, VContainer</p></div><h4>Description:</h4><p>A complete 2D mini-game developed as a freelance project based on the client’s technical requirements.</p><p>The player launches a ball across a plane using a slingshot mechanic. As it moves within the boundary, the ball fills in the given shape. Once a certain percentage of the shape is filled, the next level becomes available.</p><p>When the ball collides with the border or with other bot balls, the player earns in-game currency. Earned currency can be spent on additional upgrades:</p><ul class=\"tasks-list\"><li><span>Increased ball bounce from the boundary</span></li><li><span>Increased reward for collisions</span></li><li><span>Purchase of helper bot balls that move randomly and also fill the shape</span></li></ul>"
        },
        media: {
            type: 'youtube',
            url: 'https://youtube.com/shorts/ahEtQFzaQBg'
        }
    },
    {
        id: 'candy-gun',
        icon: '💼',
        image: 'projects/candy-gun/cover.jpg',
        title: {
            ru: 'Фриланс проект',
            en: 'Freelance project'
        },
        tags: ['Commercial', 'Solo', '2D', 'Mobile'],
        genreTags: ['Hyper Casual'],
        detailedDescription: {
            ru: "<div class=\"project-meta\"><p><strong>Роль:</strong> Unity-разработчик (соло)</p><p><strong>Платформа:</strong> Mobile</p><p><strong>Технологии:</strong> Unity UI, Unity Physics, Particle System, Unity Ads</p></div><h4>Описание:</h4><p>Полноценная 2D мини-игра, выполненная на фрилансе по техническому заданию заказчика.</p><p>Игрок запускает конфеты в центр круглой области, где на них воздействует сила притяжения.</p><p>Очки начисляются, когда конфета сталкивается с другой такой же. Обе конфеты взрываются, и на их месте появляется следующая по цепочке конфета.</p><p>Игра заканчивается, если конфета пересекает границу круга и некоторое время находится в опасной зоне, о чём сигнализирует индикатор DANGER.</p><p>Есть опция замены текущей конфеты на самую крупную из уже находящихся в круге. Она приобретается за накопленные очки или за просмотр рекламы.</p><h4>Мои задачи:</h4><ul class=\"tasks-list\"><li><span>Самостоятельное ведение всего цикла разработки</span></li><li><span>Построение архитектуры проекта и реализация игровых механик по техническому заданию</span></li><li><span>Реализация UI с различными меню</span></li><li><span>Создание простых визуальных эффектов с использованием Particle System</span></li><li><span>Интеграция рекламы с помощью Unity Ads</span></li><li><span>Подбор и интеграция музыкального и звукового сопровождения</span></li></ul>",
            en: "<div class=\"project-meta\"><p><strong>Role:</strong> Unity Developer (solo)</p><p><strong>Platform:</strong> Mobile</p><p><strong>Technologies:</strong> Unity UI, Unity Physics, Particle System, Unity Ads</p></div><h4>Description:</h4><p>A complete 2D mini-game developed as a freelance project based on the client's technical requirements.</p><p>The player launches candies into the center of a circular area, where they are affected by a gravitational force.</p><p>Points are awarded when a candy collides with another of the same type. Both candies explode, and the next candy in the chain appears in their place.</p><p>The game ends if a candy crosses the circle's border and stays in the danger zone for a certain amount of time, indicated by the DANGER alert.</p><p>There is an option to replace the current candy with the largest one already present in the circle. This option can be purchased with collected points or by watching an ad.</p><h4>Responsibilities:</h4><ul class=\"tasks-list\"><li><span>Handle the entire development cycle independently</span></li><li><span>Design project architecture and implement gameplay mechanics according to specifications</span></li><li><span>Develop UI with various menus</span></li><li><span>Create simple visual effects using the Particle System</span></li><li><span>Integrate ads using Unity Ads</span></li><li><span>Select and integrate music and sound effects</span></li></ul>"
        },
        media: {
            type: 'youtube',
            url: 'https://youtube.com/shorts/pTu6NPOoXQw'
        }
    },
    {
        id: 'test-3d-idle-tycoon',
        icon: '💼',
        image: 'projects/test-3d-idle-tycoon/cover.jpg',
        title: {
            ru: '3D Idle Tycoon',
            en: '3D Idle Tycoon'
        },
        tags: ['Personal', 'Test', '3D', 'PC'],
        genreTags: ['Idle Tycoon'],
        detailedDescription: {
            ru: "<div class=\"project-meta\"><p><strong>Технологии:</strong> Unity UI, AI Navigation</p></div><h4>Описание:</h4><p>Проект был выполнен в рамках тестового задания и реализует основные механики Idle Tycoon-игр:</p><ul class=\"tasks-list\"><li><span>Постройка зданий</span></li><li><span>Механика прогресса с возможностью расширения</span></li><li><span>Автоматическая сборка ресурсов ботами</span></li><li><span>Инвентарь и продажа ресурсов</span></li></ul>",
            en: "<div class=\"project-meta\"><p><strong>Technologies:</strong> Unity UI, AI Navigation</p></div><h4>Description:</h4><p>This project was developed as part of a technical assignment and showcases core Idle Tycoon game mechanics:</p><ul class=\"tasks-list\"><li><span>Building construction</span></li><li><span>Progression system with expansion potential</span></li><li><span>Automated resource collection by bots</span></li><li><span>Inventory and resource selling</span></li></ul>"

        },
        media: {
            type: 'youtube',
            url: 'https://youtu.be/Lsqju56AmzE'
        },
        links: [
            { text: { ru: 'GitHub', en: 'GitHub' }, url: 'https://github.com/4xlander/test-3d-idle-tycoon' }
        ]
    },
    {
        id: 'simple-3d-game',
        icon: '💼',
        image: 'projects/simple-3d-game/cover.jpg',
        title: {
            ru: 'Simple 3D Game',
            en: 'Simple 3D Game'
        },
        tags: ['Personal', '3D', 'PC', 'Mobile', 'Try WEB'],
        genreTags: ['Hyper Casual'],
        detailedDescription: {
            ru: "<div class=\"project-meta\"><p><strong>Технологии:</strong> Unity UI, Unity Physics, Input System</p></div><h4>Описание:</h4><p>Полноценная 3D мини-игра, выполненная в рамках тестового задания.</p><p>Шарик перемещается по кругу от платформы к платформе. Игрок может менять направление его движения по клику.</p><p>Очки начисляются, когда шарик касается подсвеченной платформы.</p><p>Игра заканчивается, если шарик сталкивается с летящим препятствием.</p><h4>Мои задачи:</h4><ul class=\"tasks-list\"><li><span>Реализация простого пользовательского интерфейса</span></li><li><span>Реализация игровых механик по техническому заданию</span></li><li><span>Подбор и интеграция музыкального и звукового сопровождения</span></li></ul>",
            en: "<div class=\"project-meta\"><p><strong>Technologies:</strong> Unity UI, Unity Physics, Input System</p></div><h4>Description:</h4><p>A complete 3D mini-game developed as part of a test assignment.</p><p>The ball moves in a circular path from platform to platform. The player can change its direction by clicking.</p><p>Points are awarded when the ball touches a highlighted platform.</p><p>The game ends if the ball collides with a flying obstacle.</p><h4>Responsibilities:</h4><ul class=\"tasks-list\"><li><span>Implemented a simple user interface</span></li><li><span>Developed game mechanics according to the technical specification</span></li><li><span>Selected and integrated music and sound effects</span></li></ul>"

        },
        media: {
            type: 'youtube',
            url: 'https://youtube.com/shorts/BMBZKFFqhoU'
        },
        links: [
            { text: { ru: 'GitHub', en: 'GitHub' }, url: 'https://github.com/4xlander/simple-3d-game' },
            { text: { ru: 'Try WEB', en: 'Try WEB' }, url: 'https://4xlgames.itch.io/simple-3d-game' },
        ]
    },
    {
        id: 'tess',
        icon: '💼',
        image: 'projects/tess/cover.webp',
        title: {
            ru: 'Where\'s Tess',
            en: 'Where\'s Tess'
        },
        tags: ['Commercial', 'Team', '2D', 'Mobile'],
        genreTags: ['Novel'],
        detailedDescription: {
            ru: "<div class=\"project-meta\"><p><strong>Роль:</strong> Unity-разработчик (в команде)</p><p><strong>Платформа:</strong> Android, iOS</p><p><strong>Технологии:</strong> Unity UI, Firebase SDK, AppLovin SDK, Amplitude SDK</p></div><h4>Описание:</h4><p>2D визуальная новелла для мобильных платформ.</p><p>Участвовал в разработке эпизодически и получил практический опыт мобильной разработки, а также работы с внешними сервисами: Firebase, внутриигровые покупки, реклама и аналитика.</p><h4>Мои задачи:</h4><ul class=\"tasks-list\"><li><span>Исправление ошибок</span></li><li><span>Обновление и настройка сторонних SDK (Firebase, AppLovin, Amplitude)</span></li><li><span>Интеграция сервисов внутриигровых покупок, рекламы и аналитики</span></li><li><span>Сборка билдов и загрузка в Google Play</span></li><li><span>Создание бандлов и загрузка в облачное хранилище</span></li></ul>",
            en: "<div class=\"project-meta\"><p><strong>Role:</strong> Unity Developer (team member)</p><p><strong>Platform:</strong> Android, iOS</p><p><strong>Technologies:</strong> Unity UI, Firebase SDK, AppLovin SDK, Amplitude SDK</p></div><h4>Description:</h4><p>A 2D visual novel developed for mobile platforms.</p><p>I contributed to the project on an episodic basis, gaining hands-on experience in mobile development and integration of third-party services including Firebase, in-app purchases, advertising, and analytics.</p><h4>Responsibilities:</h4><ul class=\"tasks-list\"><li><span>Fixing bugs and resolving technical issues</span></li><li><span>Updating and configuring third-party SDKs (Firebase, AppLovin, Amplitude)</span></li><li><span>Integrating services for in-app purchases, ads, and analytics</span></li><li><span>Building releases and uploading them to Google Play</span></li><li><span>Creating asset bundles and uploading them to cloud storage</span></li></ul>"
        },
        links: [
            { text: { ru: 'Google Play', en: 'Google Play' }, url: 'https://play.google.com/store/apps/details?id=com.leapgs.tess' }
        ]
    },
    {
        id: 'cyberjustice-p',
        icon: '💼',
        image: 'projects/cyberjustice-p/cover.jpg',
        title: {
            ru: 'Cyberjustice',
            en: 'Cyberjustice'
        },
        tags: ['Commercial', 'Team', '2D', 'PC', 'Prototype'],
        genreTags: ['Simulator'],
        detailedDescription: {
            ru: "<div class=\"project-meta\"><p><strong>Роль:</strong> Unity-разработчик (в команде)</p><p><strong>Платформа:</strong> PC</p><p><strong>Технологии:</strong> Unity UI, PrimeTween, VContainer, MVP, Git</p></div><h4>Описание:</h4><p>Прототип 2D-симулятора от студии UndeadFox в киберпанк-сеттинге. Ознакомиться с ним можно, посетив сайт разработчика по ссылке выше.</p><p>Проект реализован с использованием архитектурного подхода MVP и почти полностью разработан мной в сотрудничестве с геймдизайнером, художником и тимлидом.</p><p>В процессе я получил практический опыт работы с фреймворком PrimeTween для создания анимированных эффектов, а также освоил внедрение зависимостей с помощью DI-контейнера VContainer.</p><p>Проект стал ценным этапом в освоении архитектурных подходов и развитии навыков разработки на Unity.</p><h4>Мои задачи:</h4><ul class=\"tasks-list\"><li><span>Разработка пользовательских интерфейсов: окон, панелей, меню и других интерактивных элементов</span></li><li><span>Внедрение анимаций с использованием PrimeTween и встроенной системы Unity (Animation/Animator)</span></li><li><span>Реализация игровых механик:</span><ul><li><span>текстовая стенограмма с посимвольным выводом реплик персонажей и голосовым сопровождением</span></li><li><span>перетаскивание объектов игроком и их взаимодействие с другими объектами</span></li><li><span>мессенджер, в котором игрок получает сообщения в зависимости от действий и может отвечать, выбирая из предложенных вариантов</span></li><li><span>управление игровым временем (замедление/ускорение, влияющее на геймплей и визуальные эффекты)</span></li><li><span>реакция чата на действия игрока</span></li><li><span>доработка системы управления камерой и переключения между рабочими зонами игрока</span></li></ul></li><li><span>Внедрение музыкального и звукового сопровождения</span></li><li><span>Конфигурирование игровых данных с использованием ScriptableObject</span></li><li><span>Внедрение зависимостей с помощью VContainer</span></li><li><span>Настройка параметров рендеринга для оптимального баланса между качеством и производительностью</span></li><li><span>Отладка и устранение ошибок</span></li><li><span>Работа в команде с использованием Git</span></li></ul>",
            en: "<div class=\"project-meta\"><p><strong>Role:</strong> Unity Developer (team member)</p><p><strong>Platform:</strong> PC</p><p><strong>Technologies:</strong> Unity UI, PrimeTween, VContainer, MVP, Git</p></div><h4>Description:</h4><p>A 2D simulation prototype by UndeadFox Studio set in a cyberpunk world. You can check it out by visiting the developer's website linked above.</p><p>The project was developed using the MVP architectural pattern and was almost entirely implemented by me in collaboration with a game designer, artist, and team lead.</p><p>Throughout development, I gained hands-on experience with the PrimeTween framework for animated effects and mastered dependency injection using the VContainer DI container.</p><p>This project was a valuable step in learning architectural patterns and improving my Unity development skills.</p><h4>Responsibilities:</h4><ul class=\"tasks-list\"><li><span>Creating user interfaces: windows, panels, menus, and other interactive elements</span></li><li><span>Implementing animations using PrimeTween and Unity’s built-in Animation/Animator systems</span></li><li><span>Developing game mechanics:</span><ul><li><span>dialog system with a typing effect (character-by-character text display) and voice-over support</span></li><li><span>drag-and-drop interactions between objects</span></li><li><span>in-game messenger that reacts to player actions and offers multiple response options</span></li><li><span>game time control (slowdown/speed-up) affecting gameplay and visuals</span></li><li><span>chat responses to player actions</span></li><li><span>improving the camera system and switching between different player workspaces</span></li></ul></li><li><span>Implementing music and sound effects</span></li><li><span>Configuring game data using ScriptableObject</span></li><li><span>Injecting dependencies using VContainer</span></li><li><span>Adjusting rendering settings to balance quality and performance</span></li><li><span>Debugging and fixing issues</span></li><li><span>Collaborating with the team using Git</span></li></ul>"
        },
        links: [
            { text: { ru: 'Сайт', en: 'Website' }, url: 'https://www.undeadfox.com/cyberjustice' }
        ]
    },
    {
        id: 'dark-lord',
        icon: '💼',
        image: 'projects/dark-lord/cover.jpg',
        title: {
            ru: 'Dark Lord',
            en: 'Dark Lord'
        },
        tags: ['Commercial', 'Team', '2D', 'PC'],
        genreTags: ['Card Game', 'Novel', 'Mix'],
        detailedDescription: {
            ru: "<div class=\"project-meta\"><p><strong>Роль:</strong> Unity-разработчик (в команде)</p><p><strong>Платформа:</strong> PC</p><p><strong>Технологии:</strong> Unity UI, DOTween, Spine, Yarn Spinner, Addressables, Unity Gaming Services, Steam SDK, Xsolla SDK, MVC, Git</p></div><h4>Описание:</h4><p>2D игра студии UndeadFox, сочетающая элементы нескольких жанров.</p><p>Мой первый полноценный коммерческий проект, ставший отправной точкой в карьере разработчика игр.</p><p>Работая в составе команды, прошёл весь цикл разработки — от создания MVP до релизной версии.</p><p>За время проекта вырос с уровня trainee до middle, получив обширный практический опыт в разработке игр на Unity.</p><h4>Мои задачи:</h4><ul class=\"tasks-list\"><li><span>Создание пользовательских интерфейсов с использованием Unity UI (в большом количестве)</span></li><li><span>Реализация разнообразных игровых механик по ТЗ</span></li><li><span>Интеграция анимаций с использованием DOTween и встроенных инструментов Unity (Animation, Animator)</span></li><li><span>Интеграция Spine-анимаций</span></li><li><span>Управление загружаемым контентом с помощью Addressables</span></li><li><span>Использование ScriptableObject для конфигурирования игровых данных</span></li><li><span>Реализация механик визуальной новеллы с использованием Yarn Spinner</span></li><li><span>Интеграция игровых сервисов и платформ (Unity Gaming Services, Steam, Xsolla)</span></li><li><span>Асинхронное программирование (async/await, корутины)</span></li><li><span>Применение шаблонов проектирования (Синглтон, Сервис-локатор, Фабричный метод, Адаптер, Фасад, Обсервер, Медиатор, Стратегия)</span></li><li><span>Отладка и исправление ошибок</span></li><li><span>Сборка и загрузка билдов в Steam через Steamworks</span></li><li><span>Командная работа с использованием Git и архитектурного подхода MVC</span></li></ul>",
            en: "<div class=\"project-meta\"><p><strong>Role:</strong> Unity Developer (team member)</p><p><strong>Platform:</strong> PC</p><p><strong>Technologies:</strong> Unity UI, DOTween, Spine, Yarn Spinner, Addressables, Unity Gaming Services, Steam SDK, Xsolla SDK, MVC, Git</p></div><h4>Description:</h4><p>A 2D game by UndeadFox Studio that combines elements of multiple genres.</p><p>My first full-scale commercial project, which became the starting point of my career as a game developer.</p><p>As part of the team, I went through the entire development cycle — from creating the MVP to the release version.</p><p>During the project, I grew from a trainee to a middle developer, gaining extensive hands-on experience in Unity game development.</p><h4>Responsibilities:</h4><ul class=\"tasks-list\"><li><span>Creating user interfaces using Unity UI (in large quantity)</span></li><li><span>Implementing various gameplay mechanics based on technical specifications</span></li><li><span>Integrating animations using DOTween and Unity's built-in tools (Animation, Animator)</span></li><li><span>Integrating Spine animations</span></li><li><span>Managing downloadable content via Addressables</span></li><li><span>Using ScriptableObject to configure game data</span></li><li><span>Implementing visual novel mechanics with Yarn Spinner</span></li><li><span>Integrating game services and platforms (Unity Gaming Services, Steam, Xsolla)</span></li><li><span>Asynchronous programming (async/await, coroutines)</span></li><li><span>Applying design patterns (Singleton, Service Locator, Factory Method, Adapter, Facade, Observer, Mediator, Strategy)</span></li><li><span>Debugging and fixing issues</span></li><li><span>Building and uploading builds to Steam via Steamworks</span></li><li><span>Collaborating with the team using Git and the MVC architectural approach</span></li></ul>"
        },
        links: [
            { text: { ru: 'Steam', en: 'Steam' }, url: 'https://store.steampowered.com/app/2515030/Dark_Lord/' }
        ]
    }
];