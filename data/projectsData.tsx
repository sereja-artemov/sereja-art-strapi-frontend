import { baseURL } from '@/constants/constants';
import { ProjectType } from '@/lib/types';

export const projectsData: ProjectType[] = [
  {
    name: 'Комплексный маркетинг для компании Промматик',
    description:
      'Помог мощно стартануть с помощью сайта и маркетинговых инструментов. Настроил контекстную рекламу и интеграцию с CRM-системой',
    date: new Date('2022-10-26'),
    cost: 123,
    links: {
      buildLink: 'https://prommatic.ru',
    },
    image: `https://api.sereja-art.ru/uploads/prommatic_1024_4386f3119c.webp`,
    previewImage: `https://api.sereja-art.ru/uploads/prommatic_1024_4386f3119c.webp`,
    tools: ['1C-Bitrix', 'Aspro', 'SEO', 'Битрикс24', 'Bicall'],
    year: 2022,
    active: true,
  },
  {
    name: 'Промышленные сварочные роботы GSK - компания Техновелд',
    description:
      'Провел маркетинговое исследование, создал дизайн и сверстал на Tilda. Подключил необходимые виджеты и маркетинговые сервисы.',
    date: new Date('2022-09-01'),
    cost: 123,
    links: {
      buildLink: 'https://robot.tweld.ru',
    },
    image: 'http://tech.sereja-art.ru/upload/projects/tweld_robot_1280x720.jpg',
    previewImage: '',
    tools: ['HTML', 'CSS', 'JS', 'Tilda', 'Bitrix24', 'Bicall'],
    year: 2022,
    active: true,
  },

  {
    name: 'Предприятие Материально-Технического Снабжения «ОМ»',
    description:
      'Запустил сайт на решении Аспро:Максимум и CMS 1С-Битрикс, наполнил контентом по ТЗ заказчика и сделал интеграцию с 1С.',
    date: new Date('2019-01-01'),
    cost: 123,
    links: {
      buildLink: 'https://om2b.ru',
    },
    image: 'http://tech.sereja-art.ru/upload/projects/pmtsom_1280x720.jpg',
    previewImage: '',
    tools: ['HTML', 'CSS', 'JS', 'Bitrix', 'Аспро: Максимум'],
    year: 2019,
    active: true,
  },
  {
    name: 'Калькулятор семейного бюджета',
    description:
      'Финансовый вопрос – важный аспект семейной жизни. Многие пары расстаются из-за разногласий в формировании бюджета, а ведь коммуналку проще платить вдвоем. Иначе, зачем оно всё?',
    date: new Date('2022-01-26'),
    cost: 123,
    links: {
      detailLink: '',
      githubLink: '',
      buildLink:
        'http://tech.sereja-art.ru/project-build/family-budget-calculator/',
    },
    image:
      'http://tech.sereja-art.ru/upload/projects/family-budget-calculator-960x540.jpg',
    previewImage:
      'http://tech.sereja-art.ru/upload/projects/family-budget-calculator-960x540.jpg',
    tools: ['HTML', 'CSS', 'JS', 'React', 'Дизайн'],
    year: 2022,
    active: true,
  },
  {
    name: 'CakeDreams - сайт кондитерской',
    description:
      'Разработал с нуля сайт кондитерской. Прототипирование, дизайн-макет, верстка, программирование.',
    date: new Date('2020-01-26'),
    cost: 123,
    links: {
      detailLink: '',
      githubLink: '',
      buildLink: '',
    },
    image: 'http://tech.sereja-art.ru/upload/projects/cakedreams_1280x720.png',
    previewImage:
      'http://tech.sereja-art.ru/upload/projects/cakedreams_1280x720.png',
    tools: ['HTML', 'CSS', 'JS', 'Photoshop'],
    year: 2020,
    active: true,
  },

  {
    name: 'AntFarm - домашняя муравьиная ферма',
    description:
      'Провел маркетинговое исследование, разработал прототип и дизайн-макет сайта, сверстал и запустил в работу.',
    date: new Date('2019-01-26'),
    cost: 123,
    links: {
      detailLink: '',
      githubLink: '',
      buildLink: '',
    },
    image: 'http://tech.sereja-art.ru/upload/projects/ant-farm_1280x720.png',
    previewImage:
      'http://tech.sereja-art.ru/upload/projects/ant-farm_1280x720.png',
    tools: ['HTML', 'CSS', 'JS', 'Photoshop', 'Bicall'],
    year: 2019,
    active: true,
  },

  {
    name: 'Глория - клуб любителей кошек',
    description:
      'Разработал прототип и дизайн-макет сайта, выполнил адаптивную верстку.',
    date: new Date('2020-01-26'),
    cost: 123,
    links: {
      detailLink: '',
      githubLink: '',
      buildLink: '',
    },
    image: 'http://tech.sereja-art.ru/upload/projects/gloria_1280x720.png',
    previewImage:
      'http://tech.sereja-art.ru/upload/projects/gloria_1280x720.png',
    tools: ['HTML', 'CSS', 'JS', 'Photoshop'],
    year: 2020,
    active: true,
  },

  {
    name: 'Сайт-портфолио фотографа',
    description:
      'Разработал прототип и дизайн-макет сайта, выполнил адаптивную верстку.',
    date: new Date('2018-01-26'),
    cost: 123,
    links: {
      detailLink: '',
      githubLink: '',
      buildLink: '',
    },
    image: 'http://tech.sereja-art.ru/upload/projects/photograph_1200.webp',
    previewImage:
      'http://tech.sereja-art.ru/upload/projects/photograph_1200.webp',
    tools: ['HTML', 'CSS', 'JS', 'Photoshop'],
    year: 2018,
    active: true,
  },

  {
    name: 'Movies Explorer Frontend',
    description:
      'Cервис, в котором можно найти фильмы из коллекции BeatFilm и сохранить в избранном в личном кабинете.',
    date: new Date('2022-10-24'),
    cost: 123,
    links: {
      githubLink: 'https://github.com/sereja-artemov/movies-explorer-frontend',
    },
    image:
      'http://tech.sereja-art.ru/upload/projects/movies-explorer_1280x720.jpg',
    previewImage: '',
    tools: ['HTML', 'CSS', 'JS', 'React', 'Node.js', 'MongoDB'],
    year: 2022,
    active: true,
  },

  {
    name: 'Mesto',
    description:
      'Сервис предоставляет возможность делиться фотографиями и картинками. Фронтенд и бэкенд части приложения со следующими возможностями: авторизации и регистрации пользователей, операции с карточками и пользователями.',
    date: new Date('2022-09-12'),
    cost: 123,
    links: {
      githubLink: 'https://github.com/sereja-artemov/react-mesto-api-full',
    },
    image: 'http://tech.sereja-art.ru/upload/projects/mesto_1280x720.jpg',
    previewImage: '',
    tools: ['HTML', 'CSS', 'JS', 'React', 'Node.js', 'MongoDB'],
    year: 2022,
    active: true,
  },
  {
    name: 'CatEnergy',
    description: 'Адаптивная верстка сайта функционального питания для котов',
    date: new Date('2020-09-12'),
    cost: 123,
    links: {
      githubLink: 'https://github.com/sereja-artemov/catenergy',
    },
    image: 'http://tech.sereja-art.ru/upload/projects/catenergy_1280x720.jpg',
    previewImage: '',
    tools: ['HTML', 'CSS'],
    year: 2020,
    active: true,
  },
  {
    name: 'Скорая компьютерная помощь',
    description:
      'Дизайн и адаптивная верстка лендинга аутсорсинговой IT-компании.',
    date: new Date('2020-09-12'),
    cost: 123,
    links: {},
    image: 'http://tech.sereja-art.ru/upload/projects/pchelp_1280x720.jpg',
    previewImage: '',
    tools: ['HTML', 'CSS', 'Photoshop'],
    year: 2020,
    active: true,
  },

  {
    name: 'Автомотошкола Курск',
    description:
      'Один из первых моих сайтов из далекого 2017 года. Работает без CMS.',
    date: new Date('2017-01-01'),
    cost: 123,
    links: {},
    image:
      'http://tech.sereja-art.ru/upload/projects/automotoschool_1280x720.jpg',
    previewImage: '',
    tools: ['HTML', 'CSS', 'JS', 'Bootstrap', 'Photoshop'],
    year: 2017,
    active: false,
  },
];
