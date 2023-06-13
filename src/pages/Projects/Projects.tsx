import axios from 'axios';
import { useState, useEffect } from 'react';
import RepoCard from '../../components/repoCard/RepoCard';

interface IProject {
  id: string;
  name: string;
  topics: string[];
  owner: {
    html_url: string;
  };
  html_url: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  const fetchProjects = async () => {
    await axios
      .get(`https://api.github.com/users/yasermoamd/repos`)
      .then((data) => {
        setProjects(data.data);
      });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <main
      className="w-full container mx-auto flex flex-col justify-around"
      id="#home"
    >
      <h1 className="my-3 font-bold font-roboto text-xl underline">Projects</h1>
      <section
        className="grid grid-cols-1 gap-8
    lg:grid lg:grid-cols-2 lg:gap-8 tablet:grid tablet:grid-cols-2
    laptop:grid laptop:grid-cols-3 laptop:gap-10 desktop:grid desktop:grid-cols-4
    ">
        {projects?.map(project => (
          <RepoCard
            id={project.id}
            name={project.name}
            topics={project.topics}
            owner={{
              html_url: project.owner.html_url,
            }}
            html_url={project.html_url}
          />
        ))}
      </section>
    </main>
  );
};

export default Projects;
