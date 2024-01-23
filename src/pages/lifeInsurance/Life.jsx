import { useState } from "react";
import { Link } from "react-router-dom";

const Life = () => {

 const [submit,setSubmit] = useState("")

 const handleClick = () => {
  setSubmit(
   alert("Submit successfully") );
 }

    return ( 
        <div className="bg-white">
            <img className="w-full h-96" src="https://img.freepik.com/free-photo/life-insurance-protection-beneficiary-safeguard-concept_53876-125584.jpg?w=900&t=st=1705785288~exp=1705785888~hmac=ad149ce3c68c0747d22bfd71b58cb95f9d1451655590a3c979e41c1022f434b2" alt=""/>
            <div className="mt-16 m-7">
                <h1 className="font-semibold text-3xl flex place-content-center">Life-Insurance Quote Form</h1>
               <h2 className="font-semibold flex place-content-center mt-2">Tell Us About You</h2>
               <p className="font-mono flex place-content-center">All informations are kept in strict considence.</p>
               <form>
                <div className="flex gap-6">
                 <label>
                   <h1 className="mt-5 font-medium">First Name </h1> 
                     <input className="border-gray-300 rounded-md w-96 mt-3" type="text" />
                 </label>
                 <label>
                   <h1 className="mt-5 font-medium">Middle Name </h1> 
                     <input className="border-gray-300 rounded-md w-96 mt-3" type="text" />
                 </label>
                 <label>
                   <h1 className="mt-5 font-medium">Last Name </h1> 
                     <input className="border-gray-300 rounded-md w-96 mt-3" type="text" />
                 </label>
                 </div>
                 <label>
                   <h1 className="mt-5 font-medium">Address </h1> 
                     <input className="border-gray-300 rounded-md w-96 mt-3 mr-5" type="text" placeholder="Street Address" />
                     <input className="border-gray-300 rounded-md w-96 mt-3 mr-5 " type="text" placeholder="City" />
                     <input className="border-gray-300 rounded-md w-96 mt-3" type="text" placeholder="State" />
                     <input className="border-gray-300 rounded-md w-96 mt-5 mr-5" type="text" placeholder="Region" />
                     <input className="border-gray-300 rounded-md w-96 mt-3" type="text" placeholder="Zone / Subcity" />
                 </label>
             <div className="flex gap-6 mt-5">
                 <label>
                   <h1 className="mt-5 font-medium">Phone Number </h1> 
                     <input className="border-gray-300 rounded-md w-96 mt-3" type="number" placeholder="+251-999-999-9999" />
                 </label>

                 <label>
                   <h1 className="mt-5 font-medium">E-mail </h1> 
                     <input className="border-gray-300 rounded-md w-96 mt-3" type="email" placeholder="example@example.com" />
                 </label>
                 </div>
                 <label>
                   <h1 className="mt-5 font-medium">Birth Date </h1> 
                     <input className="border-gray-300 rounded-md w-96 mt-3" type="date"  />
                 </label>
                
                <h1 className="mt-5 font-medium pb-2">Which Life Plan?</h1>
                <select className="block  w-96 rounded-md border-gray-300">
                  
                  <option>please select</option>
                  <option>5 year terms</option>
                  <option>10 year terms</option>
                  <option>Universal Life</option>
                </select>
              
              <div className="flex gap-6">
                <label>
                   <h1 className="mt-5 font-medium">Height </h1> 
                     <input className="border-gray-300 rounded-md w-96 mt-3" type="text"  />
                 </label>

                 <label>
                   <h1 className="mt-5 font-medium">Weight </h1> 
                     <input className="border-gray-300 rounded-md w-96 mt-3" type="text"  />
                 </label>
                 </div>
                 <label>
                   <h1 className="mt-5 font-medium">Describe any health issues? </h1> 
                     <textarea className="border-gray-300 rounded-md w-96 mt-3 h-32"  />
                 </label>
 
                 <Link to="/policy"> <input onClick={handleClick} type="submit" className="block mt-5 border w-80 p-2 bg-green-400 rounded-md hover:border-green-300 hover:bg-white cursor-pointer "/>
                 </Link> 
               </form>
            </div>
        </div>
     );
}
 
export default Life;