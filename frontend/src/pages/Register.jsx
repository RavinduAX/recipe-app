import React, { useState } from "react";
import axios from 'axios'

const Register = () => {

  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [email, setEmail] = useState('')
  const [contactNo, setContactNo] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')

  const [pswdInfo, setPswdInfo] = useState('')

  const createUserAcc = (e) => {
    e.preventDefault()
    if (password !== cPassword) {
      return setPswdInfo('The password does not match')
    } else {
      const user = {
        name: {
          firstname: fName,
          lastname: lName
        },
        email: email,
        contactNo: contactNo,
        password: password,
        favourite:[]
      }
      axios.post('http://localhost:5000/api/v1/recipe/', user)
        .then((res) => {
          if (res.data.status) {
            alert(res.data.msg)
            console.log(res.data.msg);
          } else {
            alert(res.data.msg)
            console.log(res.data.msg);
          }
        }).catch((err) => {
          alert(err.msg)
          console.log(err.msg);
        })
      // setPswdInfo(''); setFName(''); setLName(''); setEmail(''); setContactNo(''); setPassword(''); setCPassword('');
    }
  }

  return (
    <article>
      {/* login screen */}
      <input className="modal-state" id="registerModal" type="checkbox" />
      <div className="modal">
        <label className="modal-overlay" htmlFor="registerModal"></label>

        <div className="modal-content flex w-5/6 md:max-w-xl lg:max-w-3xl flex-col gap-2 px-12 pb-14">
          <label htmlFor="registerModal" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
          <div className="flex flex-col gap-9">
            <img src={require('../assets/logo.png')} alt="logo" className="w-2/6 lg:w-1/6 self-center mt-11" />
            <h2 className="text-start text-[28px] text-dark">Register</h2>
          </div>

          <section>
            <div className="form-group">

              {/* name */}
              <div className="form-field sm:flex-row sm:gap-3">
                <input onChange={(e) => { setFName(e.target.value) }} value={fName} placeholder="First name" type="text" className="input max-w-full rounded-md text-sm border-grey border" />
                <input onChange={(e) => { setLName(e.target.value) }} value={lName} placeholder="Last name" type="text" className="input max-w-full rounded-md text-sm border-grey border" />
              </div>

              {/* email, contact no */}
              <div className="form-field sm:flex-row sm:gap-3">
                <input onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="Email address" type="email" className="input max-w-full rounded-md text-sm border-grey border" />
                <input onChange={(e) => { setContactNo(e.target.value) }} value={contactNo} placeholder="Contact no" type="tel" className="input max-w-full rounded-md text-sm border-grey border" />
              </div>

              {/* password */}
              <div className="form-field">
                <div className="form-control flex-col sm:flex-row sm:gap-3">
                  <input onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder="Password" type="password" className="input max-w-full rounded-md text-sm border-grey border" />
                  <input onChange={(e) => { setCPassword(e.target.value) }} value={cPassword} placeholder="Confirm Password" type="password" className="input max-w-full rounded-md text-sm border-grey border" />
                </div>
                <span className="text-pink-dark text-xs font-medium">{pswdInfo}</span>
              </div>

              <div className="form-field pt-4">
                {/* sign in */}
                <button onClick={createUserAcc} type="button" className="btn w-full md:w-max bg-pink-dark rounded-md text-white shadow-xl text-sm">Create Account</button>
              </div>
            </div>

            {/* dont have account */}
            <div className="items-center justify-center text-xs dark:text-gray-5 sm:px-6 flex gap-2 mt-12">
              <span className="text-dark font-medium">Already have an account?</span>
              {/* register modal */}
              <label className="modal-close link text-pink-dark font-medium text-xs hover:text-[#e36b8b]" htmlFor="registerModal">Login</label>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
};

export default Register;
