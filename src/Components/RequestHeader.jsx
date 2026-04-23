import bellIcon from "../assets/Bellicon.svg";

const RequestHeader = ()=>{
    return (
    <div className="ml-20 mr-8">
    <div className="flex justify-between p-4 h-3 mb-5">
        <h1 className="font-bold text-xl">Requests</h1>
        <div>
       <img src={bellIcon} alt="bell icon" />
       </div>
     </div>
     <hr className=""/>
     <div className="flex gap-3 text-sm ml-2">
          <span>Overview</span>
          <span>All Tasks</span>
          <span>Field Tracking</span>  
     </div>
    </div>        
         )
}

export default RequestHeader;