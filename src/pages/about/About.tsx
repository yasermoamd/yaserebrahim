import Skills from '../../components/skills/Skills';

const About = () => {
  return (
    <main
      className="w-full container mx-auto flex flex-col justify-around"
      id="#home"
    >
      <h1 className="my-3 font-bold font-roboto text-xl underline">About</h1>
      <Skills />
    </main>
  );
};

export default About;
