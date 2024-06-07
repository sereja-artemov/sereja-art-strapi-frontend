import React from 'react';

const Facts = () => {
  return (
    <section className="container mb-6 lg:flex lg:justify-between lg:flex-wrap">
      <ul className="flex flex-wrap gap-1.5 mb-6 md:mb-4 md:text-sm lg:text-md items-start">
        <li className="border border-darkPrimary/50 dark:border-whitePrimary/30 rounded-full px-3.5 py-1 flex items-center">
          5+ лет опыта
        </li>
        <li className="border border-darkPrimary/50 dark:border-whitePrimary/30 rounded-full px-3.5 py-1 flex items-center">
          Работаю официально
        </li>
        <li className="border border-darkPrimary/50 dark:border-whitePrimary/30 rounded-full px-3.5 py-1 flex items-center">
          Результат не гарантирую
        </li>
      </ul>
      <p className="text-sm lg:text-base lg:max-w-[460px]">
      Помогаю бизнесу зарабатывать с&nbsp;помощью современных веб-технологий и&nbsp;маркетинговых инструментов
      </p>
    </section>
  );
};

export default Facts;
