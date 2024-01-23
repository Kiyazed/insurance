import { Link } from "react-router-dom";

const Registration = () => {
    return ( 
        <div>
            <div className="flex items-center gap-16">
                {/*left */}
                <div className="bg-white mt-5 m-16" >
                    <h1 className="font-semibold text-3xl ml-16">Create New Account</h1>
                    <p className="ml-24 mt-2">Already have an account?<Link to="/start"><span className="text-blue-500 hover:underline cursor-pointer ml-2">Sign in</span> </Link> </p>
                    <input  className="w-96 rounded-md border-gray-300 shadow block mt-5" type="text" placeholder="First Name"/>
                    <input className="w-96 rounded-md border-gray-300 shadow block mt-4" type="text" placeholder="Last Name"/>
                    <input className="w-96 rounded-md border-gray-300 shadow block mt-4" type="email" placeholder="Email"/>
                    <input className="w-96 rounded-md border-gray-300 shadow block mt-4" type="password" placeholder="Password"/>
                    <input className="w-96 rounded-md border-gray-300 shadow block mt-4 mb-3" type="password" placeholder="Confirm password"/>
                    
                    <input type="checkbox" />  I agree to the <span className="text-blue-400 cursor-pointer hover:underline ">Terms of Service</span>  and <span className="text-blue-400 hover:underline cursor-pointer">Privacy Policy</span> 
                    <button className="bg-blue-500 block w-96 p-2 rounded-md mt-3 hover:bg-blue-400 hover:text-white">Sign Up</button>
                </div>


                {/*right */}
                <div>
                    <img className="h-96" src="https://img.freepik.com/free-vector/people-with-icons-related-car-insurance_53876-43023.jpg?w=900&t=st=1705684764~exp=1705685364~hmac=96d1f42974db24e0651b9600073f3c814ed71c45774bb0e96b8dafc61509e642" alt=""/>
                </div>
            </div>
        </div>
     );
}
 
export default Registration;