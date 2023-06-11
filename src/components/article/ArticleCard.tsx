import moment from "moment";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";


interface IArticleCard {
    id: string;
    title: string;
    published: string;
    author: {
      displayName: string;
    };
    labels: string;
    url: string;
} 

const ArticleCard:React.FC<IArticleCard> = (post) => {

    const formatDate = (date: string) => {
        const dTime = moment(date).format("MMM Do YY");
        return dTime;
      };
    return (
        <article key={post.id} className="flex flex-col justify-between  w-[350px] h-[200px] border rounded-md p-4 bg-[#eeeeee] border-gray-500">
            <div className="flex flex-col gap-2 justify-center place-content-center">
              <div className="w-[280px]">
                <h1 className="font-bold text-lg font-roboto">{post.title}</h1>
              </div>
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
    )
}

export default ArticleCard;