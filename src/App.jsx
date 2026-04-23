import RequestHeader from "./Components/RequestHeader";
import SideBar from "./Components/SideBar";
import Body from "./Components/Body";

const App = () => {
  return (
    <div>
      <RequestHeader />
      <div className="flex">
        <SideBar />
        <Body />
      </div>
    </div>
  );
};

export default App;
