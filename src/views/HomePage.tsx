import { LandingPageFlow } from '../components/Flow'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function HomePage() {
    return (
    <main>
        <Header />
        <section className="homeSectionGridContainer">
        <LandingPageFlow />
        </section>
        <Footer />
    </main>
    )
}