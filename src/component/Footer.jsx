import React from "react";
import { FaTelegram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
    return (  
        <div>
              <div className="bg-[#f8f1ed] mt-10 p-5 pt-5 flex">
        <div className="mr-40">
          <h1 className="mb-3">Logo</h1>
          <h1 className="text-[#ff5800] font-mono font-semibold text-2xl">Hiwote Insurance</h1>
        </div>
        
        <div className="flex items-center gap-5">
          <div className="ml-10">
            <h1 className="font-semibold pb-2">Feature</h1>
          <ul>
            <li>FAQ</li>
            <li>Agents</li>
            <li>Quote</li>
          </ul>
          </div>

          <div className="ml-10">
            <h1 className="font-semibold pb-2">Address</h1>
          <ul>
            <li>Addis Ababa</li>
            <li>Bahirdar</li>
            <li>Mekele</li>
          </ul>
          </div>

          <div className="ml-10">
            <h1 className="font-semibold pb-2">Contact</h1>
          <ul>
            <li>+251-999-999-999</li>
            <li>+251-999-999-999</li>
            <li>example@example.com</li>
          </ul>
          </div>
     
        <div className="flex items-center gap-5 ml-10">
        <FaFacebook className="h-10 w-10 text-blue-600"/>
        <FaTelegram className="h-10 w-10 text-blue-500"/>
        <IoLogoWhatsapp className="h-10 w-10 text-green-500" />
        </div>

        </div>

      </div>
        </div>
    );
}
 
export default Footer;