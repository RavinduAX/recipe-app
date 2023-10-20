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
            {/* left */}
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXL4M9tdr6AgJR8Ub-o9lS2_7HIKFa3yq66NhUn7RG&s" alt="recipeImage" />
              {/* ingredients */}
              <ul>
                <li className="flex gap-10">
                  <p className="font-semibold">Soy Souce</p>
                  <p className="">3/4 cup</p>
                </li>
              </ul>
            </div>
            {/* right */}
            <div>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum voluptate ratione dicta. Maxime cupiditate, est commodi consectetur earum iure, optio, obcaecati in nulla saepe maiores nobis iste quasi alias!
              </span>
              <a href="/#" className="btn w-32 h-9 bg-transparent text-pink-dark border-2 border-pink-dark hover:text-white hover:bg-pink-dark">WATCH</a>
            </div>
          </div>
        </div>
      </div></>
  );
};

export default RecipeModal;
