

import { useRef, useState } from 'react';
import Input from '../src/components/Input';
import { Button } from '../src/components/Button';
import { BACKEND_URL } from '../config';
import axios from 'axios';

const Signup = () => {
  const [log, setLog] = useState<boolean>(false);

  // Separate refs for login and signup
  const usernameRefSignup = useRef<HTMLInputElement>(null);
  const passwordRefSignup = useRef<HTMLInputElement>(null);
  const usernameRefLogin = useRef<HTMLInputElement>(null);
  const passwordRefLogin = useRef<HTMLInputElement>(null);

  async function signup() {
    const username = usernameRefSignup.current?.value;
    const password = passwordRefSignup.current?.value;
    const passwordConfirm = passwordRefSignup.current?.value;

    try {
      const response = await axios.post(BACKEND_URL + 'api/v1/signup', {
        username, 
        password, 
        passwordConfirm
      });
      console.log(response);
      alert('Signup successful!');
    } catch (error) {
      console.error(error);
      alert('Signup failed.');
    }
  }

  async function login() {
    const username = usernameRefLogin.current?.value;
    const password = passwordRefLogin.current?.value;

    try {
      const response = await axios.post(BACKEND_URL + 'api/v1/login', {
        username, 
        password
      });
      console.log(response);
      alert('Login successful!');
    } catch (error) {
      console.error(error);
      alert('Login failed.');
    }
  }

  return (
    <div className='h-screen w-screen bg-gray-100 flex justify-center items-center'>
      <div className='flex flex-col justify-end gap-2'>
        <Button variant='secondary' size='md' onClick={() => setLog((prev) => !prev)} text={log ? 'Switch to Signup >' : "Switch to Login >"} /> 
        {log ? 
          <div className="bg-white rounded-md border min-w-48 p-8">
            <h1 className='text-lg'>Login</h1>
            <Input ref={usernameRefLogin} type="text" placeholder="Enter your username" />  
            <Input ref={passwordRefLogin} type="password" placeholder="Enter your password" />  
          </div>  
          :
          <div className="bg-white rounded-md border min-w-48 p-8">
            <h1 className='text-lg'>Signup</h1>
            <Input ref={usernameRefSignup} type="text" placeholder="Enter your username" />  
            <Input ref={passwordRefSignup} type="password" placeholder="Enter your password" />  
            <Input ref={passwordRefSignup} type="password" placeholder="Confirm your password" />
          </div>
        }
        <Button variant='primary' size='md' text='Submit' onClick={log ? login : signup} />
      </div>
    </div>
  );
};

export default Signup;
