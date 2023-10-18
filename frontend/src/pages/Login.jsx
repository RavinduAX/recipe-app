import React from "react";

const Login = () => {
  return (
    <article>
      {/* button */}
      <label className="btn btn-primary" htmlFor="modal-1">Open Modal</label>
      {/* login screen */}
      <input className="modal-state" id="modal-1" type="checkbox" />
      <div className="modal">
        <label className="modal-overlay" htmlFor="modal-1"></label>
        <div className="modal-content flex w-full flex-col gap-5 p-7">
          <label htmlFor="modal-1" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
          <div className="flex flex-col gap-2">
            <img src={require('../assets/logo.png')} alt="logo" className="w-2/6 self-center"/>
            <h2 className="text-start text-[28px] text-dark">Login</h2>
          </div>

          <section>
            <div className="form-group">
              <div className="form-field">
                <input placeholder="Email address" type="email" className="input max-w-full rounded-md" />
              </div>

              <div className="form-field">
                <div className="form-control">
                  <input placeholder="Password" type="password" className="input max-w-full rounded-md" />
                </div>
              </div>

              <div className="form-field">
                <span className="text-pink-dark text-xs font-medium">Please enter a password</span>
              </div>

              <div className="form-field pt-5">
                  <button type="button" className="btn w-full bg-pink-dark rounded-md text-white shadow-xl">SIGN IN</button>
                <span className="text-pink-dark text-xs font-medium">Your password or username is incorrect</span>
              </div>
            </div>
            
            {/* dont have account */}
            <div className="items-center justify-center text-xs dark:text-gray-5 sm:px-6 flex gap-2">
              <span className="text-dark font-medium">Don't have an account?</span>
              <a rel="/#" href="/#" className="link text-pink-dark font-medium text-xs">Create an account</a>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
};

export default Login;
