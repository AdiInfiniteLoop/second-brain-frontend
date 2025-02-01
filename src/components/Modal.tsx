import { BACKEND_URL } from "../../config";
import { CrossIcon } from "../assets/icons/CrossIcon";
import { Button } from "./Button";
import Input from "./Input";
import { useRef } from 'react';
import axios from 'axios';

interface ModelInterface {
    open: boolean;
    onClose?: () => void;
}

const Modal = (props: ModelInterface) => {
    // Use refs to get the input values
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const typeRef = useRef<HTMLSelectElement>(null); // Ref for dropdown (type)
    const tagsRef = useRef<HTMLInputElement>(null); // Ref for tags

    // Handle form submission
    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        const type = typeRef.current?.value; // Get the selected type
        const tags = tagsRef.current?.value; // Get tags value

        // Check if all fields are filled out
        if (title && link && type && tags) {
            const newContent = {
                title,
                link,
                type: [type], 
                tags: tags.split(',').map(item => item.trim()), // Split tags by commas into an array
            };

            console.log("Content added:", newContent);

            const tokenStr = localStorage.getItem('jwt'); // Retrieve JWT token from localStorage

            // Send POST request with the correct structure
            try {
                await axios.post(
                    BACKEND_URL + 'api/v1/content',
                    newContent, // Send the content as the request body
                    {
                        headers: {
                            Authorization: `Bearer ${tokenStr}`, // Authorization header
                        },
                    }
                );
                console.log('Content successfully added!');
            } catch (error) {
                console.error('Error adding content:', error);
            }
        }
    }

    return (
        <div>
            {props.open && (
                <div className="w-screen h-screen bg-gray-600 fixed top-0 left-0 opacity-60 backdrop-blur-2xl flex justify-center items-center">
                    <div className="flex flex-col justify-center">
                        <div className="bg-white p-4 rounded-md">
                            <div className="flex justify-end mb-4 cursor-pointer" onClick={props.onClose}>
                                <CrossIcon />
                            </div>
                            <div>
                                <Input ref={titleRef} type="text" placeholder="Title" />
                                <Input ref={linkRef} type="text" placeholder="Link" />
                                
                                {/* Dropdown for Type */}
                                <select ref={typeRef} className="w-full p-2 border rounded-md">
                                    <option value="">Select Type</option>
                                    <option value="Twitter">Twitter</option>
                                    <option value="Youtube">Youtube</option>
                                </select>
                                
                                <Input ref={tagsRef} type="text" placeholder="Tags (comma separated)" />
                            </div>
                            <div className="flex justify-end">
                                <Button
                                    variant="primary"
                                    text={'Submit'}
                                    size="lg"
                                    onClick={addContent} // Trigger the addContent function on submit
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
