export const metadata = {
  title:'Проекты frontend-разработчика',
  description: 'В моем портфолио проекты с версткой, созданием сайтов с нуля, дизайном и продвижением.',
  keywords: ['проекты', 'проекты фронтенд-разработчика'],
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="container pt-10">{children}</section>;
}
