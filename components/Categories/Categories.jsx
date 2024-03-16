'use client';
import Link from "next/link";
import CategoryCard from "./CategoryCard";

function Categories({categories}) {
console.log(categories,'categories')
    return (
        <section className="w-[430px] xl:max-w-[430px] min-w-[350px]">
            {/* title */}
            <div className="bg-white rounded-t-xl">
            <div className="bg-primary flex justify-center h-14 rounded-t-xl items-center">
                <h2 className="text-base text-white">Categories</h2>
            </div>
                {/* Search */}
               <div className="pt-4">
                <div className="flex relative mx-4 items-center">
                <button className="absolute inset-y-0 left-0 flex pl-4 items-center">
                    <img className="" src="/icons/search.svg" />
                </button>
                    <input className="px-4 py-2 border-[0.5px] rounded-md border-gray-300 pl-12 w-full" type="text" />
                </div>
                {/* Categories */}
                <div className="categories h-[70vh] px-4 overflow-hidden overflow-y-auto">
                    {
                        categories?.map((category,i)=><CategoryCard key={i} category={category} />)
                    }
                </div>
                </div>
            </div>
        </section>
    );
}

export default Categories;
