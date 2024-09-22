import React from "react";
import backArrow from "../Assets/images/left-arrow.png";
import { Link } from "react-router-dom";
import LatestFeedCards from "../components/LatestFeedCards/LatestFeedCards";

const LatestFeed = () => {
  return (
    <div className="allGamesPageContainer">
      <div className="backHeading">
        <div>
          <Link to="/">
            <img src={backArrow} alt="" />
          </Link>
        </div>
        <div>
          <h1 className="mb-0"> Latest Feed</h1>
        </div>
      </div>
      <LatestFeedCards numOfCards={15} />
    </div>
  );
};

export default LatestFeed;
