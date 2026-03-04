import PanelForm from "@/components/panel-form"
import Navbar from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { LoadingScreen } from "@/components/loading-screen"
import { SocialMediaButton } from "@/components/social-media-button"
import { InfoSection } from "@/components/info-section"
import { StatsSection } from "@/components/stats-section"
import { Footer } from "@/components/footer"
import { FaqSection } from "@/components/faq"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen relative">
        <Navbar />
        <SocialMediaButton />

        <section className="min-h-screen flex items-center justify-center pt-16 pb-20 px-4">
          <div className="container mx-auto">
            <Card className="max-w-2xl mx-auto overflow-hidden animate-slide-up glass border-glow card-3d">
              <div className="h-3 bg-gradient-to-r from-red-500 via-red-600 to-indigo-500"></div>
              <CardContent className="p-8">
                <PanelForm />
              </CardContent>
            </Card>
          </div>
        </section>

        <FaqSection />
        <InfoSection />
        <StatsSection />
        <Footer />
      </div>
    </>
  )
}
