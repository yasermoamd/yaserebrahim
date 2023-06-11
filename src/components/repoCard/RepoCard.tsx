import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";


interface IRepoCard {
    id: string;
    name: string;
    topics: any
    owner: {
        html_url: string;
    }
    html_url: string;
}

const RepoCard:React.FC<IRepoCard> = (data) => {
    const topics: { name: any; }[] = [];
   
    return (
      <article key={data.id} className="flex flex-col justify-between  w-[350px] h-[240px] border rounded-md p-4 bg-[#eeeeee] border-gray-500">

                   <div className="flex justify-center items-center">
                       <h1>{data.name}</h1>
                   </div>
                   <div className='flex flex-col'>
                    <span className='underline my-1 ml-4' id="tech_used">Technology Used</span>
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
                          className='bg-[#eeeeee] text-black font-bold font-roboto text-[12px] rounded-xl p-2'
                          key={topic.name}>{topic.name}</span>)
                      }
                    </div>
                   </div>
                   <div className='flex justify-between gap-7 items-center mx-4 my-2'>
                      <Link to={data.owner.html_url} target='_blank' className='cursor-pointer'>
                        <img src="https://avatars.githubusercontent.com/u/94254041" className='w-[40px] h-[40px] rounded-full' alt="" />
                      </Link>
                      <Link to={data.html_url} target="_blank"><FiExternalLink className="w-6 h-6" /></Link>
                   </div>
                </article>
    )
}

export default RepoCard;