import React from "react";

const RecipeModal = () => {
  return (
    <>
      <label className="btn btn-primary" htmlFor="modal-2">Open Modal</label>

      <input className="modal-state" id="modal-2" type="checkbox" />
      <div className="modal w-screen">
        <label className="modal-overlay" htmlFor="modal-2"></label>
        <div className="modal-content flex flex-col gap-5 max-w-3xl">
          <label htmlFor="modal-2" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
          {/* title */}
          <div className="flex items-center gap-5">
            <h2 className="text-xl font-semibold">Chicken Casserole</h2>
            <span className="text-sm text-grey">#Japanese</span>
          </div>
          <div>
            <div></div>
            <div>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum voluptate ratione dicta. Maxime cupiditate, est commodi consectetur earum iure, optio, obcaecati in nulla saepe maiores nobis iste quasi alias!
              </span>
              <a href="/#" className="btn">WATCH</a>
            </div>
          </div>
        </div>
      </div></>
  );
};

export default RecipeModal;
