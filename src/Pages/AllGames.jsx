import React from "react";
import "./CSS/AllGames.css";
import backArrow from "../Assets/images/left-arrow.png";
import { Link } from "react-router-dom";
import AllGamesCards from "../components/AllGamesCards/AllGamesCards";

const AllGames = () => {
  return (
    <div className="allGamesPageContainer">
      <div className="backHeading">
        <div>
          <Link to="/">
            <img src={backArrow} alt="" />
          </Link>
        </div>
        <div>
          <h1 className="mb-0"> All Games</h1>
        </div>
      </div>
      <AllGamesCards numOfCards={15} />
    </div>
  );
};

export default AllGames;
