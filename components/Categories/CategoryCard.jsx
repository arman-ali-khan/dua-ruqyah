"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import SubCategories from "../SubCategories/SubCategories";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function CategoryCard({ category }) {
  const router = useRouter();
  const categoryId = router.query.cat;

  // Get sub category data
  const {
    data: subcategories,
    error,
    isLoading,
  } = useSWR(
    `https://api.duaruqyah.com/api/subcategory/${category?.cat_id}/en`,
    fetcher
  );

  return (
    <div>
      <Link
        href={`/duas/dua's-importance?cat=${category?.id}`}
        className="flex cursor-pointer hover:bg-[#e8f0f5] duration-300 px-3 h-[4.84rem] rounded-xl items-center"
      >
        <div className="w-14 h-14">
          <img
            alt=""
            className="p-3"
            src={`/assets/icons/${category?.cat_icon}.svg`}
          />
        </div>
        <div className="flex flex-col">
          <b>{category?.cat_name}</b>
          <span className="text-xs">Subcategory:{category?.no_of_subcat}</span>
        </div>
      </Link>
      {/* Sub Category */}
      {
        categoryId==category?.id && <div className="ml-12 scroll-mt-4" id={category?.cat_id}>
        {isLoading && (
          <div className="w-full bg-zinc-300  px-4 py-2 animate-pulse rounded-md">
            Loading...
          </div>
        )}
        {error && (
          <div className="w-full bg-zinc-300 px-4 py-2 animate-pulse rounded-md">
            Error
          </div>
        )}
        {/* Sub Categories */}
        <ul className="border-l-2 relative border-primary pl-4  font-semibold color-primary border-dotted flex flex-col space-y-2">
          {subcategories?.map((sub, i) => (
       
            <SubCategories key={i} sub={sub} />
          ))}
        </ul>
      </div>
      }
     
    </div>
  );
}

export default CategoryCard;
