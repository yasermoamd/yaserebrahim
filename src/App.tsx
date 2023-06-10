/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css'
import { Nav } from './components/nav/Nav'
import { Home } from './pages/home/Home'
import Projects from './pages/Projects/Projects'
import About from './pages/about/About';

function App() {
  const [yaserDate, setYaserData] = useState([]);
  const fetchProjects = async () => {
      await axios.get("https://api.github.com/users/yasermoamd/repos")
      .then((data) => {
        setYaserData(data.data);
      })
  }
  useEffect(() => {
    fetchProjects();
  }, [])
  
  return (
     <main className='container mx-auto flex flex-col justify-around'>
        <Nav />
        <section id='#blog'>
        <Home />
       </section>
       <section id='#skills'>
        <Projects props={yaserDate}  />
       </section>
       <section>
        <About />
       </section>
    </main>
  )
}

export default App
