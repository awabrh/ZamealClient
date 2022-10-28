import React from "react";
import InfoCard from "./InfoCard";
import carImage from "../assets/carImage.jpg";
import { Post, PostQuery } from "../generated/graphql";

type PostInfoProps = {
  postQuery: PostQuery;
};

const PostInfo: React.FC<PostInfoProps> = ({ postQuery }) => {
  const post = postQuery.post!;
  const ac = post ? "يعمل" : "لا يعمل";
  const creator = post.user;

  const driverInfo = [creator.name, creator.address, creator.mobile];
  const carInfo = [post.carModel, `${post.numberOfSeats}`, ac];
  const tarheelInfo = [
    `${post.departure} - ${post.arrival}`,
    post.days,
    post.locations,
  ];
  const price = `${post.price} جنيه / للراكب`;
  const timeLapsed = "قبل 3 أسابيع";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-10 md:items-center ">
      <div className="flex flex-col items-center w-full">
        <img
          src={carImage.src}
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
      </div>
    </div>
  );
};

export default PostInfo;
