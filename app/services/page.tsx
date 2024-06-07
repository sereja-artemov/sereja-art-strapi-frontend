import { servicesData } from '@/data/servicesData';
import { ServicesProps } from '@/lib/types';

const Services = () => {
  return (
    <>
      <h1 className="block-title">Услуги</h1>
      <div className="grid gap-10 max-sm:gap-7 md:grid-cols-[repeat(auto-fit,minmax(383px,1fr))] bg-whiteSecondary dark:bg-darkSecondary p-5 lg:p-9 rounded-xl block-border">
        {servicesData.map((element:any, index) => (
          <ServicesItem key={index} itemData={element} />
        ))}
      </div>
    </>
  );
};

const ServicesItem = ({ itemData }: { itemData: ServicesProps }) => {
  return (
    <div>
      <h3 className="text-[1.2rem] lg:text-xl mb-5 leading-normal font-semibold">
        {itemData.group}
      </h3>
      <ul className="p-0 list-none">
        {itemData.services.map((element, index) => (
          <li
            className='relative sm:text-base text-sm leading-[1.7] mb-[0.5em] pl-[1.3em] before:block before:content-[""] before:w-[0.5em] before:h-[0.5em] before:absolute before:-translate-y-2/4 before:bg-[#935bc4] before:rounded-[50%] before:left-0 before:top-2/4'
            key={index}
          >
            {element.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
