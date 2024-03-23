import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utiliti/localdatabase";
import AppliedData from "../AppliedData/AppliedData";
import { IoIosArrowDown } from "react-icons/io";


const AppliedJob = () => {

    const jobs = useLoaderData();
    const [addJobs, setAddJobs] = useState([]);

    //filte btn state
    const [displayFilter, setDisplayFilter] = useState([])

    const handleFilter = (Filter) => {
        if(Filter === 'all'){
            setDisplayFilter(addJobs);
        }
        else if(Filter === 'remote'){
            const remotJobs = addJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayFilter(remotJobs);
        }
        else if(Filter === 'onsite'){
            const onsiteJobs = addJobs.filter(job => job.remote_or_onsite === 'onsite');
            setDisplayFilter(onsiteJobs);
        }


    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {

            const jobApply = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id == id);

                if (job) {
                    jobApply.push(job)
                }
            }
            // console.log(jobs, storedJobIds, jobApply);
            setAddJobs(jobApply);
        }
    }, [])
    return (
        <div>
            <div className="my-10 bg-[#f9f9ff] h-[200px] flex items-center justify-center">
                <h1 className="text-[30px] font-bold">Applied Jobs</h1>
            </div>
            <div className="flex justify-end">
                <details className="dropdown">
                    <summary className="m-1 btn">Filter By <IoIosArrowDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=> handleFilter('all')}><a>All</a></li>
                        <li onClick={()=> handleFilter('remote')}><a>Remote</a></li>
                        <li onClick={()=> handleFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>


            <div>
                {
                    displayFilter.map(job => <AppliedData key={job.id} job={job}></AppliedData>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;