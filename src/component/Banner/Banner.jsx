
const Banner = () => {
    return (
        <div>
            <div className="flex justify-between items-center gap-10 bg-[#f9f9ff] my-10 p-2">
                <div className="space-y-3">
                    <h2 className="text-[30px] font-bold">One Step Closer To Your <br /> <span className="text-blue-500">Dream Job</span></h2>
                    <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <div className="">
                    <img src="../user.png" alt="user" />
                </div>
            </div>
        </div>
    );
};

export default Banner;