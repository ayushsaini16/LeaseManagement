import { useState} from "react";
import arrow from "../assets/leftarrow.png";

const SiteAcquired = (props) => {
  const { isOpen, setisOpen } = props;
   
  const initialValues = {region: "" , district: "" , city: ""};
  const [formValues, setformValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});

  const handleChange = (e)=>{
    console.log(e);
    const {name , value} = e.target;
    setformValues((prev)=>({...prev, [name]: value}))
    console.log(formValues);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setformErrors(validate(formValues));
  }
  



  const validate = (values)=>{
    const errors = {};

    if(!values.region)
    {
      errors.region = "Region is required."
    }
    if(!values.district)
    {
      errors.district = "District is required."
    }
    if(!values.city)
    {
      errors.city = "City is required."
    }
    return errors;
  }

  return (

    <form method = "post" onSubmit={handleSubmit}>

    <div
      className={`fixed top-0 right-0 w-full p-5 h-full duration-1000 ease-in-out bg-white shadow-lg
                transition-transform transform ${
                  isOpen ? "translate-x-0" : "translate-x-full"
                }`}
    >
      <div className="flex gap-3">
        <button
          className="w-5 cursor-pointer "
          onClick={() => {
            setisOpen(false);
          }}
        >
          <img src={arrow} />
        </button>
        <span className="text-xl">Site Acquisition Process</span>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col">
            <label className="text-xs mb-1"> Region</label>
            <input name="region" type="text" className="border  p-1 rounded" value={formValues.region}
            onChange= {handleChange}
            ></input>
            <p className="text-red-600 text-xs">{formErrors.region}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-xs mb-1"> District</label>
            <input name="district" type="text" className="border  p-1 rounded" value={formValues.district}
            onChange= {handleChange}></input>
            <p className="text-red-600 text-xs">{formErrors.district}</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col">
            <label className="text-xs mb-1">Site City</label>
            <input name="city" type="text" className="border  p-1 rounded" value={formValues.city}
            onChange= {handleChange}></input>
            <p className="text-red-600 text-xs">{formErrors.city}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-xs mb-1">
              Geo Type/Location Type/Cluster
            </label>
            <input name="Location" type="text" className="border  p-1 rounded"></input>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col">
            <label className="text-xs mb-1">Latitude of Nominal Point</label>
            <input name="Latitude" type="text" className="border  p-1 rounded"></input>
          </div>
          <div className="flex flex-col">
            <label className="text-xs mb-1">Longitude of Nominal Point</label>
            <input name="Longitude" type="text" className="border  p-1 rounded"></input>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col">
            <label className="text-xs mb-1">Search Ring Radius (Meters)</label>
            <input name="SearchRadius" type="text" className="border  p-1 rounded"></input>
          </div>
          <div className="flex flex-col">
            <label className="text-xs mb-1">Project Name</label>
            <input name="ProjectName" type="text" className="border  p-1 rounded" ></input>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col">
            <label className="text-xs mb-1">Requesting Customer</label>
             <select name= "Customer" className="border p-1 rounded text-s" >
              <option value="" disabled selected hidden>Select an option</option>
              <option value= "towerA"> Tower A</option>
              <option value= "towerB"> Tower B</option>
              <option value= "towerC"> Tower C</option>
             </select>
        </div>
      </div>

      <input className="bg-blue-800 border shadow-lg w-6/12 p-2 cursor-pointer rounded text-white mt-10"
       type = "submit" value="Initiate Site Acquisition"
      />
        
      </div>      
    </div>
    </form>
  );
};

export default SiteAcquired;
