import { FaHandHoldingHeart } from "react-icons/fa";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { MdHealthAndSafety } from "react-icons/md";
import { motion } from "framer-motion"
import { FaCarCrash } from "react-icons/fa";
import { IoAirplaneSharp } from "react-icons/io5";
import { MdBusinessCenter } from "react-icons/md";
import React from "react";
import Slider from "react-slick";
import { FaTelegram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";


import { Link } from "react-router-dom";
import { Carousel } from 'antd';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Landing = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };      

    return ( 
        <div className="bg-white">
        <div className="mt-10 m-3 flex justify-between">
            <div className="ml-5">
                <h1 className="font-semibold text-6xl mt-16" >Do insurance & <span className="block text-[#ff5800] ">secure your family.</span></h1>
                   <p className="text-balance mt-10" >Introducing Hiwot Insurance, the leading insurance company based in Addis Ababa, AA. With a strong focus on providing comprehensive insurance solutions, we are dedicated to protecting our clients' assets and ensuring peace of mind. Our team of experienced professionals is committed to delivering exceptional service and tailored insurance plans to meet the unique needs of each individual or business. Trust Hiwot Insurance to safeguard what matters most to you.</p>
                <Link to="/start">  <button className="border bg-[#379cf6]  p-1 mt-10 rounded-md w-48 mr-10 hover:bg-blue-400 hover:text-white">Get a quote</button></Link>
                  <button className="border border-[#379cf6] p-1 mt-10 rounded-md w-48 mr-10">Find Agent</button>
            </div>
            <img className="h-96 w-auto" src="https://img.freepik.com/free-vector/illustration-family-life-insurance_53876-40781.jpg?w=826&t=st=1705437490~exp=1705438090~hmac=3b757114704d5766d492f71bdc437706d4f17c729a13713ece71acc376c0ed1a" alt=""/>
        </div>

        <div className="flex items-center gap-8 ml-8 m-5 mt-32">
            <div className="border shadow-sm rounded-sm p-5 w-60 h-44" >
                <h3>Experience</h3>
                <h1 className="font-semibold text-2xl mt-2">25+ years of experiance</h1>
            </div>

            <div className="border shadow-sm rounded-sm p-5 w-60 h-44" >
                <h3>Discount & Savings</h3>
                <h1 className="font-semibold text-2xl mt-2">Save up to 50% our poicy</h1>
            </div>

            <div className="border shadow-sm rounded-sm p-5 w-60 h-44" >
                <h3>Customer</h3>
                <h1 className="font-semibold text-2xl mt-2">99% customer retention rate  </h1>
            </div>

            <div className="border shadow-sm rounded-sm p-5 w-60 h-44" >
                <h3>Lowest price</h3>
                <h1 className="font-semibold text-2xl mt-2">50% insurers with the lowest price</h1>
            </div>
        </div>

        <div className="border-t m-5 mt-10 pt-5 flex">
            <div className="w-4/5 mt-10">
            <h1 className="mb-5 text-mono font-semibold text-[#379cf6]">WHO WE ARE</h1>
            <h1>We are one of the largest insurance Agency throughout the East Africa</h1>
            <p >Hiwot Insurance is a leading insurance company based in Addis Ababa, AA. With a strong commitment to providing reliable and comprehensive insurance solutions, we strive to protect our clients' assets and provide peace of mind.

</p>
            <p className="mt-3">Our team of experienced professionals is dedicated to delivering exceptional customer service and tailoring insurance packages to meet the unique needs of each individual and business. Trust Hiwot Insurance to safeguard what matters most to you.</p>
            <button className="mt-8 w-48 bg-[#379cf6] p-2 rounded-md">Read more</button>
            </div>
            
            <img className="h-80  " src="https://img.freepik.com/free-vector/illustration-family-life-insurance_53876-40786.jpg?w=826&t=st=1705479393~exp=1705479993~hmac=05de0d542797f62e593f0b99962567007e6dadd767bdf06d5ecbee028eac7400" alt=""/>
        </div>

        <div className="mt-10 border-t m-5 pt-5">
            <h1 className="font-semibold text-2xl flex place-content-center">Services</h1>
          <p className=" mb-5 pt-2 ml-24 grid place-content-center ">Lorem ipsum dolor sit amet, consectetur adipisicing elit Possimus deleniti deserunt vel.<span className="block text-wrap ml-32"> labore voluptate? Omnis sint numquam aut </span></p>
         <div className="flex gap-5 items-center">
         <motion.div
           whileHover={{ scale: 0.9 }}
           whileTap={{ scale: 1.1 }} className="w-96 shadow-sm h-64 p-5">
            <BsFillHouseHeartFill  className="h-10 w-12 text-[#ff5800] ml-20"/>
                <h1 className="font-semibold text-xl ml-10 pt-3 pb-2">Home Insurance</h1>
                <p className="text-balance">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et nam ab dicta molestiae fugiat aut, ex voluptas cumque, sit a mollitia possimus provident. Ullam sequi numquam id, hic molestiae sunt?</p>
                <p className="text-[#ff5800] hover:underline cursor-pointer">Read more</p>
            </motion.div>
            <motion.div
           whileHover={{ scale: 0.9 }}
           whileTap={{ scale: 1.1 }}className="w-96 shadow-sm h-64 p-5">
            <FaHandHoldingHeart  className="h-10 w-12 text-[#ff5800] ml-20"/>
                <h1 className="font-semibold text-xl ml-10 pt-3 pb-2">Life Insurance</h1>
                <p className="text-balance">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et nam ab dicta molestiae fugiat aut, ex voluptas cumque, sit a mollitia possimus provident. Ullam sequi numquam id, hic molestiae sunt?</p>
                <p className="text-[#ff5800] hover:underline cursor-pointer">Read more</p>
            </motion.div>
            <motion.div
           whileHover={{ scale: 0.9 }}
           whileTap={{ scale: 1.1 }} className="w-96 shadow-sm h-64 p-5">
            <MdHealthAndSafety  className="h-10 w-12 text-[#ff5800] ml-20"/>
                <h1 className="font-semibold text-xl ml-10 pt-3 pb-2">Health Insurance</h1>
                <p className="text-balance">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et nam ab dicta molestiae fugiat aut, ex voluptas cumque, sit a mollitia possimus provident. Ullam sequi numquam id, hic molestiae sunt?</p>
                 <p className="text-[#ff5800] hover:underline cursor-pointer">Read more</p>
            </motion.div>
         </div>

         <div className="flex gap-5 items-center mt-10">
         <motion.div
           whileHover={{ scale: 0.9 }}
           whileTap={{ scale: 1.1 }}
           className="w-96 shadow-sm h-64 p-5  border cursor-pointer">
            <FaCarCrash className="h-10 w-12 text-[#ff5800] ml-20"/>
                <h1 className="font-semibold text-xl ml-10 pt-3 pb-2">Car Insurance</h1>
                <p className="text-balance">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et nam ab dicta molestiae fugiat aut, ex voluptas cumque, sit a mollitia possimus provident. Ullam sequi numquam id, hic molestiae sunt?</p>
                 <p className="text-[#ff5800] hover:underline cursor-pointer">Read more</p>
            </motion.div>
            <motion.div
           whileHover={{ scale: 0.9 }}
           whileTap={{ scale: 1.1 }}
           className="w-96 shadow-sm h-64 p-5  border cursor-pointer">
           <IoAirplaneSharp  className="h-10 w-12 text-[#ff5800] ml-20"/>
                <h1 className="font-semibold text-xl ml-10 pt-3 pb-2">Travel Insurance</h1>
                <p className="text-balance">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et nam ab dicta molestiae fugiat aut, ex voluptas cumque, sit a mollitia possimus provident. Ullam sequi numquam id, hic molestiae sunt?</p>
                 <p className="text-[#ff5800] hover:underline cursor-pointer">Read more</p>
            </motion.div>
            <motion.div
           whileHover={{ scale: 0.9 }}
           whileTap={{ scale: 1.1 }}
           className="w-96 shadow-sm h-64 p-5  border cursor-pointer">
            <MdBusinessCenter   className="h-10 w-12 text-[#ff5800] ml-20"/>
                <h1 className="font-semibold text-xl ml-10 pt-3 pb-2">Business Insurance</h1>
                <p className="text-balance">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et nam ab dicta molestiae fugiat aut, ex voluptas cumque, sit a mollitia possimus provident. Ullam sequi numquam id, hic molestiae sunt?</p>
                 <p className="text-[#ff5800] hover:underline cursor-pointer">Read more</p>
            </motion.div>
         </div>

        </div>

        
       
       
        <div className="mt-16 m-5">
       <h1 className="pb-5 font-semibold text-3xl grid place-content-center">What Our Client Say About Us</h1>
       <p className="grid place-content-center font-sans">Lorem ipsum dolor sit ducimus consequatur iure vel pariatur inventore dolor temporibus?<span className="block ml-32"> Aliquam adipisci nobis doloribus</span></p>
       <div className="flex gap-5 items-center">
        <div className="w-96 h-72 border shadow-sm mt-10 p-5">
          <div className="flex items-center pb-5">
            <img className="h-16 w-20  rounded-full" src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1705592568~exp=1705593168~hmac=0eb9291d28979913951e94f03b209b79ca4a111cd24c38704356929efa20c9d4" alt=""/>
             <p><h1 className="font-semibold pt-5">John Doe</h1>
             <p className="text-gray-500">content creator</p>
             </p>
          </div>
          <p>Hiwot insurance provided excellent service and helped me find the perfect insurance plan for my needs. The staff was knowledgeable and friendly, making the whole process easy and stress-free. Thank you, Hiwot insurance!
          </p>
          
        </div>

        <div className="w-96 h-72 border shadow-sm mt-10 p-5">
          <div className="flex items-center pb-5">
            <img className="h-16 w-16  rounded-full mr-3" src="https://img.freepik.com/free-photo/handsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg?w=996&t=st=1705604782~exp=1705605382~hmac=9a139f0b628ebbca3aabbd116801672bdb6e4470431195b41d8a5a8ade5cdaaa" alt=""/>
             <p><h1 className="font-semibold pt-5">Smith R.</h1>
             <p className="text-gray-500">engineer</p>
             </p>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, dicta, suscipit sunt fuga laudantium fugiat quo placeat aperiam eaque sit tenetur tempora asperiores qui doloremque consectetur. Ipsa possimus neque molestias?
          </p>
          
        </div>

        <div className="w-96 h-72 border shadow-sm mt-10 p-5">
          <div className="flex items-center pb-5">
            <img className="h-16 w-16 mr-3  rounded-full" src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?w=740&t=st=1705604764~exp=1705605364~hmac=08a5122af296db9acc8a3d1ba39117f143f055d265a303137892920fb19c8fd4" alt=""/>
             <p><h1 className="font-semibold pt-5">Juliya Doe</h1>
             <p className="text-gray-500">Photographer</p>
             </p>
          </div>
          <p>Hiwot insurance provided excellent service and helped me find the perfect insurance plan for my needs. The staff was knowledgeable and friendly, making the whole process easy and stress-free. Thank you, Hiwot insurance!
          </p>
          
        </div>
       </div>
      </div>

   

      </div>
    
     );
}
 
export default Landing;