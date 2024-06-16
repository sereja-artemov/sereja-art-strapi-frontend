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
    image: `${baseURL}/uploads/prommatic_1024_4386f3119c.webp`,
    previewImage: `${baseURL}/uploads/prommatic_1024_4386f3119c.webp`,
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
    image: 'https://api.sereja-art.ru/uploads/tweld_robot_1280x720_bf476caa88.jpg',
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
    image: 'https://api.sereja-art.ru/uploads/automotoschool_1280x720_b878d7f4e4.jpg',
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
      'https://api.sereja-art.ru/uploads/family_budget_calculator_960x540_4c8f30d4f2.jpg',
    previewImage:
      'https://api.sereja-art.ru/uploads/family_budget_calculator_960x540_4c8f30d4f2.jpg',
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
    image: 'https://api.sereja-art.ru/uploads/cakedreams_1280x720_120fe78dfd.png',
    previewImage:
      'https://api.sereja-art.ru/uploads/cakedreams_1280x720_120fe78dfd.png',
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
    image: 'https://api.sereja-art.ru/uploads/ant_farm_1280x720_ba5b610ce3.png',
    previewImage:
      'https://api.sereja-art.ru/uploads/ant_farm_1280x720_ba5b610ce3.png',
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
    image: 'https://api.sereja-art.ru/uploads/gloria_1280x720_b176fd30f7.png',
    previewImage:
      'https://api.sereja-art.ru/uploads/gloria_1280x720_b176fd30f7.png',
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
    image: 'https://api.sereja-art.ru/uploads/photograph_1200_348a1e6085.webp',
    previewImage:
      'https://api.sereja-art.ru/uploads/photograph_1200_348a1e6085.webp',
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
      'https://api.sereja-art.ru/uploads/movies_explorer_portfolio_2a6eb2ce66.png',
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
    image: 'https://api.sereja-art.ru/uploads/mesto_1280x720_aa5fb3b0fe.jpg',
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
    image: 'https://api.sereja-art.ru/uploads/catenergy_1280x720_b6dea5571b.jpg',
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
    image: 'https://api.sereja-art.ru/uploads/pchelp_1280x720_4e6842e57d.jpg',
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
      'https://api.sereja-art.ru/uploads/automotoschool_1280x720_b878d7f4e4.jpg',
    previewImage: '',
    tools: ['HTML', 'CSS', 'JS', 'Bootstrap', 'Photoshop'],
    year: 2017,
    active: false,
  },
];
