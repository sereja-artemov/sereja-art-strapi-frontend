export const metadata = {
  title:'Контакты',
  description: 'На этой странице информация о том как меня найти. Почта, чаты, социальные сети.',
  keywords: ['Сергей Артемов контакты', 'Sergey Artemov contacts', 'Sergey Artemov frontend developer контакты', 'контакты'],
}

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="container pt-10">{children}</section>;
}
