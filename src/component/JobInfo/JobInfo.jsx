import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobapplication } from "../../utiliti/localdatabase";

const JobInfo = () => {
    const jobsInfo = useLoaderData()
    const { id } = useParams()
    const intId = parseInt(id)
    const job = jobsInfo.find(job => job.id === intId)
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = job;
    // console.log(job)

    const handleJobs = () => {
        saveJobapplication(id);
        toast("You Have Apply Success !");
    }

    return (
        <div>
            <div className="my-10 bg-[#f9f9ff] h-[200px] flex items-center justify-center">
                <h1 className="text-[30px] font-bold">Job Details</h1>
            </div>
            <div className="md:grid grid-cols-4 gap-5 my-10">
                <div className="grid col-span-3 gap-5 shadow-xl p-5 text-left rounded">
                    <h2 className=" "><span className="text-base font-bold">Job Description:</span> {job_description}</h2>
                    <h2 className=" "><span className="text-base font-bold">Job Responsibility:</span> {job_responsibility}</h2>
                    <h2 className=" "><span className="text-base font-bold">Educational Requirements:</span> {educational_requirements}</h2>
                    <h2 className=" "><span className="text-base font-bold">Experiences:</span> {experiences}</h2>
                </div>
                <div className="shadow-xl p-5 rounded">
                    <div className="my-5 space-y-2 text-left">
                        <h2 className="text-base font-bold">Job Details</h2>
                        <hr />
                        <p className="flex items-center gap-2"><MdOutlineAttachMoney className="flex" /> <span className="text-base font-bold">Salary:</span> {salary}</p>
                        <p className="flex items-center gap-2"><MdWork className="flex" /> <span className="text-base font-bold">Job Title:</span> {job_title.slice(0, 15)}</p>
                    </div>

                    <div className="my-5 space-y-2 text-left">
                        <h2 className="text-base font-bold">Contact Information</h2>
                        <hr />
                        <p className="flex items-center gap-2"><FaPhoneAlt /> <span className="text-base font-bold">Phone:</span> {contact_information.phone}</p>
                        <p className="flex items-center gap-2"><MdOutlineMail /> <span className="text-base font-bold">Email:</span> {contact_information.email}</p>
                        <p className="flex items-center gap-2"><CiLocationOn /> <span className="text-base font-bold">Address:</span> {contact_information.phone}</p>
                    </div>
                    <div>
                        <button onClick={handleJobs} className="btn btn-primary w-full">Apply Now</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobInfo;