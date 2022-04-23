import React from "react";

export interface PostTypes {
  id: number;
  title: string;
  body: string;
}

const Post: React.FC<PostTypes> = ({ id, title, body }) => {
  return (
    <div className="post" key={id}>
      <div id="post-id">{id}</div>
      <div id="post-title">{title}</div>
      <div id="post-body">{body}</div>
    </div>
  );
};

export default Post;
