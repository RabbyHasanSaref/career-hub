import { MdOutlineAttachMoney } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    // console.log(job)
    const { id, logo, job_title, company_name, job_type, remote_or_onsite, location, salary } = job;
    return (
        <div>
            <div className="w-full p-5 rounded bg-base-100 shadow-xl">
                <div>
                    <img className="w-[200px] h-[100px]" src={logo} alt="" />
                </div>

                <div className="mt-2">
                    <h3 className="flex text-[25px] font-bold">{job_title}</h3>
                    <p className="flex text-[20px] font-semibold text-gray-500">{company_name}</p>
                </div>

                <div className="flex gap-5 mt-2">
                    <button className="btn text-gray-500">{job_type}</button>
                    <button className="btn text-gray-500">{remote_or_onsite}</button>
                </div>

                <div className="flex justify-between gap-2 items-center w-[300px] mt-2 text-[15px] font-bold text-gray-500">
                    <p className="flex items-center gap-2"><CiLocationOn className="text-[20px]" /> {location}</p>
                    <p className="flex items-center gap-2"><MdOutlineAttachMoney className="text-[20px]" /> {salary}</p>
                </div>

                <div className="flex mt-2">
                    <Link to = {`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Job;