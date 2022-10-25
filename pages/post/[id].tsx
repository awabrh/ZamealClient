import React from "react";
import Navbar from "../../components/Navbar";
import PostInfo from "../../components/PostInfo";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { NextPage } from "next";
import { usePostQuery } from "../../generated/graphql";

const Post: NextPage<{ id: string }> = ({ id }) => {
  let numberId;
  try {
    numberId = parseInt(id);
  } catch (error) {
    numberId = 0;
  }
  const [{ data, fetching }] = usePostQuery({ variables: { id: numberId } });
  return (
    <div dir="rtl">
      <Navbar />
      {fetching ? (
        <div className="flex flex-col w-full h-96 mt-32 items-center">
          جاري التحميل ...
        </div>
      ) : (
        <>
          {data?.post ? (
            <PostInfo post={data.post} />
          ) : (
            <div className="flex flex-col w-full h-96 mt-32 items-center">
              <h2 className="text-4xl font-bold">ياللاحراج !</h2>
              <h2 className="text-4xl font-bold mb-10"> 👈👉 </h2>
              <p>يبدو ان هنالك خطأ</p>
              <p>هذه الصفحة غير موجودة</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

Post.getInitialProps = ({ query }) => {
  return {
    id: query.id as string,
  };
};

export default withUrqlClient(createUrqlClient)(Post);
