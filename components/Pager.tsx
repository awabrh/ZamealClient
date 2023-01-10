import router, { useRouter } from "next/router";
import React from "react";

type PagerProps = {
  count: number;
  limit: number;
  pageIndex: number;
};

const Pager: React.FC<PagerProps> = ({ count, limit, pageIndex }) => {
  const router = useRouter();
  const { query } = router.query;
  const pages = Math.ceil(count / limit);
  const currentPage = pageIndex + 1;
  const isLastPage = pages === currentPage;
  const minPage = Math.max(1, currentPage - 6);
  const maxPage = Math.min(pages, 10, currentPage + 6);

  return (
    <div className="flex justify-center w-full double:col-span-2 col-span-1 triple:col-span-3 xl:col-span-4">
      <div className="flex">
        {currentPage !== 1 && (
          <p
            className="hover:text-primary cursor-pointer transition-all"
            onClick={() => {
              router.push(`/search?query=${query}&page=${currentPage - 1}`);
            }}
          >
            السابقة
          </p>
        )}
        {Array.from(Array(maxPage).keys()).map((i) => {
          const color = minPage + i === currentPage ? "text-primary" : "";
          return (
            <div
              key={i}
              className={`px-2 ${color} hover:text-primary cursor-pointer transition-all`}
              onClick={() => {
                router.push(`/search?query=${query}&page=${minPage + i}`);
              }}
            >
              {minPage + i}
            </div>
          );
        })}
        {!isLastPage && (
          <p
            className="hover:text-primary cursor-pointer transition-all"
            onClick={() => {
              router.push(`/search?query=${query}&page=${currentPage + 1}`);
            }}
          >
            التالية
          </p>
        )}
      </div>
    </div>
  );
};

export default Pager;
