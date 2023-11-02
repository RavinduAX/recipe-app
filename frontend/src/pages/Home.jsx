import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RecipeCard from "../components/RecipeCard";

const Home = () => {

  const [category, setCategory] = useState('pork')

  const catHandler = (cat) => {
    setCategory(cat)
  }

  return <div>
    <Navbar />
    <section className="bg-pink-light h-max px-5 lg:px-32 pt-8 pb-20">
      {/* button group */}
      <div className="btn-group btn-group-scrollable gap-3 mb">
        <input onClick={(e) => { catHandler("pork") }} type="radio" name="category" data-content="Pork" className="btnCategory" defaultChecked />
        <input onClick={() => { catHandler("beaf") }} type="radio" name="category" data-content="Beaf" className="btnCategory" />
        <input onClick={() => { catHandler("chicken") }} type="radio" name="category" data-content="Chicken" className="btnCategory" />
        <input onClick={() => { catHandler("lamb") }} type="radio" name="category" data-content="Lamb" className="btnCategory" />
        <input onClick={() => { catHandler("pasta") }} type="radio" name="category" data-content="Pasta" className="btnCategory" />
      </div>

      <section className="flex flex-wrap items-center justify-between lg:gap-x-10 gap-y-10 mt-14">
        <RecipeCard />
      </section>

    </section>
  </div>;
};

export default Home;
