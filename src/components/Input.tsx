import { Ref } from "react"

interface InputInterface {
    placeholder: string,
    type: string,
    ref: Ref<HTMLInputElement>
}

const Input: React.FC<InputInterface> = ({type, placeholder, ref}) => {
  return (
    <div>
        <input ref={ref} type={type} placeholder={placeholder} className='px-6 py-3 border border-gray-500 my-3 rounded-md' />
    </div>
  )
}

export default Input


// import  { forwardRef } from 'react';

// interface InputInterface {
//   placeholder: string;
//   type: string;
// }

// const Input = forwardRef<HTMLInputElement, InputInterface>(({ type, placeholder }, ref) => {
//   return (
//     <div>
//       <input ref={ref} type={type} placeholder={placeholder} className="px-6 py-3 border border-gray-500 my-3 rounded-md" />
//     </div>
//   );
// });

// export default Input;
