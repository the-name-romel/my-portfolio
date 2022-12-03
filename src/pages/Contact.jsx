import React from "react";

function Contact() {
  return (
    <div className="w-full">
      <div className="w-full py-[50px] px-[30px]">
        <div className="mx-auto text-center">
          <h1 className="text-primary text-[32px]">CONTACT</h1>
          <p>Get in touch</p>
        </div>

        <form action="" className="w-full space-y-5 text-white">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea name="" id="" rows="10" placeholder="I love chicken nuggeeeets..." className="w-full rounded-[10px] bg-primary bg-opacity-50" />
          <button
            type="submit"
            className="border bg-primary rounded-[8px] text-white text-[18px] px-[28px] py-[16px] mt-[30px] hover:bg-opacity-80"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
