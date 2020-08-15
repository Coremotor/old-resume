import {v4 as uuidv4} from 'uuid';

const initialState =
    {
        layout2019: {
            id: 'layout2019',
            title: 'Веб-вёрстка 2019',
            done: true,
            inProcess: false,
            finalWork: 'url',
            comments: [],
            show: true,
            body: [
                {
                    id: uuidv4(),
                    title: 'Вводный модуль',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Как работают сайты. Backend и frontend. Вёрстка',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Как выглядит и из чего состоит код веб-страницы',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Установка редактора кода Sublime Text',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Простая веб-страница на HTML. Тэги и атрибуты',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'CSS-стили. Селекторы, параметры и значения',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'HTML',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Приветственное видео',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Структура HTML5-документа',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Обзор и демонстрация работы основных HTML-тэгов',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Вёрстка веб-форм. Поля и кнопки. Валидация форм',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Таблицы и табличная вёрстка',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Семантическая вёрстка. Стандарты и валидность',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Основы CSS',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Переходим к следующему модулю',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Как можно задавать стили. Селекторы',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Отступы, поля, размеры и единицы измерения',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Inline- и block- элементы, свойство display',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Обтекание, позиционирование и слои',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Блочная верстка',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Цвета, шрифты, фон и границы',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Основы JavaScript',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Что такое JavaScript и как его подключать к веб-страни',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Библиотека jQuery. Управление стилями элементов',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Обработка событий',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Работа с DOM, изменение, добавление и удаление элементов',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Отображение и скрытие элементов, анимация',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Работа с сетью, получение и отправка данных',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'JavaScript-фреймворки',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Адаптивность и кроссбраузерность',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Адаптивность и кроссбраузерность',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Media-запросы',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Flexbox',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Шаги адаптивности и сетки',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Разнообразие браузеров и их особенности',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Инструменты проверки и обеспечения адаптивности и кроссбраузерности',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Оформление',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Фон, прозрачность и градиенты',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Границы, аутлайны и тени',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Шрифты и оформление текста. Типографика и спецсимволы',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Стили указателей',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Изображения. Форматы, сжатие, спрайты, iconfonts. Favicon',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Рисование на веб-странице. SVG и Canvas',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Advanced CSS',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Сложные селекторы. Свойство important',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Псевдо-классы и псевдо-элементы',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Транформации, переходы и анимации',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Стандарты именования в CSS. Методология БЭМ',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Библиотеки стилей: Bootstrap, Semantic UI, Material UI',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Шаблонизаторы (Twig, Haml) и препроцессоры (SASS, LESS, Stylus)',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Инструменты верстальщика',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Последний модуль. Осталось чуть-чуть!',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Размещение своих работ в Интернете. Домен и хостинг',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Инструменты командной разработки. Таск-трекеры и Git',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Сборщики, минификаторы и оптимизаторы проектов',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Инструменты прототипирования',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Другие среды разработки. NetBeans, WebStorm',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Информация о дипломном проекте',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
            ]
        },
        layout2020: {
            id: 'layout2020',
            title: 'Веб-вёрстка 2020',
            done: false,
            inProcess: true,
            finalWork: 'url',
            comments: [],
            show: true,
            body: [
                {
                    id: uuidv4(),
                    title: 'Введение',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Приветствие',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Как работают сайты. Верстка. Backend и Frontend',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Возможности HTML, CSS, JS',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Редактор кода. Codepen',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Работа с devtools',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'VS Code',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Базовый HTML',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Ускорение работы. Emmet',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Элементы HTML-разметки. Базовые теги',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Теги картинок и ссылок. Кнопки',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Теги таблиц',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Служебные теги',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Кодстайл HTML',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Базовый HTML',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Подключение CSS',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Селекторы. Вес селектора',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Единицы измерения CSS',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Стилизация CSS',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Свойство display',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Блочная модель',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Позиционирование',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Кодстайл CSS',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Работа с макетом',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Форматы изображений',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Работа с макетом. Photoshop',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Экспорт изображений',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Работа с макетом. Figma',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Layout',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Интро',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'HTML-семантика',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Разметка макета',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Флексбокс — базовая сетка (часть 1)',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Флексбокс — базовая сетка (часть 2)',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Css-стилизация (часть1)',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Css-стилизация (часть2)',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Продвинутый HTML. Формы',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Узконаправленные теги',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Теги для аудио и видео. Iframe. Нюансы использовани',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Продвинутое подключение изображений',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Формы',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Продвинутый СSS',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Интро',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Подключение шрифтов',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Комбинаторные селекторы',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Псевдоклассы',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Псевдоэлементы',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Transition',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Transform',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Кастомные свойства',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'CSS-функции',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'БЭМ-именование',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Сетки',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Интро',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Что такое сетка?',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Построение собственной сетки',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Сетки на примере Bootstrap',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Практика: bootstrap',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Пример сложной разработки сетки',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Аутро',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Адаптивность. Декстоп и планшет',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Интро',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Виды верстки',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Медиа-запросы. Mobile First',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Медиа-запросы. Практика',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Best Practices',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Pixel Perfect',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Адаптивность. Мобильные устройства (откроется 13.08.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Доступность (откроется 03.09.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Javascript для верстальщика (откроется 06.11.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Кроссбраузерность (откроется 27.11.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Практикум (бонус) (откроется 18.12.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Работа с хостингом (откроется 08.01.2021)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Курсовая (мини-проект)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Верстка HTML-писем',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Сборщики',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Препроцессоры и Постпроцессоры',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'CSS Grid',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Анимация',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'CMS',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Будущее верстки',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Информация о дипломном проекте',
                    done: false,
                    show: true,
                    lessons: [],
                },
            ]
        },
        javascript2019: {
            id: 'javascript2019',
            title: 'JavaScript 2019',
            done: true,
            inProcess: false,
            finalWork: 'url',
            comments: [],
            show: true,
            body: [
                {
                    id: uuidv4(),
                    title: 'Знакомство с языком',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Интро',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Что умеет JavaScript и почему он так популярен?',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Инструменты разработчика',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Hello, world!',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Синтаксис языка',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Аутро',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Основы',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Приветственное видео',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Интро',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Числа',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Строки',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Логические (булевые) значения',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'NaN (Not a Number)',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Infinity',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Математические операторы',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Переменные',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Преобразование типов',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Условия',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Циклы',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Функции',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Переходим к следующему модулю',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Интро',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Объявление и вызов функций',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Аргументы',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Локальные и глобальные переменные',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Hoisting',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Возвращаемые значения',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Рекурсия',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Массивы и объекты',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Понятие объектов',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Объекты в JavaScript',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Перебор свойств объекта',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Массивы',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Стандартный объект Math',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Стандартный объект String',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Стандартный объект Array',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Стандартный объект Date',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Замыкания',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Глобальный объект window',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Сборщик мусора',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Замыкания',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'IIFE',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Объекты и конструкторы',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Функции-конструкторы',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Контекст вызова',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Привязка контекста (call, apply и bind)',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Объектно-ориентированное программирование',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'ООП. Наследование, инкапсуляция, полиморфизм',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Функциональное наследование',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Прототипное наследование',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Прототипы стандартных объектов',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Разное',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Объект arguments',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'setTimeout и setInterval',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Выполнение кода через eval',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Обработка исключений (throw, catch)',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Регулярные выражения',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Строгий режим (strict mode)',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'JavaScript в браузере. DOM',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Интро',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'DOM',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Порядок выполнения скриптов',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Селекторы',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Свойства и методы элементов',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'События и обработчики',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Погружение и всплытие событий',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Web API',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Интро',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Console',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Window',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Document',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Информация о браузере и истории переходов',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'LocalStorage и SessionStorage',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'ContentEditable',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Разнообразие Web API',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Клиент и сервер',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Клиент-серверное взаимодействие (интро)',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Запуск локального сервера',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'AJAX и callback',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'JSON и Promise',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'API и WebSocket',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'jQuery',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Библиотека jQuery. Интро',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Библиотеки и frameworks. Интро',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Возможности jQuery',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Анимация',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'AJAX',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Плагины',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Современный JavaScript. ES 2015',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'История стандарта ECMAScript. Интро',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Транспиляция и полифиллы',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Let и const',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Деструктуризация',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Rest и spread',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Template strings',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Стрелочные функции и параметры по умолчанию',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Классы и наследование',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Сборка проектов',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Интро. Что такое сборка проектов и для чего она нужна?',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Node.js',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'npm',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Gulp',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Webpack',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'React',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'DOM и императивный подход. Интро',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'React и декларативный подход',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Подготовка рабочего пространства',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Простое React-приложение',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Разделение на компоненты',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Redux',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Последний модуль. Осталось чуть-чуть!',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Интро',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Ключевые принципы Redux',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Установка зависимостей и разделение на компоненты',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Создание store и reducers',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Создание actions',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Запуск приложения',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Бонус',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Библиотеки и фреймворки 2017',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Развитие стандарта ECMAScri',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Тестирование кода',
                            done: true,
                        },
                    ],
                },
            ]
        },
        javascript2020: {
            id: 'javascript2020',
            title: 'JavaScript 2020',
            done: false,
            inProcess: true,
            finalWork: 'url',
            comments: [],
            show: true,
            body: [
                {
                    id: uuidv4(),
                    title: 'Введение',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'О курсе',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'JavaScript и области применения',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Инструменты разработчика',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Первый проект',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Переменные и работа с числами',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Переменные let',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Числа',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Математические операторы',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Практика работы с числами',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Функции работы с числами',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Сравнение чисел',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Практика сравнения чисел и Math',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Строки, boolean и условные операторы',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Типы данных',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Строка',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Boolean',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Типы и сравнение',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Условные операторы',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Практика условий и сравнений',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Тернарный оператор',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Основы булевой алгебры',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Массивы и циклы',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Примитивные типы и массивы',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Что такое массив',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Цикл for',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Циклы for of, for in',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Циклы while и do-while',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Операторы continue и break',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Какой цикл выбрать',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Функции',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Intro: Переиспользование кода',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Базовый синтаксис',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Аргументы функции',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Возвращаемое значение и undefined',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'undefined и null',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Именование',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Объекты (откроется 25.08.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Константы, области видимости и замыкания (откроется 11.09.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Преобразование типов и нестрогие сравнения (откроется 29.09.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Введение в DOM (откроется 15.10.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Обработка событий и пользовательский ввод (откроется 03.11.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Разработчик и soft skills',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Модули',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Npm, package.json',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Event loop и асинхронная разработка',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Методы объекта и прототипы',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Тестирование',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Обработка ошибок',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Общение с сервером, async/await',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'События',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'ООП и его реализация в JavaScript',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'ФП, работа с массивами и строками',
                    done: false,
                    show: true,
                    lessons: [],
                },
            ]
        },
        phpDeveloperChapterOne: {
            id: 'phpDeveloperChapterOne',
            title: 'PHP-разработчик с нуля до PRO. Часть 1',
            done: false,
            inProcess: true,
            finalWork: 'url',
            comments: [],
            show: true,
            body: [
                {
                    id: uuidv4(),
                    title: 'Введение в программирование',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Вводная лекция ко всему курсу',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Вводная лекция. Курс 1',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Что такое программирование',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Веб-сервер установка, настройки',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Установка XAMPP на MacOS',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Установка XAMPP на Linux',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Настройка XAMPP на MacOS и Linux',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Создание сайта в OS панели',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Синтаксис PHP и редакторы кода',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Практика — создание и использование переменных',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Структура файлов на сервере и их соответствие url в строке браузера',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'HTML и CSS для php программиста',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Структура управления данными. Базовые концепции PHP 7',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Приветственное видео',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Массивы в PHP',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Практика — работаем с массивами',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Встроенные (магические) константы, суперглобальные массивы',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Выражения, операторы',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Управляющие конструкции, циклы, приведение типов',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Практика — работаем с управляющими конструкциями и операциями',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Функции для ежедневной работы, подключение файлов, пример',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Написание алгоритмов, разбор типовых алгоритмов',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Практика — работа с алгоритмами',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Стили и стандарты оформления кода — psr-1 и psr-12, грамотное именование переменных',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Терминология и типовые ошибки',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Протокол HTTP/HTTPS',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Переходим к следующему модулю',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Протокол HTTP/HTTPS',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Пример работы с GET и POST данным',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Пример интеграции верстки',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Пользовательские функции',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Интро',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Пользовательские функции. Часть 1',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Пользовательские функции. Часть 2',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Пользовательские функции. Часть 3',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Файлы и каталоги',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Файлы. Права доступа. Режимы работы',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Функции по работе с файлами и каталогами',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Загрузка файлов на сервер',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Cookie/Session',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Cookie',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Session',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'База данных MySQL',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Последний модуль. Осталось чуть-чуть!',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Интро',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Общие сведения о БД',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Методы работы с БД',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Основные операции для работы с таблицами',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Синтаксис базовых запросов',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Объединение данных из нескольких таблиц',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Подготовленные запросы',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Экспорт и импорт БД',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Архитектура построения структуры таблиц БД',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Реляционная база данных (нормальные формы). Часть 1',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Реляционная база данных (нормальные формы). Часть 2',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Стандарты и Стили оформления в БД, Примеры работы',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
            ]
        },
        phpDeveloperChapterTwo: {
            id: 'phpDeveloperChapterTwo',
            title: 'PHP-разработчик с нуля до PRO. Часть 2',
            done: false,
            inProcess: true,
            finalWork: 'url',
            comments: [],
            show: true,
            body: [
                {
                    id: uuidv4(),
                    title: 'Объекты (базовые понятия)',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Вводная лекция Курс 2',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Основные понятия ООП',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Составляющие класса',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Стандарты и стили оформления в ООП, psr-1 и psr-12',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Пространства имен, указатель $this, constructor, destructor',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Стандарты и стили оформления в ООП, psr-1 и psr-2',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Принципы',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Абстракция и инкапсуляция',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Наследование и указатели (parent, self)',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Полиморфизм',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Объекты (расширенные понятия)',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Статические свойства и методы',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Абстрактные классы и методы',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Финальные классы и методы',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Функции и стандарты по работе с классами',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Функции по работе с классами и объектами',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Подгрузка классов. Стандарт PSR-0 и PSR-4',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Исключения и другие встроенные классы',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Исключения',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Замыкания. Встроенные интерфейсы. Анонимные классы',
                            done: true,
                        },

                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'ООП. Шаблоны',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Архитектура и принципы проектирования',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Порождающие шаблоны проектирования',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Структурные паттерны',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Поведенческие шаблоны',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Другие поведенческие шаблоны',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Базовые и объектно-реляционные паттерны',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Паттерны представления бизнес-логики и слой представления данных',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Антипаттерны',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
            ]
        },
        phpDeveloperChapterThree: {
            id: 'phpDeveloperChapterThree',
            title: 'PHP-разработчик с нуля до PRO. Часть 3',
            done: false,
            inProcess: false,
            finalWork: 'url',
            comments: [],
            show: true,
            body: [
                {
                    id: uuidv4(),
                    title: 'Подготовка среды обучения. Ручной режим',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Вводная лекция Курс 3',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'VirtualBox установка и настройка',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Приемы работы в Linux и консоли',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Nginx. Установка и настройка',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Установка и настройка PHP и MySQL',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Менеджер зависимостей — Composer',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Установка Laravel, конфигурирование серверов',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Знакомство и настройка PhpStorm',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Архитектура и проектирование',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Архитектура и проектирование',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Структура проекта Laravel',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Структура проекта Laravel',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Простейшая маршрутизация, миграция и отображение данных',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Eloquent ORM',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Контроллеры и шаблонизатор Blade',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Формы, запросы форм и CSRF',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'GIT и командная разработка',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Системы контроля версий, знакомство с git',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Основы работы с git',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Работа с удаленными репозиториями',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Работа с ветками',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Другие инструменты git',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Laravel — начинающий уровень',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Модели — ресурсы',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Работа со Связями в Eloquent. Часть 1',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Работа со Связями в Eloquent. Часть 2',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Базовые концепции в Laravel. Часть 1',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Базовые концепции в Laravel. Часть 2',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Авторизация и Регистрация',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Почта, Уведомления, События и Сессия',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Laravel — продвинутый уровень',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Коллекции',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Работа с frontend',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Консольные команды, Cron и запуск команд по расписанию в Laravel',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Шаблонизатор Blade',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Seeds Factories',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Основы автотестирования',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Интеграция с внешним сервисом pushall',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Eloquent ORM и База данных',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Eloquent ORM',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'QueryBuilder',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Постраничная навигация',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Миграции',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Полиморфная связь и связь сквозь объект',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Laravel — очереди и WebSocket',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Очереди в Laravel и Работы — jobs',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Менеджер процессов Supervisord',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Установка Redis',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Инструмент мониторинга laravel/horizon',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'WebSocket и вещание в laravel',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Laravel — кеширование и оптимизация',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Кеширование',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Профилирование кода',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Рефакторинг',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Бонус-модуль. Введение в Symfony',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Введение и установка Symfony',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Структура проекта и настройка PhpStorm',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Создание первых страниц, Маршрутизация и Контроллеры',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Flex и Recipes',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Шаблонизатор Twig',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Debug Profiler и другие инструменты отладки',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Подключаемые файлы: Css и Js',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Генерация URL',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Создание Json-API',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Сервисы и Autowiring',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Webpack Encore',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
            ]
        },
        git: {
            id: 'git',
            title: 'Система контроля версий Git',
            done: false,
            inProcess: false,
            finalWork: 'url',
            comments: [],
            show: true,
            body: [
                {
                    id: uuidv4(),
                    title: 'Система контроля версий Git',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Версии программного кода',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Установка Git',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Индекс и частичные коммиты',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Сравнение версий',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Отмена изменений и откат версий',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Репозитории и коллективная работа',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Ветки: создание и управление',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Слияние и разрешение конфликтов',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Полезные инструменты',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Правила работы с Git',
                            done: false,
                        },
                    ],
                },
            ]
        },
        bitrix1C: {
            id: 'bitrix1C',
            title: 'Программист 1С-Битрикс',
            done: false,
            inProcess: false,
            finalWork: 'url',
            comments: [],
            show: true,
            body: [
                {
                    id: uuidv4(),
                    title: 'Философия разработки, подготовка рабочего места',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Философия разработчика',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Подготовка рабочего места',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Настройка phpStorm',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Источник товаров и контента',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Что такое инфоблок и как он работает',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Различие между элементом и товаром каталога',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Стандартные классы для работы с инфоблоком',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Обмен с "1С". Soap. Домашнее задание',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Интеграция с 1С-Битрикс и другими системами',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Структура кода в Битрикс',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Организация init.php, dbconn и settings',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Работа с файлами XML. Пример работы с SOAP на примере сервиса погоды',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Создание страниц и шаблонов',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Создание страниц и шаблонов, часть 1',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Создание страниц и шаблонов, часть 2',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Стандартные компоненты',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Стандартные компоненты, часть 1',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Стандартные компоненты, часть 2',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Каталог интернет магазина',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Каталог интернет-магазина: часть 1',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Каталог интернет-магазина: часть 2',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Карта товара',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Карта товара: часть 1',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Карта товара: часть 2',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Оформление заказа',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Оформление заказа, часть 1',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Оформление заказа, часть 2',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Личный кабинет',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Личный кабинет: урок 1',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Личный кабинет: урок 2',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Дорабатываем сайт, ч.1',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Дорабатываем сайт, ч.1',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Дорабатываем сайт, ч.2',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Дорабатываем сайт, ч.1',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Бонусный материал: ответы на часто задаваемые вопросы',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Бонусный материал: ответы на часто задаваемые вопросы',
                            done: false,
                        },
                    ],
                },
            ]
        },
        symfony: {
            id: 'symfony',
            title: 'PHP-фреймворк Symfony',
            done: false,
            inProcess: false,
            finalWork: 'url',
            comments: [],
            show: true,
            body: [
                {
                    id: uuidv4(),
                    title: 'Введение в Symfony',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Введение и Установка Symfony',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Структура проекта и настройка PhpStorm',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Создание первых страниц, маршрутизация и контроллеры',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Flex и Recipes',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Шаблонизатор Twig',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Debug Profiler и другие инструменты отладки',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Подключаемые файлы: CSS и Js',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Генерация URL',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Создание Json-API',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Сервисы и Autowiring',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Webpack Encore',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Основы Symfony',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Основы Autowiring и конфигурирования',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Конфигурации для разного окружения, файл.env',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Создание своего сервиса',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Продвинутое конфигурирование, service.yaml',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Пример интеграции с сервисом Slack',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Автовызов методов сервиса, аннотация @required',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Генерация кода: symfony/maker-bundle',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Пример создания консольной команды',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Безопасное хранение секретных конфигураций, Vault',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Шаблонизатор Twig',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Работа с блоками Twig',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Расширения шаблонизатора Twig',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'LazyLoad в расширениях',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Библиотека работы с базой данных Doctrine Orm',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Знакомство с Doctrine и миграциями',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Entity Repositories и Query Builder',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Обновление Entity',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Фикстуры и расширения Doctrine',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Фикстуры и демоданные',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Расширение возможностей, Sluggable и Timestampable',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Связи в Doctrine. Часть 1 — Один ко многим',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Связь один ко многим (One-to-Many)',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Получение связанных объектов с дополнительными критериями',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Сложная логика и Join',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Связи в Doctrine. Часть 2',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Фикстуры 2.0',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Постраничная навигация',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Связь Многие-ко-многим',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Система аутентификации',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Создание модели пользователя',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Форма авторизации',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Базовый процесс Аутентификации',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Безопасность и улучшение Аутентификатора',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Роли и уровни доступов и безопасность',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Роли и доступы к страницам',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Получение авторизованного пользователя',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Иерархия ролей и Имперсонализация',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Доступы по API',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Создание токена и API маршрута',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Создание Аутентификатора для API',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Регистрация и классы Voter',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Регистрация и программная авторизация',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Расширенное управление доступом, классы Voter',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Знакомство с компонентом Форм (откроется 19.08.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Валидация вывод и обработка формы (откроется 02.09.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Расширение полей и кастомная валидация (откроется 16.09.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Загрузка файлов в Symfony (откроется 30.09.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Сервис отправки электронных писем (откроется 14.10.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Система Событий (откроется 28.10.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Выделение переиспользуемых бандлов для Symfony (откроется 11.11.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
            ]
        },
        reactjs: {
            id: 'reactjs',
            title: 'JavaScript-фреймворк React.js',
            done: false,
            inProcess: true,
            finalWork: 'url',
            comments: [],
            show: true,
            body: [
                {
                    id: uuidv4(),
                    title: 'Введение в React',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Что такое React. Основные преимущества',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Основы декларативного подхода',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Возможности React, компоненты, состояние, применения',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Экосистема React, основные библиотеки, из чего обычно состоит реакт',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Создание проекта',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Конфигурация webpack на клиенте',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Конфигурация webpack на сервере',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Подключаем к проекту HMR и SSR',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Подключаем typescript',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'CSS modules, Jest, Enzyme',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Typescript',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Основы Typescript, Типы',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Работа с массивами',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Работа с объектами и интерфейсами',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Типизация функций и типы ТС',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Generics',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Классы',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Infer, typeof, keyof, Mapped Types',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Компоненты на примере новостной карточки Reddit',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Компоненты в React',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Состояния в Class Components',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Состояния в Functional Components',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Создаем Layout приложения. Часть 1',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Создаем Layout приложения. Часть 2',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Создаем компонент новостной карточки',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Жизненный цикл компонента',
                            done: false,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Hooks и Функциональное программирование',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Карирование и Функции высшего порядка',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Hooks в реакт',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Map Reduce React',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Создание компонента dropdown c использованием hooks',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Compose, Pipe и применение в React',
                            done: false,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Больше о компонентах и введение в тестирование компонентов',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Адаптивные и неадаптивные компоненты. Mobile first и desktop first в адаптиве. Разница в подходах',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Дропдаун меню',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Введение в unit тесты и jest',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Пишем тест на реакт компонент Enzyme vs Snapshots',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Вспомогательные компоненты',
                            done: false,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Работа с публичным API на примере Reddit (откроется 12.08.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Введение в Redux на примере Новостной ленты (откроется 08.09.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Использование Redux-Thunk на примере бесконечной ленты (откроется 29.09.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Сайдбар + роутинг (откроется 30.09.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Формы на примере комментариев и карточки поста (откроется 20.10.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Оптимизируем приложение (откроется 30.11.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'SSR + NextJS (откроется 21.12.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Бонус-модуль: Mobx (откроется 21.12.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
            ]
        },
        vuejs: {
            id: 'vuejs',
            title: 'Фреймворк Vue.js',
            done: false,
            inProcess: false,
            finalWork: 'url',
            comments: [],
            show: true,
            body: [
                {
                    id: uuidv4(),
                    title: 'Основы Vue',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Что такое Vue. Реактивный подход',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Онлайн-сервисы для работы с кодом. Настройки окружения в codepen.io для Vue',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Разбираем код примера. Еще немного о реактивности',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Делаем todo-лист. Директива V-bind',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Делаем todo-лист. Директива V-for, циклы',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Создание проекта',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Делаем todo-лист. Директивы V-on и V-model',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Делаем todo-лист. Функции. Директивы V-else, V-show',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Концепт курса',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Установка проекта через vue-cli',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Подготовка среды для работы над проектом',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Каталог товаров',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Vue как фреймворк. Компоненты',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Vue как фреймворк. Модули',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Однофайловый компонент',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Передача параметров в компоненты',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Компонент товара',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Пагинация и фильтрация',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Вычисляемые свойства',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Пользовательские события',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Создание пагинации в списке товаров',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Атрибут key для списка',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Фильтрация каталога. Геттеры/Сеттеры вычисляемых свойств. Методы-наблюдатели',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Страница товара',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Переключение страниц',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Хуки жизненного цикла компонента. Шина событий',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Карточка товара. Фильтры данных',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Корзина',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Vue-роутер',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Установка и настройка Vuex',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Изменение данных в хранилище',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Страница корзины. Vuex – Геттеры',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Удаление товаров из корзины и изменение количества',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Работа с API. Список товаров',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Асинхронность JavaScript. Promises',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Взаимодействие с сервером',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Выводим список товаров и пагинацию из API',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Фильтрация списка товаров из API',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Обработка загрузки и ошибок',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Страница товара',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Корзина товаров. Действия во Vuex',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Управление товарами в корзине',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Работа с API. Оформление заказа',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Форма оформления заказа. Слоты и примеси',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Оформление заказа. Отправка данных на сервере и обработка ошибок',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Страница успешно оформленного заказа',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Деплой (откроется 17.08.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
            ]
        },
        nodejs: {
            id: 'nodejs',
            title: 'Node.js',
            done: false,
            inProcess: false,
            finalWork: 'url',
            comments: [],
            show: true,
            body: [
                {
                    id: uuidv4(),
                    title: 'Введение',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Промо-ролик. Краткое описание курса. Минимальные требования',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Контекст: краткая история JavaScript',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Контекст: краткая история и особенности Node.js',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Подготовка рабочей среды',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Интро',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Подготовка рабочей среды',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Node.js и npm',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Система контроля версий git',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Базовый редактор: VSCode',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Hello, world!',
                    done: true,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Введение',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Первая Node.js программа',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Package.json и semver',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Шаблон проекта',
                            done: true,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Решаем базовые задачи',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Документация Node.js, globals',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Файловая система',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'HTTP-сервер',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Полезные сторонние модули',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'HTTP запросы из Node.js',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Асинхронный код',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Введение',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Callbacks',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Promises',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Promisify',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'async/await',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Pro tip: Bluebird',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Express.js',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Введение',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Рендеринг HTML',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'middleware',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'REST API',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Загрузка файлов',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Авторизация и аутентификация',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Базы данных, Реляционные ДБ (откроется 25.08.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Базы данных, Нереляционные БД (откроется 16.09.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'CLI программы (откроется 02.10.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Углубляем теорию + продвинутые понятия (откроется 15.10.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Real-time & WebSockets (откроется 02.11.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Pro tips (откроется 19.11.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
                {
                    id: uuidv4(),
                    title: 'Информация о дипломном проекте (откроется 07.12.2020)',
                    done: false,
                    show: true,
                    lessons: [],
                },
            ]
        },
        universalKnowledge: {
            id: 'universalKnowledge',
            title: 'Универсальные знания программиста',
            done: false,
            inProcess: false,
            finalWork: 'url',
            comments: [],
            show: true,
            body: [
                {
                    id: uuidv4(),
                    title: 'Протокол HTTP',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Протокол HTTP. Запрос и ответ',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Методы HTTP-запросов GET и POST',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Другие методы HTTP-запросов',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Статус-коды HTTP-ответов',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Адресация сетевых ресурсов',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'HTTP-заголовки',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Версии протокола HTTP и HTTPS',
                            done: false,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Введение в алгоритмы',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Введение в алгоритмы',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Зачем нужны алгоритмы',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Рекурсивные алгоритмы',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Временная сложность алгоритмов',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Алгоритм бинарного поиска',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Алгоритм сортировки пузырьком',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Алгоритм сортировки QuickSort',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Алгоритм сортировки MergeSort',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Алгоритм поиска подстроки Рабина-Карпа',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Алгоритм поиска подстроки Кнута-Морриса-Пратта',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Алгоритм поиска подстроки Бойера-Мура',
                            done: false,
                        },
                    ],
                },
            ]
        },
        digitalProjectManager: {
            id: 'digitalProjectManager',
            title: 'Руководитель digital-проектов',
            done: false,
            inProcess: false,
            finalWork: 'url',
            comments: [],
            show: true,
            body: [
                {
                    id: uuidv4(),
                    title: 'Экологичный путь менеджера',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Карта компетенций менеджера',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Требовательность: как ее развивать у себя и своих сотрудников',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Власть. Мозгоклюйство. Эксплуатация',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Релиз-менеджмент: готовим проекты к запуску',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Релиз-менеджмент: готовим проекты к запуску. Часть I',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Релиз-менеджмент: готовим проекты к запуску. Часть II',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Требовательность digital-продюсера',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Требовательность',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Когнитивные искажения',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Разница между требовательностью и мозгоклюйством',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Аналитика. Базовые навыки',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Аналитика в digital-проектах',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Пишем ТЗ. Годные шаблоны',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Как пасти котов: правильное делегирование в IT',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Как ставить задачи и не ссориться с разработчиками',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'SMART и правила делегирования',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Пробуем Канбан',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Переговорные навыки. Часть 1. Цикл продаж',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Переговоры. Продажи. Введение',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Заказ digital-услуги глазами клиента',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Типовые переговоры и ошибки в digital',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Цикл продаж',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Переговорные навыки. Провокации. Работа с возражениями. Часть 2.',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Подходящий-неподходящий клиент',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Экспресс-классификация клиентов.',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Работа с возражениями',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Провокация',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Конструктивный диалог. Слои аргументации',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Оценка и декомпозиция digital-проектов',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Декомпозиция: не по функциям, а по экранам!',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Откуда это на странице?',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Неопределенность бьет по башке',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Способы оценок. Математическое обоснование экономической невозможности точных и адекватных оценок.',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Адекватная модель оценки задач',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Оценки с опорой на прошлое и будущее',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Постановка задач на ресерч',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Реальная смета. Формат. Подготовка вилочных и точных смет.',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Откуда брать оценки.',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Экспресс-версия диаграммы Ганта. Запуск проекта с распараллеливанием.',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Нетиповые проекты. Большое-толстое ТЗ.',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Управление временем',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Методология GTD. Обзор инструментов. Пирамида Франклина и Колесо баланса.',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Планирование задач. Разбор входящих. Формулировки. Матрица Эйзенхауэра. Вредопольза.',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Приоритеты задач. Концентрация. Помодоро. График некидалова. Энергия. Работа с почтой.',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Scrum: передовая методология управления современными digital-проектами. Часть 1.',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Развитие водопадной модели. Появление гибких методологий. Как работает Scrum.',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Ведение бэклогов. Инструменты для ведения, примеры.',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Роли в Scrum. Product Owner во внутренней и заказной разработке',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Роли в Scrum. Команда. Scrum master. Значение менеджера в Scrum. Планирование итерации. Оценка задач. Planning poker',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Scrum. Передовая методология управления digital-проектами. Часть 2.',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Минимальная отчетность. Проведение стендапов',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Диаграмма сгорания. Диаграмма производительности',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Стратегии тестирования — коротко',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Демонстрация проекта. Ретроспективы',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Культ карго в IT. Краткие выводы модуля',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Решение факапов. Lean/TOC. Обзор.',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Конвейер и большие запасы. Бережливое производство. Виды потерь.',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Устранение потерь. Value Stream Map.',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'ТОС введение. Диаграмма Иссикавы. Дерево существующей действительности. Грозовая туча',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Root Cause анализ. Отчет А3',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Интеграционные проекты.',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Интеграция. Что это такое и как с этим быть.',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Бриф и протокол обмена данными',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Разработка и релиз интеграции',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Управление дизайнерами. Разработка дизайна по scrum',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Стратегии разработки дизайна',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Работа над дизайном по agile',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Бегунок креативности',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Процесс, подготовка презентации, демонстрация концепции',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Работа с возражениями по дизайну',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Новые люди на проекте. Краткие выводы',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Основы технической грамотности',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Как работает интернет',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Хостинг: планирование нагрузок',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Deployment. Доступы',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'SSL-сертификаты',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Почта',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Проверка скорости работы систем',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'GIT/SVN для менеджеров',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Адаптивные сайты. Мобильные сайты',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Нюансы управления мобильной разработкой',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'CMS / Frameworks',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Подключение систем доставки',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Контроль. Риски. Поощрения. Наказания. Обратная связь.',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Обеспечение работы технической поддержки',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Риск-менеджмент. Управление рисками в digital-проектах',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Наказание подчиненных. Как наказывать в интеллектуальной digital-среде.',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Проведение совещаний',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Метод освоенного объема',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Основы MS Project',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Метод освоенного объема в MS Project',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'БОНУСНЫЙ МОДУЛЬ: Работа с типовыми документами',
                    done: false,
                    show: true,
                    lessons: [
                        {
                            id: uuidv4(),
                            title: 'Документы для аккаунт-менеджера.',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Передаем проект от аккаунт-менеджера руководителю проекта.',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Документы для руководителя проекта.',
                            done: false,
                        },
                        {
                            id: uuidv4(),
                            title: 'Документы для бухгалтерии. Вспомогательные документы',
                            done: false,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Информация о дипломном проекте',
                    done: false,
                    show: true,
                    lessons: [],
                },
            ]
        },
    }

export default initialState;