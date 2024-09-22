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
/* import songs from "../../Assets/images/QuizImages/songs.png";
import tech from "../../Assets/images/QuizImages/tech.jpg";
import sports from "../../Assets/images/QuizImages/ultimateSportQuiz.png";
import veg from "../../Assets/images/QuizImages/veg.png";
import fashion from "../../Assets/images/QuizImages/fashion.jpg"; */
import slide_image_2 from "../../Assets/images/QuizImages/scienceQuiz.png";
// import slide_image_6 from "../../Assets/images/QuizImages/movieQuiz.png";

const AllGamesSwiper = () => {
  return (
    <div className="allGamesContainer">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="allGamesSwiper"
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 0,
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
        <SwiperSlide>
          <div className="all">
            <div className="circleImg">
              <img src={quiz} alt="allGames"></img>
            </div>
            <p className="mb-0 text-center fw-bold fs-4">All</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="all">
            <div className="circleImg">
              <img src={Bantan} alt="allGames"></img>
            </div>
            <p className="mb-0 text-center">Action</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="all">
            <div className="circleImg">
              <img src={Racingcar} alt="allGames"></img>
            </div>
            <p className="mb-0 text-center">Racing</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="all">
            <div className="circleImg">
              <img src={Football} alt="allGames"></img>
            </div>
            <p className="mb-0 text-center">Sports</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="all">
            <div className="circleImg">
              <img src={Adventure} alt="allGames"></img>
            </div>
            <p className="mb-0 text-center">Adventure</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="all">
            <div className="circleImg">
              <img src={Football} alt="allGames"></img>
            </div>
            <p className="mb-0 text-center">Puzzle</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="all">
            <div className="circleImg">
              <img src={Casino} alt="allGames"></img>
            </div>
            <p className="mb-0 text-center">Casino</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="all">
            <div className="circleImg">
              <img src={Words} alt="allGames"></img>
            </div>
            <p className="mb-0 text-center">Words</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="all">
            <div className="circleImg">
              <img src={slide_image_2} alt="allGames"></img>
            </div>
            <p className="mb-0 text-center">Art & Science</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="all">
            <div className="circleImg">
              <img src={slide_image_2} alt="allGames"></img>
            </div>
            <p className="mb-0 text-center">Art & Science</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AllGamesSwiper;
