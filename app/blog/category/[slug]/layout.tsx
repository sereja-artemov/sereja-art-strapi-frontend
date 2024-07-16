import DonationBlog from "@/components/DonationComponents/DonationBlog";

export default function BlogPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}
    <section className="pt-8">
      {/* <DonationBlog /> */}
    </section>
  </>;
}
