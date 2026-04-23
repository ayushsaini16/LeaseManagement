import { data } from "../utils/mockdata";
import { useState } from "react";
import DataGrid from "./Datagrid";

const SearchFilter = () => {

  const [currentValue , setcurrentValue] = useState("");

  const [filteredRequests, setfilteredRequests] = useState(data);

  const ApplyFilter = ()=>{
    setfilteredRequests(filteredRequests.filter((res)=> res.siteId.toLowerCase().includes(currentValue.toLowerCase()))
    )
  
  }

  const ClearFilter = ()=>{
    setfilteredRequests(data)
    setcurrentValue("");
  }

  return (
    <div className="ml-5">
      <input
        type="text" value={currentValue}
        className="border-gray-300 border rounded-xs w-24 p-1 text-sm"
        placeholder="Site Id"
        onChange={(e)=>{
             setcurrentValue(e.target.value);
        }}
      ></input>
      <button onClick={ApplyFilter}

      className="bg-gray-600 ml-10 border rounded-xs w-24 p-1 text-white text-sm cursor-pointer">
       
       Apply Filter
      </button>
      <button onClick={ClearFilter}

      className="bg-gray-600 ml-10 border rounded-xs w-24 p-1 text-white text-sm cursor-pointer">
       
       Clear Filter
      </button>

      <DataGrid filterData = {filteredRequests}/>
    </div>
  );
};

export default SearchFilter;
