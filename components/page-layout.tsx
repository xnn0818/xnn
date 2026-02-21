import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

interface PageLayoutProps {
  children: React.ReactNode
  backgroundImage?: string
}

export function PageLayout({ children, backgroundImage = "/images/rules-bg.jpg" }: PageLayoutProps) {
  return (
    <main>
      <Navbar />
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
        <div className="fixed inset-0 bg-[#0a0e17]/80" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-20">
          {children}
        </div>
      </section>
      <Footer />
    </main>
  )
}
