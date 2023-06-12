import axios from 'axios';
import { useEffect, useState } from 'react';
import ArticleCard from '../../components/article/ArticleCard';

export const Home = () => {
  const [posts, setPosts] = useState<[]>([]);

  const fetchPosts = async () => {
    const response = await axios.get(
      'https://www.googleapis.com/blogger/v3/blogs/3680796929179959115/posts?key=AIzaSyAUG21yyLbdSa1bOAdAk0DkYpgSg1FPQeI'
    );
    if (response.status === 200) {
      setPosts(response.data.items);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <main
      className="w-full container mx-auto flex flex-col justify-around"
      id="#home"
    >
      <h1
        data-testid="home-title"
        className="my-3 font-bold font-roboto text-xl underline"
      >
        Blogger
      </h1>
      <section
        className="grid grid-cols-1 gap-4
      lg:grid lg:grid-cols-2 tablet:grid tablet:grid-cols-2
      laptop:grid laptop:grid-cols-3 laptop:gap-10 desktop:grid desktop:grid-cols-4
      ">
        {posts.map((post) => (
          <ArticleCard
            id={post.id}
            title={post.title}
            published={post.published}
            author={{
              displayName: post.displayName,
            }}
            labels={post.labels}
            url={post.url}
            data-testid="article-card"
          />
        ))}
      </section>
    </main>
  );
};
