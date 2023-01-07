import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import PostInfo from "../../components/PostInfo";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { NextPage } from "next";
import { useMeQuery, usePostQuery } from "../../generated/graphql";

const Post: NextPage<{ id: string }> = ({ id }) => {
  let numberId;
  try {
    numberId = parseInt(id);
  } catch (error) {
    numberId = 0;
  }
  const [isServer, setIsServer] = useState(true);
  useEffect(() => {
    setIsServer(false);
  });

  const [{ data, fetching }] = usePostQuery({ variables: { id: numberId } });
  const [{ data: meQuery }] = useMeQuery({
    pause: isServer,
  });

  let showDelete;

  if (meQuery?.me && meQuery.me.post?.id.toString() === id) {
    showDelete = true;
  } else {
    showDelete = false;
  }

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
            <PostInfo postQuery={data} showDelete={showDelete} />
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
