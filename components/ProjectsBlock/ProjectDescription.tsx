export const ProjectDescription = ({name, description}: {name: string, description: string}) => {
  return (
    <div
    className={`relative ease-in duration-200 h-full overflow-auto xl:py-6 py-5 mb-2 px-4 rounded-2xl bg-[#424750]/80`}
  >
    <div className="flex flex-col h-full">
      <h3 className="mb-2 text-base font-medium leading-normal md:text-xl">
        {name}
      </h3>
      <p className="md:text-base line-clamp-4 max-[320px]:line-clamp-5">
        {description}
      </p>
    </div>
  </div>
  )
}
