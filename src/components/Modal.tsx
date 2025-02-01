import { CrossIcon } from "../assets/icons/CrossIcon";
import { Button } from "./Button";
// import Input from "./Input";

interface ModelInterface {
    open: boolean
    onClose?: () => void;
}

//controlled component
const Modal = (props:ModelInterface) => {
    return <div>
        {props.open && <div className="w-screen h-screen bg-gray-600 fixed top-0 left-0 opacity-60 backdrop-blur-2xl flex justify-center items-center"> 
        <div className="flex flex-col justify-center">
            <div className="bg-white p-4 rounded-md">
                <div className="flex justify-end mb-4 cursor-pointer" onClick={props.onClose}>
                    <CrossIcon/>
                </div>
                <div>
                    {/* <Input type="text" placeholder="Title" />
                    <Input type="text" placeholder="Link" /> */}
                </div>
                <div className="flex justify-end">
                    <Button variant="primary" text={'Submit'} size="lg"/>
                </div>
            </div>
        </div>
        </div>}
    </div>
}
export default Modal;