import { useState } from "react";
import Pagination from "./Pagination";

const DataGrid = (props) => {
  const { filterData } = props;

  const [currentPage, setcurrentPage] = useState(1);
  const amount = 4;
   
  const startIndex = (currentPage - 1) * amount;
  const endIndex = startIndex + amount;
  const currentItems = filterData.slice(startIndex, endIndex);

  const setNextPage = () => {
    setcurrentPage(currentPage + 1);
  };

  const setPreviousPage = () => {
    setcurrentPage(currentPage - 1);
  };

  return (
    <div>
      <table className="mt-5 w-full">
        <thead className="text-sm border-b border-gray-400  ">
          <tr>
            <th className="p-2">Request ID</th>
            <th className="p-2">Site ID</th>
            <th className="p-2">Process Name</th>
            <th className="p-2">Task Name</th>
            <th className="p-2">Task Status</th>
            <th className="p-2">SLA Status</th>
            <th className="p-2">SLA</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((res) => {
            return (
              <tr
                key={res.requestId}
                className="text-xs border-b border-gray-400"
              >
                <td className="p-2">{res.requestId}</td>
                <td className="p-2">{res.siteId}</td>
                <td className="p-2">{res.processName}</td>
                <td className="p-2">{res.taskName}</td>
                <td className="p-2">{res.taskStatus}</td>
                <td className="p-2">{res.slaStatus}</td>
                <td className="p-2">{res.sla}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        setNext={setNextPage}
        setPrevious={setPreviousPage}
      />
    </div>
  );
};

export default DataGrid;
