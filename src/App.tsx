import Cursor from "./components/Cursor/Cursor"
import About from "./Layout/About/About"
import Hero from "./Layout/Hero/Hero"
import Services from "./Layout/Services/Services"

function App() {

  return (
    <>
        <Cursor />
        <main>
          <Hero />
          <Services />
          <About />
        </main>
    </>
  )
}

export default App
