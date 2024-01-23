import { Link } from "react-router-dom";


const Login = () => {
    return ( 
        <div className="bg-white">

          <div className="flex justify-between">
            {/* left */}
            <div className="mt-10 m-16">
              <h1 className="font-semibold text-3xl pb-10 ml-32" >Welcome Back</h1>
              <input className="w-96 rounded-md" type="email" placeholder="Email"/>
              <input className="block mt-5 w-96 rounded-md" type="password" placeholder="Password"/>
              <label className="flex items-center mt-5">
              <input className="mr-3" type="checkbox" /> Keep me logged in 
              <p className="ml-20 text-blue-500 cursor-pointer">Forgot password</p>
              </label>
             <Link to='/form'> <button className="bg-blue-500 mt-10 w-96 p-2 rounded-md hover:bg-blue-400 hover:text-white">Log In</button></Link>

              <p className="mt-5">Don't have an account?
                <Link to="/register"><span className="text-blue-600 ml-2 hover:underline cursor-pointer">Sign up</span></Link></p>
            </div>

            {/* right */}

            <div>
                <img src="https://img.freepik.com/free-vector/colleagues-working-together-project_74855-6308.jpg?w=996&t=st=1705614873~exp=1705615473~hmac=f5b5c7143db0ce1a875beba452d6779b0a70249b14ddc5a11b9b1528c59ab006" alt=""/>
            </div>
            </div>
        </div>
     );
}
 
export default Login;