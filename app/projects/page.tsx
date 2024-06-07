import Image from 'next/image';
import { AiOutlineCalendar } from 'react-icons/ai';
import { projectsData } from '@/data/projectsData';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';

function Projects() {
  console.log(projectsData);
  
  return (
    <>
      <h1 className="block-title">Проекты</h1>
      <ul className='grid gap-5 lg:grid-cols-2'>
        {projectsData.sort((a, b) =>
      a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0
    ).map((project, index) => (
          <li
            key={index}
            className="flex-col p-3 pb-6 border block-bg border-blockBorderColorLight dark:border-blockBorderColorDark rounded-2xl"
          >
            {/* <ProjectsImage project={project} /> */}

            <Image
              className="w-full h-auto mb-5 rounded-xl"
              width={910}
              height={512}
              src={project.previewImage || project.image}
              alt={`${project.name} картинка проекта`}
              placeholder='blur'
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrQcAAX8A/n6ayNMAAAAASUVORK5CYII="
            />

            <div className="px-3">
              <span className="flex items-center gap-2 mb-2 text-sm dark:text-secondTextColorDark text-secondTextColor">
                <AiOutlineCalendar className="w-4 h-auto" />
                {project.year} год
              </span>
              <h2 className="mb-1.5 leading-snug md:text-lg text-base font-semibold">
                {project.name}
              </h2>
              <p className="mb-4 text-sm leading-normal xl:text-base">
                {project.description}
              </p>
              <ul className="flex flex-wrap mb-4 text-xs md:text-sm">
                {project.tools.map((tool, index) => (
                  <li
                    key={index}
                    className="mr-[0.7em] mb-[0.7em] px-[.9em] py-[0.3em] rounded-[0.3em] bg-accentBg"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 shrink-0">
                {project.links.githubLink !== undefined && (
                  <Link href={project.links.githubLink} target="_blank">
                    <BsGithub
                      className="w-[30px] h-auto hover:text-[#6767AB] hover:transition-all hover:duration-[0.2s] hover:ease-[ease-in-out] hover:scale-[1.2]"
                      title="ссылка на github"
                    />
                  </Link>
                )}
                {project.links.buildLink !== undefined && (
                  <Link href={project.links.buildLink} target="_blank">
                    <FiExternalLink
                      className="w-[30px] h-auto hover:text-[#6767AB] hover:transition-all hover:duration-[0.2s] hover:ease-[ease-in-out] hover:scale-[1.2]"
                      title="ссылка на сайт проекта"
                    />
                  </Link>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Projects;
