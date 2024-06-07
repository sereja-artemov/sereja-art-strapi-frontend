export const metadata = {
  title:'Блог веб-разработчика',
  description: 'Веду блог о frontend-разработке, дизайне, маркетинге и личном.',
  keywords: ['блог веб разработчика', 'блог фронтенд разработчика', 'блог'],
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="container pt-10">{children}</section>;
}
