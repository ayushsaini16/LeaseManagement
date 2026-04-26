import RequestHeader from "./Components/RequestHeader";
import SideBar from "./Components/SideBar";
import Body from "./Components/Body";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <RequestHeader />
      <div className="flex">
        <SideBar />
        <Outlet/>
      </div>
    </div>
  );
};

export default App;
