import { TextBox } from "./Components"
import { AboutUs, Campaign, Contact, Features, Footer, Hero, Mission, Navbar } from "./Sections"

function App() {

  return (
    <div className="app">
      <div className="wrapper">
        <Navbar />
        <Hero />
      </div>
      <Campaign />
      <Mission />
      <Features />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
