import { FaLocationDot } from "react-icons/fa6";
import { LuCircleDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";
const Job = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,job_type,location,salary}=job
    return (
        <div className="border-2 p-6">
            <img src={logo} alt="" />
            <h2 className="mt-4 text-2xl font-bold">{job_title}</h2>
            <p className="mt-3 mb-3">{company_name}</p>
            <button className="border-2 p-2 text-blue-500 font-bold">{remote_or_onsite}</button>
            <button className="border-2 p-2 ml-4 text-blue-500 font-bold">{job_type}</button>
            <div className="flex gap-6 mt-3">
                <div className="flex gap-2 items-center">
                <FaLocationDot></FaLocationDot>
                <p>{location}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <LuCircleDollarSign></LuCircleDollarSign>
                    <p>Salary: {salary}</p>
                </div>
            </div>
            
            <Link to={`job/${id}`}>
            <button className="mt-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg text-white font-bold p-3">View Details</button>
            </Link>
        </div>
    );
};

export default Job;