import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import SearchItem from "../components/SearchItem";
import { usePostsQuery } from "../generated/graphql";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";

function search() {
  const [{ data }] = usePostsQuery();

  return (
    <div className="bg-black h-screen text-white" dir="rtl">
      <Navbar />
      <div className="">
        <div className="pt-3 pb-10">
          <SearchBar />
        </div>
        <div className=" py-1 px-4 grid justify-center gap-y-8 gap-x-8  double:grid-cols-2 grid-cols-1 triple:grid-cols-3 xl:grid-cols-4  w-full ">
          {!data
            ? null
            : data?.posts.map((post) => <div key={post.id}>{post.title}</div>)}
        </div>
      </div>
    </div>
  );
}

export default withUrqlClient(createUrqlClient)(search);
