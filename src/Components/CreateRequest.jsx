
import Drawer from "./Drawer";


const CreateRequest = (props)=>{
const {show , toggleDrawer} = props;

    return (
        <div>
            <Drawer show= {show} toggleDrawer = {toggleDrawer}/>
        </div>
    )
}

export default CreateRequest;