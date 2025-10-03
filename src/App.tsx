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

function App() {
  return (
   <div>
       <GlobalStyles/>
       <Header/>
       <Main/>
       <About/>
       <Statistics/>
       <Works/>
       <Testimony/>
       <Contacts/>
       <Footer/>
   </div>
  )
}

export default App
