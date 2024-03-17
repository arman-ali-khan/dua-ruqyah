import Link from "next/link";

function SubCategories({sub}) {
    return (
        <li className=""> <span className="absolute w-1.5 h-1.5 -translate-x-5 mt-2 rounded-full bg-primary"></span>
        {
            sub?.id? <Link href={`/duas/dua's-importance?cat=${sub?.cat_id}&subcat=${sub?.subcat_id}`}>{sub?.subcat_name}</Link>:''
        }
        
        </li>
    );
}

export default SubCategories;