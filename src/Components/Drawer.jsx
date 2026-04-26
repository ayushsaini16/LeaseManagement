import { useState } from "react";
import SiteAcquired from "./SiteAcquired";

const Drawer = (props) => {
  const { show, toggleDrawer } = props;
 
  const [isOpen , setisOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 right-0 min-w-4/12 h-full bg-white shadow-lg
                transition-transform transform ${
                  show ? "translate-x-0" : "translate-x-full"
                }`}
    >
      <div className="flex justify-between mt-5">
        <span className="text-xl ml-2 font-bold">Inititate Process</span>
        <button className="cursor-pointer" onClick={toggleDrawer}>
          ❎
        </button>
      </div>

      <div className="mt-5 text-sm ml-2">
        <h2 className="font-bold">Site Acquisition</h2>
        <p className="text-xs">
          Site Acquisition process enable user to find and acquire suitable
          candidate for BTS site.
        </p>
        <button className="bg-blue-800 text-amber-50 text-s w-28 h-7 mt-1 cursor-pointer shadow-lg rounded-xl"
           onClick={()=>{
            setisOpen(true)
           }}>
          Initiate Request
        </button>
      </div>
      {isOpen && <SiteAcquired isOpen = {isOpen} setisOpen = {setisOpen}/>}
    </div>
  );
};

export default Drawer;
