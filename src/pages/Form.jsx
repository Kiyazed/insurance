import { FaHandHoldingHeart } from "react-icons/fa";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { MdHealthAndSafety } from "react-icons/md";
import { motion } from "framer-motion"
import { FaCarCrash } from "react-icons/fa";
import { IoAirplaneSharp } from "react-icons/io5";
import { MdBusinessCenter } from "react-icons/md";
import { MdMapsHomeWork } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";

const Form = () => {
    return ( 
        <div className="bg-white">
            <div className="relative ">
                <img className="h-96 w-full opacity-90" src="https://img.freepik.com/free-photo/safe-rooftop-their-new-home_637285-12442.jpg?w=996&t=st=1705694348~exp=1705694948~hmac=2996b9ee69eb8c660b7f257dcd47679dbebd483ba803789e61541dbd41677c14" alt=""/>
            
              <h1 className="absolute bottom-0 translate-y-16  bg-white left-96 w-2/4 opacity-100 p-2 font-medium text-xl m-10 border shadow-md">Get the right protection to keep<span> moving forward</span> <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam beatae corporis ipsam quisquam distinctio iste id dolor fugiat minima, deleniti nisi delectus, ad qui repellat?</p></h1>
            </div>

            <div className="mt-24 m-5" >
                <h1 className="font-semibold text-3xl grid place-content-center mb-10">Choose your insurance</h1>
                <div className="grid grid-cols-4 gap-4">
                   <Link to="/life"> <div className="border p-2 w-60 h-28 shadow-sm">
                    <FaHandHoldingHeart  className="h-10 w-10 text-[#ff5800] ml-20"/>
                        <h1 className="font-semibold flex place-content-center pt-5">Life Insurance</h1>
                    </div>
                    </Link>

                    <div className="border p-2 w-60 h-28 shadow-sm">
                    <BsFillHouseHeartFill  className="h-10 w-10 text-[#ff5800] ml-20"/>
                        <h1 className="font-semibold flex place-content-center pt-5">Home Insurance</h1>
                    </div>

                    <div className="border p-2 w-60 h-28 shadow-sm">
                    <MdHealthAndSafety  className="h-10 w-10 text-[#ff5800] ml-20"/>
                        <h1 className="font-semibold flex place-content-center pt-5">Health Insurance</h1>
                    </div>

                    <div className="border p-2 w-60 h-28 shadow-sm">
                    <FaCarCrash className="h-10 w-10 text-[#ff5800] ml-20"/>
                        <h1 className="font-semibold flex place-content-center pt-5">Car Insurance</h1>
                    </div>

                    <div className="border p-2 w-60 h-28 shadow-sm">
                    <IoAirplaneSharp  className="h-10 w-10 text-[#ff5800] ml-20"/>
                        <h1 className="font-semibold flex place-content-center pt-5">Travel Insurance</h1>
                    </div>

                    <div className="border p-2 w-60 h-28 shadow-sm">
                       <MdBusinessCenter   className="h-10 w-10 text-[#ff5800] ml-20"/>
                        <h1 className="font-semibold flex place-content-center pt-5">Business Insurance</h1>
                    </div>

                    <div className="border p-2 w-60 h-28 shadow-sm">
                    <FaFireAlt    className="h-10 w-10 text-[#ff5800] ml-20"/>
                        <h1 className="font-semibold flex place-content-center pt-5">Fire Insurance</h1>
                    </div>

                    <div className="border p-2 w-60 h-28 shadow-sm">
                    <MdMapsHomeWork  className="h-10 w-10 text-[#ff5800] ml-20"/>
                        <h1 className="font-semibold flex place-content-center pt-5">Company Insurance</h1>
                    </div>

                </div>
            </div>

            <div className="mt-16 m-5">
                <h1 className="font-medium font-mono flex place-content-center">LATEST NEWS & BLOG</h1>
                <h1 className="font-semibold text-2xl flex place-content-center mb-10">Read Our Latest Articles</h1>
              <div className="flex items-center gap-3">
                <div className="border shadow-sm h-80 w-80 rounded-md">
                    <img className="h-36 w-full" src="https://img.freepik.com/free-photo/group-businesspeople-with-thumbs-up-gesture-modern-office-multi-ethnic-people-working-together-teamwork-concept_1139-964.jpg?w=996&t=st=1705783105~exp=1705783705~hmac=fa82543e0eaf21e7473f0edf199d137f58511f57ef6e9e1581e41cef19b45dee" alt=""/>
                    <h1 className="p-1 font-semibold text-md ">A smart salesperson listen to emotions not facts.</h1>
                    <p className="p-1 text-gray-500 text-wrap">Lorem, ipsum dolor sit amet chilm voluptatibus omnis molestiae pariatur? Perferendis?</p>
                    <h2 className="text-[#ff5800] p-2 font-medium hover:underline cursor-pointer">READ MORE </h2>
                </div>

                <div className="border shadow-sm h-80 w-80 rounded-md">
                    <img className="h-36 w-full" src="https://img.freepik.com/free-photo/co-workers-corridor_1098-562.jpg?w=996&t=st=1705784112~exp=1705784712~hmac=c686c2303e49ad06ff48576e306d44ca53f0316471f8c7c4bd9bbdf10ae9e901" alt=""/>
                    <h1 className="p-1 font-semibold text-md ">In order to succeed we must first believe.</h1>
                    <p className="p-1 text-gray-500 text-wrap">Lorem, ipsum dolor sit amet chilm voluptatibus omnis molestiae pariatur? Perferendis?</p>
                    <h2 className="text-[#ff5800] p-2 font-medium hover:underline cursor-pointer">READ MORE </h2>
                </div>

                <div className="border shadow-sm h-80 w-80 rounded-md">
                    <img className="h-36 w-full" src="https://img.freepik.com/free-photo/business-group-with-cellphones-discussing-project_74855-1145.jpg?w=996&t=st=1705784182~exp=1705784782~hmac=ac3b3db230f8faa1ae88df6b6ce4fbd553bf438df4dfe7d70369a5e4d50a8a69" alt=""/>
                    <h1 className="p-1 font-semibold text-md ">Knowledge is power. Only if it is followed by actions.</h1>
                    <p className="p-1 text-gray-500 text-wrap">Lorem, ipsum dolor sit amet chilm voluptatibus omnis molestiae pariatur? Perferendis?</p>
                    <h2 className="text-[#ff5800] p-2 font-medium hover:underline cursor-pointer">READ MORE </h2>
                </div>

                <div className="border shadow-sm h-80 w-80 rounded-md">
                    <img className="h-36 w-full" src="https://img.freepik.com/free-photo/african-american-business-woman-working-computer-bar_1303-10865.jpg?w=996&t=st=1705784280~exp=1705784880~hmac=1a9fbf17716121d7a70711469dd3f20faf2c73bc70aeb608c9a6f4c623b0b764" alt=""/>
                    <h1 className="p-1 font-semibold text-md ">A smart salesperson listen to emotions not facts.</h1>
                    <p className="p-1 text-gray-500 text-wrap">Lorem, ipsum dolor sit amet chilm voluptatibus omnis molestiae pariatur? Perferendis?</p>
                    <h2 className="text-[#ff5800] p-2 font-medium hover:underline cursor-pointer">READ MORE </h2>
                </div>

              </div>
              
            </div>


        </div>
     );
}
 
export default Form;