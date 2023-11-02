import React, { useState } from "react";
import Register from "./Register";
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [pswdInfo, setPswdInfo] = useState('Please enter a password')
  const [checkPswdInfo, setCheckPswdInfo] = useState('')

  const userLogin = (e) => {
    e.preventDefault();
    const user = { username: email, password: password }
    axios.post('http://localhost:5000/api/v1/recipe/login', user)
      .then((res) => {
        if (res.data.status) {
          setCheckPswdInfo('')
          alert(res.data.msg)
          setEmail(''); setPassword('');
        }
      }).catch((err) => {
        setCheckPswdInfo('Your password or username is incorrect')
        alert(err.response.data.msg)
        console.log(err)
      })
  }

  return (
    <>
      <article>
        {/* login screen */}
        <input className="modal-state" id="loginModal" type="checkbox" />
        <div className="modal">
          <label className="modal-overlay" htmlFor='loginModal'></label>
          <div className="modal-content flex w-5/6 sm:w-4/6 lg:w-2/6 flex-col gap-2 px-12 pb-14">
            <label htmlFor="loginModal" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
            <div className="flex flex-col gap-9">
              <img src={require('../assets/logo.png')} alt="logo" className="w-2/6 self-center mt-11" />
              <h2 className="text-start text-[28px] text-dark">Login</h2>
            </div>

            <section>
              <div className="form-group">
                {/* email */}
                <div className="form-field">
                  <input onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="Email address" type="email" className="input max-w-full rounded-md text-sm border-grey border" />
                </div>

                <div className="form-field">
                  {/* password */}
                  <div className="form-control">
                    <input onChange={(e) => { setPassword(e.target.value); password.length > 0 && setPswdInfo('') }} value={password} placeholder="Password" type="password" className="input max-w-full rounded-md text-sm border-grey border" />
                  </div>
                </div>

                <div className="form-field -translate-y-2">
                  <span className="text-pink-dark text-xs font-medium">{pswdInfo}</span>
                </div>

                <div className="form-field pt-2">
                  {/* sign in */}
                  <button onClick={userLogin} type="button" className="btn w-full bg-pink-dark rounded-md text-white shadow-xl text-sm">SIGN IN</button>
                  <span className="text-pink-dark text-xs font-medium text-center mt-2">{checkPswdInfo}</span>
                </div>
              </div>

              {/* dont have account */}
              <div className="items-center justify-center text-xs dark:text-gray-5 sm:px-6 flex gap-2 mt-8">
                <span className="text-dark font-medium">Don't have an account?</span>
                {/* register modal */}
                <label className="link text-pink-dark font-medium text-xs hover:text-[#e36b8b]" htmlFor="registerModal">Create an account</label>
              </div>
            </section>
          </div>
        </div>
      </article>

      <Register />

    </>
  )
};

export default Login;
