import React from "react";
import InfoCard from "./InfoCard";
import { PostQuery, useDeletePostMutation } from "../generated/graphql";
import { getImage } from "../utils/getImage";
import { useRouter } from "next/router";
import { timeSince } from "../utils/elapsedTime";

type PostInfoProps = {
  postQuery: PostQuery;
  showDelete: Boolean;
};

const PostInfo: React.FC<PostInfoProps> = ({ postQuery, showDelete }) => {
  const post = postQuery.post!;
  const ac = post ? "يعمل" : "لا يعمل";
  const creator = post.user;
  const router = useRouter();

  const [, deleteMutation] = useDeletePostMutation();

  const deletePost = async () => {
    const response = await deleteMutation({ id: post.id });
    if (response.data?.deletePost) {
      router.push("/");
    } else {
      router.push("/post/0");
    }
  };

  const driverInfo = [creator.name, creator.address, creator.mobile];
  const carInfo = [post.carModel, `${post.numberOfSeats}`, ac];
  const tarheelInfo = [
    `${post.departure} - ${post.arrival}`,
    post.days,
    post.locations,
  ];
  const price = `${post.price} جنيه / للراكب`;
  const timeLapsed = timeSince(post.createdAt);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-10 md:items-center ">
      <div className="flex flex-col items-center w-full">
        <img
          src={getImage(post.imageId)}
          className="h-52 w-full object-cover rounded-lg md:w-96"
        />
        <div className="w-full md:w-96 flex justify-between md:py-5">
          <h4 className="font-bold">{price}</h4>
          <h6 className="font-light">{timeLapsed}</h6>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <InfoCard
          type="driver"
          values={driverInfo}
          className="h-fit md:min-h-full"
        />
        <InfoCard type="car" values={carInfo} className="justify-self-center" />
        <InfoCard type="tarheel" values={tarheelInfo} />
        {showDelete && (
          <button
            type="button"
            className="border-red-600 border-2 rounded-md px-8 pb-2 text-lg hover:bg-red-600 transition-all w-full md:w-96"
            onClick={deletePost}
          >
            حذف
          </button>
        )}
      </div>
    </div>
  );
};

export default PostInfo;
