import dasboard from "../assets/Dashboard.svg"
import site from "../assets/Site.svg"
import landlord from "../assets/landlord.svg"
import request from "../assets/Request.svg"
import configuration from "../assets/Configuration.svg"
import setting from "../assets/Setting.svg"
import logout from "../assets/Logout.svg"

const menuitems = [
    {
        name: "Dashboard",
        icon: dasboard
    },
      {
        name: "Sites",
        icon: site
    },
      {
        name: "LlMgmt",
        icon: landlord
    },
      {
        name: "Request",
        icon: request
    },
      {
        name: "Config",
        icon: configuration
    },
      {
        name: "Setting",
        icon: setting
    },
    {
        name: "Logout",
        icon: logout
    },
]




const SideBar = ()=>{
    return (
        <div className="flex flex-col items-center shadow-xl w-20 h-lvh">
            { menuitems.map((res)=>{
                return (
             < div onClick={()=>{}} className="cursor-pointer mb-5 ">
                <img className = "h-5" src = {res.icon} /> 
                 <span className="text-[10px]">{res.name}</span>    
            </div>
        
                )
            })}
        </div>
    )
}

export default SideBar;