import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";


const AppliedData = ({ job }) => {
    console.log(job)
    const { id, logo, job_title, company_name, job_type, remote_or_onsite, location, salary, } = job;
    return (
        <div>
            <div className="flex justify-between items-center my-5 p-5  border-2">
                <div className="flex justify-between gap-5 items-center">
                    <img className="w-[200px] h-[200px]" src={logo} alt="" />
                    <div className="text-left space-y-2">
                        <h2 className="text-[16px] font-bold">{job_title}</h2>
                        <h4 className="font-bold">{company_name}</h4>
                        <button className="mr-5 btn">{job_type}</button>
                        <button className="mr-5 btn">{remote_or_onsite}</button>
                        <div className="flex justify-between gap-5">
                            <p className="flex items-center"><CiLocationOn /> {location}</p>
                            <p className="flex items-center"><MdOutlineAttachMoney /> Salary {salary}</p>
                        </div>
                    </div>

                </div>
                <div>
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AppliedData;