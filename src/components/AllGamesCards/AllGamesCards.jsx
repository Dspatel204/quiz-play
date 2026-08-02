import React from "react";
import slide_image_2 from "../../Assets/images/QuizImages/scienceQuiz.png";
import { LiaMedalSolid, LiaTrophySolid } from "react-icons/lia";

const AllGamesCards = ({numOfCards}) => {
  return (
    <div className="cardsGrid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {[...Array(numOfCards)].map((_, index) => (
        <div
          className="rectangleCardsContainer card-hover animate-slide-up"
          style={{ animationDelay: `${index * 0.05}s`, opacity: 0 }}
          key={index}
        >
          <div className="rectangleCard">
            <img src={slide_image_2} alt={`latestImg`} width="180px" />
          </div>
          <div className="rectangleCardContent">
            <div className="pricePoolMain ">
              <p className="pricePool fs">Price Pool</p>
              <p className="pricePoolMoney fs">₹ 1000</p>
            </div>
            <input
              type="range"
              min="1"
              max="1000"
              value="100"
              className="slider"
              id="myRange"
              readOnly
            />
            <div className="spotsMain">
              <p className="spotsLeft">100 spots left</p>
              <p className="spotsNum">1000</p>
            </div>
            <div className="medalsTrophyMain justifyCenter">
              <p className="medals">
                <LiaMedalSolid size={20} />
                ₹100
              </p>
              <p className="trophy">
                <LiaTrophySolid size={20} />
                75%
              </p>
            </div>
            <div className="align-center">
              <button className="entryBtn btnChanges" data-modal="modal-entry">Entry ₹10</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllGamesCards;
