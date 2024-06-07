export const metadata = {
  title:'Услуги',
  description: 'Список услуг по разработке сайтов, дизайну, продвижению и сопровождению.',
  keywords: ['услуги', 'услуги фронтенд-разработчика'],
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="container pt-10">{children}</section>;
}
