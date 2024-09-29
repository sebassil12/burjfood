import { IMAGE_PATH } from "../../constants/images";
import divider from "./divider.module.css"
function Divider() {
    return ( 
        <div className={divider.container}>
        <img src={IMAGE_PATH.plate} className={divider.plate_img}/>
        </div>
    );
}

export default Divider;