import { useEffect, useState } from "react";
import Job from "../Job/Job";

const Featured = () => {
    const [jobs, setJobs] = useState([]);

    //data load see all btn state 
    const [dataLength, setDataLength] = useState(4)

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <div className="text-center">
                <h1 className="text-[30px] font-bold">Featured Jobs</h1>
                <p className="text-[15px] font-semibold">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-2 gap-6 my-10">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>

            <div className={dataLength === jobs.length ? 'hidden' : ''}>
                <button onClick={ ()=> setDataLength(jobs.length)} className="btn btn-primary">See All Jobs</button>
            </div>
        </div>
    );
};

export default Featured;