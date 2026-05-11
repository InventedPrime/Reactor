import { LandingPageFlow } from './components/Flow'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="appShell">
      <Header />
      <main className="homeSectionGridContainer">
        <LandingPageFlow />
      </main>
      <Footer />
    </div>
  )
}

export default App
