import { LandingPageFlow } from './components/Flow'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
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

export default App
