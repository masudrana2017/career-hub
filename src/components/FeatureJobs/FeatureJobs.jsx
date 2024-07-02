import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJobs = () => {
    const [jobs,setJobs]=useState([])
    const [allJobs,setAllJobs]=useState(4)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <div className="mt-6 mb-6">
            <h2 className="text-3xl font-semibold text-center">Featured Jobs</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    jobs.slice(0,allJobs).map(job=><Job key={job.id} job={job}></Job>)
                }
            </div>
           <div className={`flex justify-center items-center mt-6 mb-6 ${allJobs===jobs.length && 'hidden'}`}>
           <button onClick={()=>setAllJobs(jobs.length)} className="btn btn-primary">See All</button>
           </div>
        </div>
    );
};

export default FeatureJobs;