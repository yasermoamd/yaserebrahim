import axios from "axios"
import moment from "moment";
import { useEffect, useState } from "react"
import { FiExternalLink } from 'react-icons/fi';
import { Link } from "react-router-dom";

export const Home = () => {
    const [posts, setPosts ] = useState([]);
    const fetchPost = async () => {
        await axios.get("https://www.googleapis.com/blogger/v3/blogs/3680796929179959115/posts?key=AIzaSyAUG21yyLbdSa1bOAdAk0DkYpgSg1FPQeI")
        .then((data) => setPosts(data.data));
    }
    useEffect(() => {
        fetchPost();
    }, [])
    const formatDate = (date: any) => {
        const dTime = moment(date).format("MMM Do YY");
        return dTime;
    }
    return (
        <main className='w-full container mx-auto flex  justify-center my-5' id="#home">
           <section className="grid gap-6 lg:grid lg:grid-cols-3 lg:gap-8 md:grid md:grid-cols-2 md:gap-6 sm:grid sm:grid-cols-1 sm:gap-[4rem]">
             {
                posts.items?.map((post) => (
                    <article className="flex flex-col justify-between  w-[350px] h-[200px] border rounded-md p-4 bg-[#eeeeee]">
                        <div className="flex flex-col gap-2 justify-center place-content-center">
                           <div className="w-[280px]"> <h1 className="font-bold text-lg font-roboto">{post.title}</h1></div>
                           <div className="flex gap-5 justify-start items-center">
                               <span className="text-[12px]">{post.author.displayName}</span>
                               <span className="text-[12px]">{formatDate(post.published)}</span>
                           </div>
                        </div>
                        <div className="flex justify-between items-start">
                        <div className="text-[9px] flex gap-4 justify-end items-start">
                           {post.labels}
                        </div>
                        <Link to={post.url} target="_blank" className="flex gap-4 justify-end items-end w-[100px]">
                         <div className="flex gap-4 justify-center items-end">
                          <div className="flex text-[10px]">Reading?</div>
                          <div><FiExternalLink/></div>
                        </div>
                        </Link>
                        </div>
                       
                    </article>
                ))
             }
          </section>
        </main>
    )
  
}