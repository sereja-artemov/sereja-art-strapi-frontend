export default function NotFound() {
  return (
    <section className="py-24 lg:py-56 max-sm:py-12 bg-whitePrimary dark:bg-darkPrimary">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/3 p-4">
            <div className="border border-darkPrimary/50 dark:border-whiteSecondary/30 rounded-3xl py-24 px-6 lg:px-12 h-full flex flex-col justify-center">
              <h1 className="text-secondTextColor font-boss dark:text-secondTextColorDark text-center text-8xl sm:text-9xl lg:text-10xl bold">404</h1>
            </div>
          </div>
          <div className="w-full lg:w-1/3 p-4">
            <div className="rounded-3xl bg-whiteSecondary dark:bg-darkSecondary bg-opacity-50 px-8 py-9">
              <p className="text-lg lg:text-xl bold mb-2">Страница не найдена, извините.</p>
              <p className="text-secondTextColor dark:text-secondTextColorDark mb-5 lg:text-base">Она была перемещена, удалена, переименована или может быть никогда не существовала!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}