import React from "react";
import "./CSS/AllGames.css";
import backArrow from "../Assets/images/left-arrow.png";
import { Link } from "react-router-dom";
import AllGamesCards from "../components/AllGamesCards/AllGamesCards";

const AllGames = () => {
  return (
    <div className="allGamesPageContainer min-h-screen bg-slate-50 dark:bg-[#090d16] transition-colors duration-300">
      <div className="backHeading flex items-center gap-4 px-4 sm:px-6 lg:px-8 py-6">
        <div>
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img src={backArrow} alt="Back" className="w-6 h-6 sm:w-8 sm:h-8" />
          </Link>
        </div>
        <div>
          <h1 className="mb-0 text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-slate-100"> All Games</h1>
        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <AllGamesCards numOfCards={15} />
      </div>
    </div>
  );
};

export default AllGames;
