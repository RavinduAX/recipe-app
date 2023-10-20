import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RecipeCard from "../components/RecipeCard";

const Home = () => {

  const [category, setCategory] = useState('')

  return <div>
    <Navbar />
    <section className="bg-pink-light h-max px-32 pt-8 pb-20">
      {/* button group */}
      <div className="btn-group btn-group-scrollable gap-3 mb">
        <input type="radio" name="category" data-content="Pork" className="btnCategory" value='pork' onChange={(e)=>{setCategory(e.target.value)}} defaultChecked/>
        <input type="radio" name="category" data-content="Beaf" className="btnCategory" value='beaf' onChange={(e)=>{setCategory(e.target.value)}}/>
        <input type="radio" name="category" data-content="Chicken" className="btnCategory" value='chicken' onChange={(e)=>{setCategory(e.target.value)}}/>
        <input type="radio" name="category" data-content="Lamb" className="btnCategory" value='lamb' onChange={(e)=>{setCategory(e.target.value)}}/>
        <input type="radio" name="category" data-content="Pasta" className="btnCategory" value='pasta' onChange={(e)=>{setCategory(e.target.value)}}/>
      </div>

      <section className="flex flex-wrap items-center justify-between gap-x-10 gap-y-10 mt-14">
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

export default Home;
