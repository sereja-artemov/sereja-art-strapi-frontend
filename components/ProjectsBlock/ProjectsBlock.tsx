'use client';

import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useWindowSize from '@/hooks/useWindowSize';
import { projectsData } from '@/data/projectsData';
import { FullWidthSkeleton } from '../Skeletons/FullWidthSkeleton';

const ProjectsBlock = () => {
  const windowSize = useWindowSize();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [sliderCreated, setIsSliderCreated] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      slides: {
        perView: 1,
        spacing: 20,
      },
      created() {
        setIsSliderCreated(true);
      },
    },
    [
      // add plugins here
    ],
  );

  // исправил неправильную ширину слайдов при первоначальной загрузке
  // useEffect(() => {
  //   instanceRef?.current?.update();
  // }, [isImageLoading]);

  const getCurrentSlideNumber = () => {
    return isImageLoading && instanceRef.current && instanceRef.current.track.details.abs + 1;
  };

  const getSliderlength = () => {
    return isImageLoading && instanceRef.current && instanceRef.current.track.details.slides.length;
  };

  return (
    <>
      {!sliderCreated && <FullWidthSkeleton />}

      <div ref={sliderRef} className={`flex max-w-full overflow-hidden keen-slider`}>
        {projectsData.map((project, index) => {
          return (
            <div key={index} className="flex flex-col mb-3 keen-slider__slide group w-full">
              {/* фикс вспышки */}
              {!isImageLoading && <FullWidthSkeleton />}
              <Image
                className={`${!isImageLoading && 'invisible'} w-full h-auto mb-2 rounded-2xl`}
                src={project.previewImage || project.image}
                alt={`${project.name} картинка проекта`}
                sizes="100vw"
                width={1200}
                height={675}
                onLoad={() => setIsImageLoading(true)}
                placeholder="blur"
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUZlPcBQABZAD2mDpKDAAAAABJRU5ErkJggg=='
              />
              {/* подложка с информацией о проекте */}
              {sliderCreated && (
                <div
                  className={`relative ease-in duration-200 h-full overflow-auto xl:py-6 py-5 mb-2 px-4 rounded-2xl bg-[#424750]/80`}>
                  <div className="flex flex-col h-full">
                    <h3 className="mb-2 text-base font-medium leading-normal md:text-xl">
                      {project.name}
                    </h3>
                    <p className="md:text-base line-clamp-4 max-[320px]:line-clamp-5">
                      {project.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {sliderCreated && (
        <div className={`flex items-center justify-between px-2 mt-auto`}>
          {/* счетчик */}
          <p className="text-base md:text-lg lg:text-xl">
            <span className="text-[1.6em] font-medium">{getCurrentSlideNumber()}</span>/{' '}
            {getSliderlength()}
          </p>
          {/* стрелки */}
          <div className="flex flex-wrap gap-5">
            {isImageLoading && instanceRef.current && (
              <>
                <button
                  className="disabled:opacity-20"
                  onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
                  disabled={currentSlide === 0}>
                  <svg
                    className="rotate-180"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="2.2em"
                    width="2.2em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                      fill="currentColor"></path>
                  </svg>
                </button>
                <button
                  className="disabled:opacity-20"
                  onClick={(e: any) => {
                    e.stopPropagation() || instanceRef.current?.next();
                  }}
                  disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="2.2em"
                    width="2.2em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                      fill="currentColor"></path>
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsBlock;
