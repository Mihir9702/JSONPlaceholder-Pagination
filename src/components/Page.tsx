import { useState, useEffect } from "react";
import Posts from "./Posts";
import Pagination from "./Pagination";
import { PostTypes } from "./Post";

const Page = () => {
  const [posts, setPosts] = useState([] as PostTypes[]);
  const [page, setPage] = useState(1);

  const fetchPosts = async (page: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}`
    );

    return await response.json();
  };

  useEffect(() => {
    fetchPosts(page).then((posts) => setPosts(posts));
  }, [page]);

  return (
    <div className="page">
      <Posts posts={posts} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Page;
