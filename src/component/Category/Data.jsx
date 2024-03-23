const Data = ({ data }) => {
    // console.log(data)
    const { logo, category_name, availability } = data;
    return (
        <div className="w-[200px] h-[100px] my-20">
            <div className="flex justify-center"><img className="w-[50px] h-[50px] rounded-3xl" src={logo} alt="" /></div>
            <div className="text-center">
                <h5 className="text-base font-semibold">{category_name}</h5>
                <p>{availability}</p>
            </div>
        </div>
    );
};

export default Data;