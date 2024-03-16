
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/layout/Layout";
import Categories from "@/components/Categories/Categories";

const inter = Inter({ subsets: ["latin"] });

export default function Home({categories}) {
  console.log(categories,'data')
  return (
   <Layout>
    <div className="flex gap-8 mt-8">
    <Categories categories={categories} />
    </div>
   </Layout>
  );
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(process.env.CATEGORY_API)
  const categories = await res.json()
 
  return {
    props: {
      categories,
    },
  }
}