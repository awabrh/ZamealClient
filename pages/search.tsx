import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import SearchItem from "../components/SearchItem";
import { usePostsQuery } from "../generated/graphql";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useRouter } from "next/router";
import Pager from "../components/Pager";

const search: React.FC = () => {
  const router = useRouter();
  const { query, page } = router.query;
  const limit = 12;
  const pageIndex = page ? parseInt(page as string) - 1 : 0;
  const offset = pageIndex * limit;

  const [{ data }] = usePostsQuery({
    variables: {
      limit: limit,
      location: query as string,
      offset: offset,
    },
  });

  const count = data?.posts.count ? data?.posts.count : 0;

  return (
    <div className="bg-black h-screen text-white" dir="rtl">
      <Navbar />
      <div className="pb-6">
        <div className="pt-3 pb-10">
          <SearchBar sameRow={true} />
        </div>
        <div className=" py-1 px-4 grid justify-center gap-y-8 gap-x-8  double:grid-cols-2 grid-cols-1 triple:grid-cols-3 xl:grid-cols-4  w-full ">
          {data?.posts.posts.length === 0 ? (
            <div className="flex justify-center w-full double:col-span-2 col-span-1 triple:col-span-3 xl:col-span-4">
              <p>لا توجد نتائج</p>
            </div>
          ) : (
            <>
              {data?.posts.posts.map((post) => (
                <SearchItem post={post} key={post.id} />
              ))}
              {count > limit && (
                <Pager limit={limit} count={count} pageIndex={pageIndex} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default withUrqlClient(createUrqlClient)(search);
