'use client';
import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";



  function CategoryCard({category}) {
   
  //   const searchParams = useSearchParams()
  //   const categoryId = searchParams.get("cat");

  //   // sub category data
  //   const [subCategories,setSubCategories] = useState([])
    
  // useEffect(()=>{
  //   axios.get(`${process.env.NEXT_PUBLIC_SUBCATEGORY_API}/1/en`)
  //   .then(res=>{
  //       setSubCategories(res.data)
  //   })
  // },[categoryId])

  //   console.log(subCategories,categoryId, "sub data");
    
    
  return (
    <div>
      <Link
        href={`/duas/dua's-importance?cat=${category?.id}`}
        className="flex cursor-pointer hover:bg-[#e8f0f5] duration-300 px-3 h-[4.84rem] rounded-xl items-center"
      >
        <div className="w-14 h-14">
          <img alt=""
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
<div className="">
    {/* {
        isLoading && <div className="w-full bg-zinc-300 px-4 py-2 animate-pulse rounded-md">Loading...</div>
    }
       {
        error && <div className="w-full bg-zinc-300 px-4 py-2 animate-pulse rounded-md">Error</div>
       } */}
</div>
    </div>
  );
}

export default CategoryCard;

