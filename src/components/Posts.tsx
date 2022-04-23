import Post from "./Post";
import { PostTypes } from "./Post";

const Posts = ({ posts }: { posts: PostTypes[] }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Posts;
