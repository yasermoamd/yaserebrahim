import axios from 'axios';
import { useState, useEffect } from 'react';
import RepoCard from '../../components/repoCard/RepoCard';

const Projects = () => {
  const [yaserDate, setYaserData] = useState([]);
  const fetchProjects = async () => {
    await axios
      .get('https://api.github.com/users/yasermoamd/repos')
      .then((data) => {
        setYaserData(data.data);
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
        {yaserDate?.map(data => (
          <RepoCard
            id={data.id}
            name={data.name}
            topics={data.topics}
            owner={{
              html_url: data.html_url,
            }}
            html_url={data.html_url}
          />
        ))}
      </section>
    </main>
  );
};

export default Projects;
