import DonationBlog from "@/components/DonationComponents/DonationBlog";

export default function SlugPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}
    <section className="pt-10">
      <DonationBlog />
    </section>
  </>;
}
