import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import quiz from "../../Assets/images/QuizImages/Ellipse 109.png";
import Bantan from "../../Assets/images/QuizImages/Ellipse 110.png"
import Racingcar from "../../Assets/images/QuizImages/Ellipse 111.png"
import Football from "../../Assets/images/QuizImages/Ellipse 112.png"
import Adventure from "../../Assets/images/QuizImages/Ellipse 113.png"
import Casino from "../../Assets/images/QuizImages/Ellipse 115.png"
import Words from "../../Assets/images/QuizImages/Ellipse 116.png"
import slide_image_2 from "../../Assets/images/QuizImages/scienceQuiz.png";

const AllGamesSwiper = () => {
  return (
    <div className="allGamesContainer bg-slate-50 dark:bg-[#090d16] transition-colors duration-300">
      <div className="container-max py-8">
        <h2 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100 mb-6 text-center">
          Browse Categories
        </h2>
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="allGamesSwiper"
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            425: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            488: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 8,
              spaceBetween: 15,
            },
          }}
        >
          {[
            { img: quiz, label: "All" },
            { img: Bantan, label: "Action" },
            { img: Racingcar, label: "Racing" },
            { img: Football, label: "Sports" },
            { img: Adventure, label: "Adventure" },
            { img: Football, label: "Puzzle" },
            { img: Casino, label: "Casino" },
            { img: Words, label: "Words" },
            { img: slide_image_2, label: "Art & Science" },
            { img: slide_image_2, label: "Art & Science" },
          ].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="all flex flex-col items-center gap-2 cursor-pointer group">
                <div className="circleImg w-16 h-16 sm:w-20 sm:h-20 border-2 border-transparent group-hover:border-purple-400 dark:group-hover:border-purple-500 transition-colors duration-300 shadow-md group-hover:shadow-purple-500/30">
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover rounded-full" />
                </div>
                <p className="mb-0 text-center text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {item.label}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AllGamesSwiper;
