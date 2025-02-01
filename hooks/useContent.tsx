import { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';



export const useContent = () => {
    const [contents, setContents] = useState([]);


    useEffect(() => {
        async function fetchContents() {
            console.log("Fetching contents...");

            const token = localStorage.getItem('jwt');
            console.log("Token from localStorage:", token); 

            if (!token) {
                console.log("No token found, cannot make request.");
                return;
            }

            try {
                console.log("Making axios request with token...");

                const response = await axios.get(BACKEND_URL + 'api/v1/content', {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });

                console.log("Axios request successful!");
                console.log("Response received: ", response);
                console.log("Response Data: ", response.data);

                setContents(response.data.data);

            } catch (err) {
                console.log("Error during fetching:", err); 
            }
        }

        fetchContents();

        return () => {
            console.log("Cleaning up fetchContents effect...");
        };
    }, []); 



    return contents
};
