import { HeartIcon } from "@heroicons/react/24/outline";
import React from "react";


const RecipeCard = () => {
  return (
    <div className="card card-image-cover shadow-none bg-transparent w-52">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXL4M9tdr6AgJR8Ub-o9lS2_7HIKFa3yq66NhUn7RG&s" alt="thumbnail" className="w-52 !h-52 !rounded-2xl "/>
      <div className="card-body p-0 gap-0">
        <div className="flex gap-5">
          <p className="text-content2 capitalize">soups</p>
          <HeartIcon className="h-6 w-6 text-pink-dark"/>
        </div>
        <h2 className="card-header font-semibold capitalize">chicken noodle soup</h2>
      </div>
    </div>
  );
};

export default RecipeCard;
