import React from "react";
import "./CSS/OnGoingGames.css";
import backArrow from "../Assets/images/left-arrow.png";
import { Link } from "react-router-dom";
import { LiaMedalSolid, LiaTrophySolid } from "react-icons/lia";
import slide_image_2 from "../Assets/images/QuizImages/scienceQuiz.png";

const OnGoingGames = () => {
    return (
        <div className="onGoingPageContainer min-h-screen bg-slate-50 dark:bg-[#090d16] transition-colors duration-300">
            <div className="backHeading flex items-center gap-4 px-4 sm:px-6 lg:px-8 py-6">
                <div>
                    <Link to="/" className="hover:opacity-80 transition-opacity">
                        <img src={backArrow} alt="Back" className="w-6 h-6 sm:w-8 sm:h-8" />
                    </Link>
                </div>
                <div>
                    <h1 className="mb-0 text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-slate-100"> Ongoing Games</h1>
                </div>
            </div>
            <div className="onGoingGamesGrid px-4 sm:px-6 lg:px-8 pb-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                    <div className="ongoingCard cardWidth card-hover animate-slide-up" style={{ animationDelay: `${index * 0.05}s`, opacity: 0 }} key={index}>
                        <div className="ongoingImgWrapper">
                            <div className="ongoingImg">
                                <img
                                    src={slide_image_2}
                                    alt="ongoingImgs"
                                    className="ongoingImgs"
                                />
                            </div>
                        </div>
                        <div className="ongoingdetails">
                            <div className="pricePoolMain">
                                <p className="pricePool">Price Pool</p>
                                <p className="pricePoolMoney">₹ 1000</p>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="1000"
                                // value="100"
                                className="slider"
                                id="myRange"
                                readOnly
                            />
                            <div className="spotsMain">
                                <p className="spotsLeft">100 spots left</p>
                                <p className="spotsNum">1000</p>
                            </div>
                            <div className="medalsTrophyMain">
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
                                <button className="entryBtn" data-modal="modal-entry">Entry ₹10</button>
                            </div>
                        </div>
                    </div>
            ))}
            </div>
        </div>
    );
};

export default OnGoingGames;
