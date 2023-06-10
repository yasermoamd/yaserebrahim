
import axios from 'axios';
import { useState, useEffect } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Projects =() => {
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
  const topics: { name: any; }[] = [];
  return (
    <main className="container mx-auto flex justify-center" id="#project">  
      <section className="flex flex-col gap-2">
          <h1>Projectt</h1>
          <div className="grid gap-6 lg:grid lg:grid-cols-3 lg:gap-8 md:grid md:grid-cols-2 md:gap-6 sm:grid sm:grid-cols-1 sm:gap-[4rem]">
            {
              yaserDate?.map((data:any) => (
                <div className="flex flex-col  justify-between 
                       w-[350px] h-[240px] border-2 border-gray-500 mb-4 rounded-lg" key={data.id}>
                   <div className="flex justify-center items-center">
                       <h1>{data.name}</h1>
                   </div>
                   <div className='flex flex-col'>
                    <span className='underline my-1 ml-4'>Technology Used</span>
                     {
                     data.topics.forEach((top:any) => {
                        var topicsList = {
                          name: top
                        };
                        topics.push(topicsList);
                     })
                     }
                    <div className='grid grid-cols-2 gap-2 mx-3 capitalize'>
                      {
                        topics.slice(0, 6)?.map((topic) => 
                        <span 
                          className='bg-[#eeeeee] text-[12px] rounded-xl p-2'
                          key={topic.name}>{topic.name}</span>)
                      }
                    </div>
                   </div>
                   <div className='flex justify-between gap-7 items-center mx-4 my-2'>
                      <div>
                        <img src="https://avatars.githubusercontent.com/u/94254041" className='w-[40px] h-[40px] rounded-full' alt="" />
                      </div>
                      <Link to={data.html_url} target="_blank"><FiExternalLink className="w-6 h-6" /></Link>
                   </div>
                </div>
              ))
            }
          </div>
      </section>
    </main>
  )
}

export default Projects;
