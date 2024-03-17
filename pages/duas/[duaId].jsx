import Categories from "@/components/Categories/Categories";
import Duas from "@/components/dua's/Dua's";
import Layout from "@/layout/Layout";

function page({categories}) {

  return (
    <Layout>
    <div className="flex gap-8 mt-8">
    <Categories categories={categories} />
    <Duas />
    </div>
   </Layout>
  );
}

export default page;
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(process.env.CATEGORY_API)
    const categories = await res.json()
   
    // Pass categories to the page via props
    return { props: { categories } }
  }

