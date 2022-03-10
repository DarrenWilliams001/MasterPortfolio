import React from "react"
import { useForm, ValidationError } from "@formspree/react"

import resumeFile from "../resume/2022_DWilliams_Resume.pdf"

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mzbodjgy")
  if (state.succeeded) {
    return (
      <>
        <h4 className="text-white text-center w-full text-2xl my-36 md:my-52">
          Thanks for getting in touch!
        </h4>
      </>
    )
  }

  return (
    <>
      <a id="contact"></a>
      <div className="my-36 lg:my-52 rounded-[10px] bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 lg:p-10">
          <div className="col-auto">
            <h3 className=" text-4xl mb-4 text-center capitalize text-primary">
              Get in touch
            </h3>
            <div className="flex flex-col rounded-md bg-gray-100 p-1 lg:p-6">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col my-2">
                  <label className="my-2" htmlFor="fullname">
                    Full Name
                  </label>
                  <input
                    className="rounded-md h-[2rem] p-2"
                    id="fullname"
                    type="text"
                    name="fullname"
                  />
                  <ValidationError
                    prefix="Fullname"
                    field="fullname"
                    errors={state.errors}
                  />
                </div>
                <div className="flex flex-col my-2">
                  <label className="my-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="rounded-md h-[2rem] p-2"
                    id="email"
                    type="email"
                    name="email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="flex flex-col my-2">
                  <label className="my-2" htmlFor="mobile">
                    Mobile
                  </label>
                  <input
                    className="rounded-md h-[2rem] p-2"
                    id="mobile"
                    type="mobile"
                    name="mobile"
                  />
                  <ValidationError
                    prefix="Mobile"
                    field="mobile"
                    errors={state.errors}
                  />
                </div>
                <div className="flex flex-col my-2">
                  <label className="my-2" htmlFor="message">
                    Leave a message
                  </label>
                  <textarea
                    className="rounded-md h-[10rem] p-2"
                    id="message"
                    rows="10"
                    name="message"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button
                  className="bg-teal-300  p-2 rounded-md hover:bg-teal-200"
                  type="submit"
                  disabled={state.submitting}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-auto">
            <h3 className=" text-4xl mb-4 text-center capitalize ">Hire me!</h3>
            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-center">
              <a className="text-primary hover:border-b-2" href={resumeFile}>
                Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default ContactForm
