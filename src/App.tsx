/* eslint-disable react-hooks/rules-of-hooks */
import './App.css';
import { Nav } from './components/nav/Nav';
import { Home } from './pages/home/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/about/About';
import { Link } from 'react-router-dom';

function App() {
  const date = new Date().getFullYear();
  return (
    <>
      <Nav />
      <main className="flex flex-col justify-around items-center sm:flex sm:justify-center items-center">
        <section id="#blog" className="">
          <Home />
        </section>
        <section id="#skills" className="">
          <Projects />
        </section>
        <section>
          <About />
        </section>
        <footer className="flex flex-col justify-center items-center my-10">
          <p>
            © {date} <Link to="/">Yaser Ibrahim</Link>
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;
