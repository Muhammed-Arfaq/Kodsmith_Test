import { useState } from "react";
import { userSignup } from "../api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate()

    const [fullName, setFullName] = useState("")
    const [dob, setDob] = useState("")
    const [gender, setGender] = useState("")
    const [designation, setDesignation] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    
    const eventHandler = (e) => {
        e.preventDefault()
        userSignup(fullName, dob, gender, designation, mobile, email, password, confirmPassword).then(() => {
            alert("signup Successful")
            navigate("/login")
        })
    }

  return (
    <>
      <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Enter your Details for Registration
            </h2>
          </div>
          <form onSubmit={eventHandler} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="fullname" className="sr-only">
                  Full Name
                </label>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value)
                  }}
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  DOB
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="date"
                  value={dob}
                  onChange={(e) => {
                    setDob(e.target.value)
                  }}
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Date Of Birth"
                />
              </div>
              <div>
                <p className="font-bold">GENDER :</p>
                <input
                  id="push-everything"
                  name="push-notifications"
                  type="radio"
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value)
                  }}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="push-everything"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Male
                </label>
                <input
                  id="push-everything"
                  name="push-notifications"
                  type="radio"
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value)
                  }}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="push-everything"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Female
                </label>
              </div>
              <div>
                <p className="font-bold">Designation :</p>
                <input
                  id="push-everything"
                  name="push-notifications"
                  type="checkbox"
                  value={designation}
                  onChange={(e) => {
                    setDesignation(e.target.value)
                  }}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="push-everything"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Driver
                </label>
                <input
                  id="push-everything"
                  name="push-notifications"
                  type="checkbox"
                  value={designation}
                  onChange={(e) => {
                    setDesignation(e.target.value)
                  }}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="push-everything"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Web Developer
                </label>
              </div>
              
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Phone
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="text"
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value)
                  }}
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                  }}
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
