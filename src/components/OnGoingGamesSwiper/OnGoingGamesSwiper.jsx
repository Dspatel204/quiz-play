import React from "react";
import "./OnGoingGamesSwiper.css";

import { Navigation, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { LiaMedalSolid, LiaTrophySolid } from "react-icons/lia";
import slide_image_2 from "../../Assets/images/QuizImages/scienceQuiz.png";

const OnGoingGames = () => {
  return (
    <>
    <div className="swiper-container bg-slate-50 dark:bg-[#090d16] transition-colors duration-300">
      <div className="container-max py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">Ongoing Games</h2>
          <a href="/ongoingGames" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline transition-colors text-sm">
            View All →
          </a>
        </div>
      </div>
      <div className="swiper-wrapper">
        <Swiper
          className="pl"
          modules={[Navigation, Scrollbar, A11y]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 100,
              marginLeft: "50px"
            },
            425: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            672: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            920: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1150: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 5.5,
              spaceBetween: 30,
            },
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <SwiperSlide key={index}>
              <div className="ongoingCard card-hover animate-slide-up" style={{ animationDelay: `${index * 0.05}s`, opacity: 0 }}>
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
                    value="100"
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="swiper-button-next">
      </div>
      <div className="swiper-button-prev">
      </div>
    </div>
    </>
  );
};

export default OnGoingGames;
