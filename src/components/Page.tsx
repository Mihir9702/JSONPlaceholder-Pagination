import { useState, useEffect } from "react";
import Posts from "./Posts";
import Pagination from "./Pagination";
import { PostTypes } from "./Post";
import PostAmountSelect from "./PostsAmountSelect";

const Page = () => {
  const [posts, setPosts] = useState<PostTypes[]>([]);
  const [page, setPage] = useState(1);
  // let POSTAMOUNT = 20;
  const [postAmount, setPostAmount] = useState(20);

  const fetchPosts = async (
    page: number,
    POSTAMOUNT: number
  ): Promise<PostTypes[]> => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${POSTAMOUNT}&_page=${page}`
    );

    return await response.json();
  };

  useEffect(() => {
    fetchPosts(page, postAmount).then((posts) => setPosts(posts));
  }, [page, postAmount]);

  return (
    <div className="page">
      <PostAmountSelect postAmount={postAmount} setPostAmount={setPostAmount} />
      <Posts posts={posts} />
      <Pagination pageState={[page, setPage]} POSTAMOUNT={postAmount} />
    </div>
  );
};

export default Page;
