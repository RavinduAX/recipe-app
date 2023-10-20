import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RecipeCard from "../components/RecipeCard";

const Favourite = () => {

  const [category, setCategory] = useState('')

  return <div>
    <Navbar />
    <section className="bg-pink-light h-max px-5 lg:px-32 pt-8 pb-20">
      <section className="flex flex-wrap items-center justify-between lg:gap-x-10 gap-y-10 mt-14">
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
      </section>
    
    </section>
  </div>;
};

export default Favourite;
