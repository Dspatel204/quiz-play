import React from "react";
import { BsDot } from "react-icons/bs";
import Quizman from "../../Assets/images/QuizImages/Artboard-2-1.png";
import hundredquiz from "../../Assets/images/QuizImages/Rectangle 1619 (4).png"
import Purplequiz from "../../Assets/images/QuizImages/Rectangle 1619 (2).png"
import Rummyquiz from "../../Assets/images/QuizImages/Rectangle 1619 (3).png"

const LatestFeedCards = ({ numOfCards }) => {
  const images = [
    Quizman, hundredquiz, Purplequiz, Rummyquiz, Quizman
  ]
  return (
    <div className="latestCardsContainer">
      {[...Array(numOfCards)].map((e, index) => (
        <div className="lastestCard" key={index}>
          <div className="latestImg">
            <img src={images[index]} alt={`latestImg_${index}`} />
          </div>
          <div className="latestCarddetails">
            <h2 className="latestCardTitle">Living</h2>
            <p>Bienvenue sur le Quiz du blog Fun Test !Ce Quiz comporte</p>
            <div className="nameMonths">
              <span>JOHN DOE</span>
              <span>
                <BsDot /> 4 MONTHS AGO
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestFeedCards;
