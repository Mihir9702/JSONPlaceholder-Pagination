import React from "react";

interface PostAmountSelectProps {
  postAmount: number;
  setPostAmount: React.Dispatch<React.SetStateAction<number>>;
}

const PostAmountSelect = ({
  postAmount,
  setPostAmount,
}: PostAmountSelectProps) => {
  return (
    <select
      className="post-amount-select"
      name="postAmount"
      value={postAmount}
      onChange={(e) => setPostAmount(Number(e.target.value))}
    >
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={15}>15</option>
      <option value={20}>20</option>
    </select>
  );
};

export default PostAmountSelect;
