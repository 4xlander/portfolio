// Projects configuration
const projectsConfig = {
    personal: [
        {
            id: 'test-corner-cross',
            icon: '💼',
            image: 'projects/personal/test-corner-cross/cover.jpg',
            title: {
                ru: '3D Mini Game',
                en: '3D Mini Game'
            },
            tags: ['3D', 'Solo', 'Playable'],
            genreTags: ['Hyper-Casual'],
            detailedDescription: {
                ru: "<div class=\"project-meta\"><p><strong>Технологии:</strong> Unity UI, Unity Physics, Input System</p></div><h4>Описание:</h4><p>Полноценная 3D мини-игра, выполненная в рамках тестового задания.</p><p>Шарик перемещается по кругу от платформы к платформе. Игрок может менять направление его движения по клику.</p><p>Очки начисляются, когда шарик касается подсвеченной платформы.</p><p>Игра заканчивается, если шарик сталкивается с летящим препятствием.</p><h4>Мои задачи:</h4><ul class=\"tasks-list\"><li><span>Реализация простого пользовательского интерфейса</span></li><li><span>Реализация игровых механик по техническому заданию</span></li><li><span>Подбор и интеграция музыкального и звукового сопровождения</span></li></ul>",
                en: "<div class=\"project-meta\"><p><strong>Technologies:</strong> Unity UI, Unity Physics, Input System</p></div><h4>Description:</h4><p>A complete 3D mini-game developed as part of a test assignment.</p><p>The ball moves in a circular path from platform to platform. The player can change its direction by clicking.</p><p>Points are awarded when the ball touches a highlighted platform.</p><p>The game ends if the ball collides with a flying obstacle.</p><h4>Responsibilities:</h4><ul class=\"tasks-list\"><li><span>Implemented a simple user interface</span></li><li><span>Developed game mechanics according to the technical specification</span></li><li><span>Selected and integrated music and sound effects</span></li></ul>"

            },
            media: {
                type: 'youtube',
                url: 'https://youtube.com/shorts/BMBZKFFqhoU'
            },
            links: [
                { text: { ru: 'GitHub', en: 'GitHub' }, url: 'https://github.com/4xlander/test-corner-cross' }
            ]
        }
    ],
    commercial: [
        {
            id: 'tess',
            icon: '💼',
            image: 'projects/commercial/tess/cover.webp',
            title: {
                ru: 'Where\'s Tess',
                en: 'Where\'s Tess'
            },
            tags: ['2D', 'Mobile', 'Team'],
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
            image: 'projects/commercial/cyberjustice-p/cover.jpg',
            title: {
                ru: 'Cyberjustice',
                en: 'Cyberjustice'
            },
            tags: ['2D', 'PC', 'Team'],
            genreTags: ['Prototype', 'Simulator'],
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
            image: 'projects/commercial/dark-lord/cover.jpg',
            title: {
                ru: 'Dark Lord',
                en: 'Dark Lord'
            },
            tags: ['2D', 'PC', 'Team'],
            genreTags: ['Card Game', 'Novel', 'Mix'],
            detailedDescription: {
                ru: "<div class=\"project-meta\"><p><strong>Роль:</strong> Unity-разработчик (в команде)</p><p><strong>Платформа:</strong> PC</p><p><strong>Технологии:</strong> Unity UI, DOTween, Spine, Yarn Spinner, Addressables, Unity Gaming Services, Steam SDK, Xsolla SDK, MVC, Git</p></div><h4>Описание:</h4><p>2D игра студии UndeadFox, сочетающая элементы нескольких жанров.</p><p>Мой первый полноценный коммерческий проект, ставший отправной точкой в карьере разработчика игр.</p><p>Работая в составе команды, прошёл весь цикл разработки — от создания MVP до релизной версии.</p><p>За время проекта вырос с уровня trainee до middle, получив обширный практический опыт в разработке игр на Unity.</p><h4>Мои задачи:</h4><ul class=\"tasks-list\"><li><span>Создание пользовательских интерфейсов с использованием Unity UI (в большом количестве)</span></li><li><span>Реализация разнообразных игровых механик по ТЗ</span></li><li><span>Интеграция анимаций с использованием DOTween и встроенных инструментов Unity (Animation, Animator)</span></li><li><span>Интеграция Spine-анимаций</span></li><li><span>Управление загружаемым контентом с помощью Addressables</span></li><li><span>Использование ScriptableObject для конфигурирования игровых данных</span></li><li><span>Реализация механик визуальной новеллы с использованием Yarn Spinner</span></li><li><span>Интеграция игровых сервисов и платформ (Unity Gaming Services, Steam, Xsolla)</span></li><li><span>Асинхронное программирование (async/await, корутины)</span></li><li><span>Применение шаблонов проектирования (Синглтон, Сервис-локатор, Фабричный метод, Адаптер, Фасад, Обсервер, Медиатор, Стратегия)</span></li><li><span>Отладка и исправление ошибок</span></li><li><span>Сборка и загрузка билдов в Steam через Steamworks</span></li><li><span>Командная работа с использованием Git и архитектурного подхода MVC</span></li></ul>",
                en: "<div class=\"project-meta\"><p><strong>Role:</strong> Unity Developer (team member)</p><p><strong>Platform:</strong> PC</p><p><strong>Technologies:</strong> Unity UI, DOTween, Spine, Yarn Spinner, Addressables, Unity Gaming Services, Steam SDK, Xsolla SDK, MVC, Git</p></div><h4>Description:</h4><p>A 2D game by UndeadFox Studio that combines elements of multiple genres.</p><p>My first full-scale commercial project, which became the starting point of my career as a game developer.</p><p>As part of the team, I went through the entire development cycle — from creating the MVP to the release version.</p><p>During the project, I grew from a trainee to a middle developer, gaining extensive hands-on experience in Unity game development.</p><h4>Responsibilities:</h4><ul class=\"tasks-list\"><li><span>Creating user interfaces using Unity UI (in large quantity)</span></li><li><span>Implementing various gameplay mechanics based on technical specifications</span></li><li><span>Integrating animations using DOTween and Unity's built-in tools (Animation, Animator)</span></li><li><span>Integrating Spine animations</span></li><li><span>Managing downloadable content via Addressables</span></li><li><span>Using ScriptableObject to configure game data</span></li><li><span>Implementing visual novel mechanics with Yarn Spinner</span></li><li><span>Integrating game services and platforms (Unity Gaming Services, Steam, Xsolla)</span></li><li><span>Asynchronous programming (async/await, coroutines)</span></li><li><span>Applying design patterns (Singleton, Service Locator, Factory Method, Adapter, Facade, Observer, Mediator, Strategy)</span></li><li><span>Debugging and fixing issues</span></li><li><span>Building and uploading builds to Steam via Steamworks</span></li><li><span>Collaborating with the team using Git and the MVC architectural approach</span></li></ul>"
            },
            links: [
                { text: { ru: 'Steam', en: 'Steam' }, url: 'https://store.steampowered.com/app/2515030/Dark_Lord/' }
            ]
        }
    ]
};