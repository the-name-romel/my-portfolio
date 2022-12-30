import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="w-full max-w-[1200px] mx-auto" name="contact">
      <div className="w-full py-[50px] px-[30px]">
        <div className="mx-auto text-center">
          <h1 className="text-primary text-[32px]">CONTACT</h1>
          <p>Get in touch</p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-5 justify-center">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <FaEnvelope className="text-primary" /> racopra@sorsu.edu.ph
            </div>
            <div className="flex items-center gap-1">
              <FaPhoneAlt className="text-primary" /> (+63) 9260118040
            </div>
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-primary" /> Magallanes, Sorsogon
              <br />
              4705, Philippines
            </div>
          </div>
          <form action="" className="space-y-5 text-white w-full max-w-[740px]">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea
              name=""
              id=""
              rows="10"
              placeholder="Type your message here...."
              className="w-full rounded-[10px] bg-primary bg-opacity-50 p-[5px]"
            />
            <button
              type="submit"
              className="border bg-primary rounded-[8px] text-white text-[18px] px-[28px] py-[16px] mt-[30px] hover:bg-opacity-80"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
