import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {GlobalStyles} from "./styles/GlobalStyles.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {About} from "./layout/sections/about/About.tsx";
import {Statistics} from "./layout/sections/statistics/Statistics.tsx";
import {Works} from "./layout/sections/works/Works.tsx";
import {Testimony} from "./layout/sections/testimony/Testimony.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";
import {Footer} from './layout/footer/Footer.tsx'
import {Particle} from "./components/particle/Particle.tsx";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn.tsx";

function App() {
  return (
   <div>
       <Particle/>
       <GlobalStyles/>
       <Header/>
       <Main/>
       <About/>
       <Statistics/>
       <Works/>
       <Testimony/>
       <Contacts/>
       <Footer/>
       <GoTopBtn/>
   </div>
  )
}

export default App
