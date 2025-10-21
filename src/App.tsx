import Cursor from "./components/Cursor/Cursor"
import ButtonWhatsapp from "./components/whatsappButton/ButtonWhatsapp"
import About from "./Layout/About/About"
import CallForm from "./Layout/CallForm/CallForm"
import Footer from "./Layout/Footer/Footer"
import Hero from "./Layout/Hero/Hero"
import Nav from "./Layout/Nav/Nav"
import Services from "./Layout/Services/Services"

function App() {

  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <ButtonWhatsapp />
        <Hero />
        <Services />
        <About />
        <CallForm />
        {/* <h1>jbkkkkkkkkkkbk</h1> */}
      </main>
      <Footer />
    </>
  )
}

export default App
