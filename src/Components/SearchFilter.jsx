import { data } from "../utils/mockdata";
import { useState } from "react";

const SearchFilter = () => {

  const [currentValue , setcurrentValue] = useState(null);


  const ApplyFilter = ()=>{
    return (data.filter((res)=> res.siteId.includes(currentValue)
    )
  )
  }

  return (
    <div className="ml-5">
      <input
        type="text"
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
    </div>
  );
};

export default SearchFilter;
