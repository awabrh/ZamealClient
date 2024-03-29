import { useRouter } from "next/router";
import React from "react";
import { Post } from "../generated/graphql";
import { timeSince } from "../utils/elapsedTime";
import { getImage } from "../utils/getImage";
import { SearchItemPost } from "../utils/types";

type SearchItemProps = {
  post: Post | SearchItemPost;
};

const SearchItem: React.FC<SearchItemProps> = ({ post }) => {
  const router = useRouter();
  const creator = post.user;
  const imgUrl = getImage(post.imageId);

  return (
    <div className=" flex flex-col justify-center items-center justify-self-center w-full">
      <img
        className="h-52 w-full object-cover rounded-lg hover:cursor-pointer"
        onClick={() => router.push(`/post/${post.id}`)}
        src={imgUrl}
      />
      <div className="w-full flex justify-between pt-3">
        <h4 className="font-bold">{`${post.price} جنيه / للراكب`}</h4>
        <h6 className="font-light">{timeSince(post.createdAt)}</h6>
      </div>
      <div className="w-full font-light text-sm">
        <p>{`${creator?.name} - ${creator?.dep} - ${creator?.batch} `}</p>
        <p>{post.locations}</p>
      </div>
    </div>
  );
};

export default SearchItem;
