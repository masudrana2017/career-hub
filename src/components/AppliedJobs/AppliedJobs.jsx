import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoreJobApplication } from "../Utility/localstorage";
import { FaLocationDot } from "react-icons/fa6";
import { LuCircleDollarSign } from "react-icons/lu";

const AppliedJobs = () => {
    const jobs = useLoaderData()
    const [appliedJobs, setAppliedJobs] = useState([])
    const [filterJobs, setFilterJobs] = useState([])
    useEffect(() => {
        const storeJobIds = getStoreJobApplication()
        const jobApplied = []
        for (const id of storeJobIds) {
            const job = jobs.find(job => job.id == id);
            if (job) {
                jobApplied.push(job)
            }
        }
        setAppliedJobs(jobApplied)
        setFilterJobs(jobApplied)
    }, [])
    const handleFilter=filter=>{
        if(filter=='all'){
            setFilterJobs(appliedJobs)
        }
        else if(filter=='remote'){
            const remote=appliedJobs.filter(job=>job.remote_or_onsite=='Remote')
            setFilterJobs(remote)
        }
        else if(filter=='onsite'){
            const onsite=appliedJobs.filter(job=>job.remote_or_onsite=='Onsite')
            setFilterJobs(onsite)
        }
    }
    return (
        <div>
            <h2>Applied Jobs{appliedJobs.length}</h2>

            <div className="flex flex-col gap-4 p-16">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">Filter</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={()=>handleFilter('all')}><a>All</a></li>
                        <li onClick={()=>handleFilter('remote')}><a>Remote</a></li>
                        <li onClick={()=>handleFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </div>
                {
                    filterJobs.map(job => <div key={job.id} className="card card-side bg-base-100 shadow-xl">
                        <figure className="p-4 bg-slate-100">
                            <img
                                src={job.logo}
                                alt="Movie" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{job.job_title}</h2>
                            <p>{job.company_name}</p>
                            <div>
                                <button className="border-2 p-2 text-blue-500 font-bold">{job.remote_or_onsite}</button>
                                <button className="border-2 p-2 ml-4 text-blue-500 font-bold">{job.job_type}</button>
                            </div>
                            <div className="flex gap-6 mt-3">
                                <div className="flex gap-2 items-center">
                                    <FaLocationDot></FaLocationDot>
                                    <p>{job.location}</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <LuCircleDollarSign></LuCircleDollarSign>
                                    <p>Salary: {job.salary}</p>
                                </div>
                            </div>
                            <div className="card-actions justify-end">
                                <Link to={`job/${job.id}`}><button className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg text-white font-bold p-3">View Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;