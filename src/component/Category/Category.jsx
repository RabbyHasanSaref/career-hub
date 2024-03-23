import { useEffect, useState } from "react";
import Data from "./Data";

const Category = () => {
    const [datas, setData] = useState([])
    useEffect(() => {
        fetch('../categories.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                <h1 className="text-[30px] font-bold">Job Category List</h1>
                <p className="text-[15px] font-semibold">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="flex items-center justify-center gap-5 ">
                {
                    datas.map(data => <Data key={data.id} data={data}></Data>)
                }
            </div>
        </div>
    );
};

export default Category;