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
    <div className="latestCardsContainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
      {[...Array(numOfCards)].map((e, index) => (
        <div
          className="lastestCard card-hover animate-slide-up"
          style={{ animationDelay: `${index * 0.05}s`, opacity: 0 }}
          key={index}
        >
          <div className="latestImg overflow-hidden rounded-t-xl">
            <img src={images[index]} alt={`latestImg_${index}`} className="w-full h-48 object-cover" />
          </div>
          <div className="latestCarddetails">
            <h2 className="latestCardTitle">Living</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Bienvenue sur le Quiz du blog Fun Test !Ce Quiz comporte</p>
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
