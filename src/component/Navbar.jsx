const Navbar = () => {
    return ( 
        <div className="bg-white relative ">
            <div className="flex justify-between items-center p-5 sticky top-10 shadow-sm">
           <div>
            <h1 className="font-semibold text-2xl text-[#ff5800]">Hiwot Insurance</h1>
           </div>

           {/*Right */}
           <div className="">
            <ul className="flex items-center gap-10 pr-10">
                <li className="hover:text-[#379cf6] cursor-pointer font-sans ">Home</li>
                <li className="hover:text-[#379cf6] cursor-pointer font-sans ">Insurance</li>
                <li className="hover:text-[#379cf6] cursor-pointer font-sans ">About</li>
                <li className="hover:text-[#379cf6] cursor-pointer font-sans ">Blogs</li>
                <li className="hover:text-[#379cf6] cursor-pointer font-sans ">Contact Us</li>
            </ul>
           </div>
           </div>
        </div>
     );
}
 
export default Navbar;