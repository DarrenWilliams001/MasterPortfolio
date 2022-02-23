import React from "react"

const ContactForm = () => {
  return (
    <div className="my-52 rounded-[10px] bg-white">
      <div className="grid grid-cols-2 gap-4 p-10">
        <div className="col-auto">
          <p className=" text-4xl text-center capitalize text-[#001018]">
            Get in touch
          </p>
          <div className="flex flex-col rounded-md bg-gray-100 p-6">
            <label className="my-2" name="fullname">
              Full Name
            </label>
            <input className="h-" type="text" name="fullname" />
            <label className="my-2" name="email">
              Email
            </label>
            <input type="text" name="email" />
            <label className="my-2" name="phone">
              Phone Number
            </label>
            <input type="text" name="phone" />
            <label className="my-2" name="message">
              Message
            </label>
            <textarea name="message" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div className="col-auto">
          <p className=" text-4xl text-center capitalize text-[#001018]">
            Hire me!
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#77c5cf]">
            Download Resume
          </p>
        </div>
      </div>
    </div>
  )
}
export default ContactForm
