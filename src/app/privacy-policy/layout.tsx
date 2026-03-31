import FooterNew from "@/components/footerNew";
import Header from "@/components/header";

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-transparent bg-cover bg-top bg-no-repeat min-h-screen">
      <Header />
      <div className="w-full">{children}</div>
      <FooterNew />
    </div>
  );
}
