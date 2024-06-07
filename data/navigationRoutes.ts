// Добавляем \u00A0 вместо пробелов, чтобы корректно работала заливка текста

export const navigationRoutes = [
  {
    route: '/about',
    name: `Обо\u00A0мне`,
  },
  {
    route: '/projects',
    name: 'Проекты',
  },
  {
    route: '/services',
    name: 'Услуги',
  },
  {
    route: '/blog',
    name: 'Блог',
  },
  {
    route: '/notes',
    name: 'Заметки',
  },
  {
    route: '/contacts',
    name: 'Контакты',
  },
];
