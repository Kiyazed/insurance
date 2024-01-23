import { FaCcMastercard } from "react-icons/fa6";
import { SiVisa } from "react-icons/si";
import { BsPaypal } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { Link } from "react-router-dom";


const LifePayment = () => {
    return ( 
        <div className="bg-white m-5 ml-20 flex gap-32">
            <div>
           <h1 className="flex place-content-center font-semibold text-3xl mt-3 mb-5">Payment Details</h1> 
        
        <div>
            <label>
                <h1 className="font-medium p-2">Name</h1>
                <input className="w-96 rounded-md border-gray-300" type="text" />
            </label>
            <label>
                <h1 className="font-medium p-2">Creadit Card Number</h1>
                <input className="w-96 rounded-md border-gray-300" type="text" />
            </label>
            
            <div className="mt-5 flex items-center gap-10 p-2">
            <FaCcMastercard className="h-14 w-16 p-1 shadow-sm text-orange-400 cursor-pointer"/>
            <SiVisa className="h-14 w-14  p-1 shadow-sm text-blue-500 cursor-pointer"/>
            <BsPaypal className="h-14 w-16  p-1 shadow-sm text-blue-800 cursor-pointer"/>
            <MdPayment className="h-14 w-16  p-1 shadow-sm text-green-500 cursor-pointer"/>
            </div>

            <label>
                <h1 className="font-medium p-2">Expiration Date</h1>
                <input className="w-96 rounded-md border-gray-300" type="text" />
            </label>
            <label>
                <h1 className="font-medium p-2">CVC/CVV</h1>
                <input className="w-96 rounded-md border-gray-300" type="password" />
            </label>

         <Link to="/success">  <button className="bg-green-500 block w-96 rounded-md mt-6 p-2">Confirm</button> </Link> 
        </div>
        </div>

        <img className="h-screen " src="https://img.freepik.com/free-vector/credit-card-concept-illustration_114360-98.jpg?2&w=740&t=st=1705872854~exp=1705873454~hmac=c041d36d86c0d71b7b2f0d199e22665def70fce231bee33614a8633a44b56178" alt=""/>
        </div>
     );
}
 
export default LifePayment;