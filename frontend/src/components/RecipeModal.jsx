import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

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
          <div className="flex items-center gap-5 mb-2 hover:cursor-default">
            <h2 className="text-2xl font-semibold underline decoration-pink-dark decoration-2">Chicken Casserole</h2>
            <span className="text-sm text-grey">#Japanese</span>
          </div>
          {/* model-body */}
          <div className="flex flex-col gap-8">
            {/* top */}
            <div className="flex justify-between items-center gap-10">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXL4M9tdr6AgJR8Ub-o9lS2_7HIKFa3yq66NhUn7RG&s" alt="recipeImage" className="rounded-lg flex-1"/>
              {/* ingredients */}
              <ul className="flex-1 self-start hover:cursor-default">
                <li className="flex justify-between">
                  <p className="font-semibold">Soy Souce</p>
                  <p className="">3/4 cup</p>
                </li>
                <li className="flex justify-between">
                  <p className="font-semibold">Water</p>
                  <p className="">1/4 cup</p>
                </li>
                <li className="flex justify-between">
                  <p className="font-semibold">Ginger</p>
                  <p className="">3/4 cup</p>
                </li>
                <li className="flex justify-between">
                  <p className="font-semibold">Garlic</p>
                  <p className="">3/4 teaspoon</p>
                </li>
                <li className="flex justify-between">
                  <p className="font-semibold">Chicken</p>
                  <p className="">1</p>
                </li>
              </ul>
            </div>
            {/* bottom */}
            <div className="flex flex-col gap-5">
              <span className="hover:cursor-default">
                Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken 
              </span>
              <a href="/#" className="btn w-32 h-9 bg-transparent text-pink-dark border-2 border-pink-dark hover:text-white hover:bg-pink-dark rounded-lg">WATCH<PlayIcon className="w-5 ms-3"/></a>
              
            </div>
          </div>
        </div>
      </div></>
  );
};

export default RecipeModal;
