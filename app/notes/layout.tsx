export const metadata = {
  title:'Заметки frontend-разработчика',
  description: 'Заметки о frontend-разработке, дизайне, маркетинге и личном.',
  keywords: ['заметки веб разработчика', 'заметки фронтенд разработчика', 'заметки'],
}

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="container pt-10">{children}</section>;
}
