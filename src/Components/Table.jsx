import DataGrid from "./Datagrid";
import Pagination from "./Pagination";
import SearchFilter from "./SearchFilter";

const Table = ()=>{
    return ( 
    <div className="col-span-2 rounded-lg bg-white shadow-xs">
      <div className="mt-10">  
     <SearchFilter />  
    </div>
    </div>
    )
}

export default Table;