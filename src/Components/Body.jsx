import { Link } from "react-router-dom";
import Chart from "./Chart";
import Table from "./Table";
import CreateRequest from "./CreateRequest";
import { useState } from "react";
const Body = ()=>{

    const [show , setshow] = useState(false);

   const toggleDrawer =()=>{
    setshow(!show);
   }

    return (
        <div className=" bg-gray-50 w-full">
          <div className="ml-[90%] mt-5">
             <button onClick={toggleDrawer}
             className="bg-green-400 rounded-lg border cursor-pointer">Create Request</button>       
            </div>  
         <div className="mt-15 grid grid-cols-3 gap-5 h-96">
         <Chart />
         <Table />
        </div>

        {show && <CreateRequest show = {show} toggleDrawer = {toggleDrawer}/>}

        </div>
    )
}

export default Body;