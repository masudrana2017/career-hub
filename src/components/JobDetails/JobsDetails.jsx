import { useLoaderData, useParams } from "react-router-dom";
import { LuCircleDollarSign } from "react-icons/lu";
import { MdOutlineSubtitlesOff } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { saveJobApplication } from "../Utility/localstorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const JobsDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const job = jobs.find(job => job.id == id)
    console.log(job)
    const handleJobApplied=()=>{
        saveJobApplication(id)
        toast('Job Added Successfully')
    }
    return (
        <div>
            <h2 className="text-2xl font-bold text-center mt-6">Job Details</h2>
            <div className="flex gap-4 mt-6">
                <div className="w-2/3 flex flex-col gap-8">
                    <p><span className="font-bold">Job Description: </span>{job.job_description}</p>
                    <p><span className="font-bold">Job Responsibility: </span>{job.job_responsibility}</p>
                    <h2 className="font-bold">Education Requirement:</h2>
                    <p>{job.educational_requirements}</p>
                    <h2 className="font-bold">Experience:</h2>
                    <p>{job.experiences}</p>
                </div>
                <div className="w-1/3 bg-slate-300 p-8">
                    <h2 className="mb-2">Job Details</h2>
                    <hr />
                    <div className="flex gap-3 mt-4 items-center">
                        <LuCircleDollarSign></LuCircleDollarSign>
                        <p>Salary: {job.salary} Per Month</p>
                    </div>
                    <div className="flex gap-3 mt-4 items-center">
                        <MdOutlineSubtitlesOff></MdOutlineSubtitlesOff>
                        <p>Job Title: {job.job_title} Per Month</p>
                    </div>
                    <h2 className="mt-6 mb-2">Contact Information</h2>
                    <hr />
                    <div className="flex gap-3 mt-4 items-center">
                        <FaPhone></FaPhone>
                        <p>Phone: {job.contact_information.phone}</p>
                    </div>
                    <div className="flex gap-3 mt-4 items-center">
                        <MdOutlineEmail></MdOutlineEmail>
                        <p>Email: {job.contact_information.email}</p>
                    </div>
                    <div className="flex gap-3 mt-4 items-center">
                        <IoLocationOutline className="text-xl"></IoLocationOutline>
                        <p>Address: {job.contact_information.address}</p>
                    </div>
                    <button onClick={handleJobApplied} className="mt-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg text-white font-bold p-3">Apply Now</button>
                </div>
                <ToastContainer />
            </div>
            
        </div>
    );
};

export default JobsDetails;