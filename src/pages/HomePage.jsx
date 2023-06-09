import React, { useState } from "react";
import ProductList from "../components/ProductList";
import "../components/HomePage.css";
import beats from "../assets/beats.png";
import ring from "../assets/ring.png";
import dot from "../assets/dot.png";
import Banner from "../components/Banner";
import HomeCard from "../components/HomeCard";
import grid1 from "../assets/home_grid_1.jpg";
import grid2 from "../assets/home_grid_2.jpg";
import grid3 from "../assets/home_grid_3.jpg";
import grid4 from "../assets/home_grid_4.jpg";
import grid5 from "../assets/home_grid_5.jpg";
import grid6 from "../assets/home_grid_6.jpg";
import grid7 from "../assets/home_grid_7.jpg";
import grid8 from "../assets/home_grid_8.jpg";
import grid9 from "../assets/banner_image_2.jpg";

function HomePage({ addToCart }) {
  const products = [
    {
      id: 1,
      name: "Beats Studio3 Wireless",
      price: 328.5,
      image: beats,
    },
    {
      id: 2,
      name: "Echo Dot (3rd Gen) smart speaker",
      price: 29.0,
      image: dot,
    },
    {
      id: 3,
      name: "Ring Video Doorbell 3",
      price: 199.0,
      image: ring,
    },
  ];

  return (
    <div>
      <Banner />
      <div className="amazon-background">
        <div className="Homecards">
          <HomeCard
            title={"We have a surprise for you"}
            img={grid1}
            link="See terms and conditions"
          />
          <HomeCard
            title={"Watch The Rings of Power"}
            img={grid2}
            link="Start streaming now"
          />
          <HomeCard
            title={"Unlimited Streaming"}
            img={grid3}
            link="Find out more"
          />
          <HomeCard
            title={"More titles to explore"}
            img={grid4}
            link="Browse Kindle Unlimited"
          />
          <HomeCard title={"Shop Pet Supplies"} img={grid5} link="See more" />
          <HomeCard title={"Spring Sale"} img={grid6} link="See the deals" />
          <HomeCard title={"Echo Buds"} img={grid7} link="See more" />
          <HomeCard
            title={"Family Plan: 3 months free"}
            img={grid8}
            link="Learn more"
          />
          <div className="hidden">
            <HomeCard title={""} img={grid9} link={""} />
          </div>
        </div>
      </div>

      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
}

export default HomePage;
