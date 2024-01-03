import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
import Container from "@/components/shared/Container"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
          <div className="pb-20 pt-28 flex-1">
              <Container>

              {children}
              </Container>
          </div>
      <Footer />
    </div>
  )
}