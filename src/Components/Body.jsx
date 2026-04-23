import Chart from "./Chart";
import Table from "./Table";
const Body = ()=>{
    return (
        <div className=" bg-gray-50 w-full">
         <div className="mt-20 grid grid-cols-3 gap-5 h-96">
         <Chart />
         <Table />
        </div>
        </div>
    )
}

export default Body;