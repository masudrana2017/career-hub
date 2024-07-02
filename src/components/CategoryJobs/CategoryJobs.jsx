import { useEffect, useState } from "react";
import JobCategory from "../../JobCategory/JobCategory";

const CategoryJobs = () => {
    const [categoryJobs,setCategoryJobs]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategoryJobs(data))
    },[])
    return (
        <div className="mt-6">
            <h2 className="text-3xl font-semibold text-center">Job Category List</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                {
                    categoryJobs.map(category=><JobCategory key={category.id} category={category}></JobCategory>)
                }
            </div>
        </div>
    );
};

export default CategoryJobs;