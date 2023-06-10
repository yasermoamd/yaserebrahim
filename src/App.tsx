/* eslint-disable react-hooks/rules-of-hooks */
import './App.css'
import { Nav } from './components/nav/Nav'
import { Home } from './pages/home/Home'
import Projects from './pages/Projects/Projects'
import About from './pages/about/About';

function App() { 
  return (
     <main className='container mx-auto flex flex-col justify-around'>
        <Nav />
        <section id='#blog'>
        <Home />
       </section>
       <section id='#skills'>
        <Projects  />
       </section>
       <section>
        <About />
       </section>
    </main>
  )
}

export default App
