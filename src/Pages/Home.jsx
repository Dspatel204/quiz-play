import React from "react";
import "../Assets/styles/Home.css";
import Racing from "../Assets/images/finish_2164730 3.png"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import { TiArrowRightThick } from "react-icons/ti";

import landingCarouselData from "../Assets/utils/landingCarouselData";

import OnGoingGames from "../components/OnGoingGamesSwiper/OnGoingGamesSwiper";

import landingImg from "../Assets/images/landingPage.png";
// import slide_image_2 from "../Assets/images/QuizImages/scienceQuiz.png";
// import slide_image_6 from "../Assets/images/QuizImages/movieQuiz.png";
import AllGamesSwiper from "../components/AllGamesSwiper/AllGamesSwiper";
import { Link } from "react-router-dom";
import AllGamesCards from "../components/AllGamesCards/AllGamesCards";
import LatestFeedCards from "../components/LatestFeedCards/LatestFeedCards";

function Home() {
  return (
    <div className="containerr">
      <div className=" landingImg">
        <img src={landingImg} alt="landingImg" />
        <h1 className="heading">
          Play your way and experience of <br /> trending games
        </h1>
      </div>
      <div className="swiper-parent">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          // space-between="30"

          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container"
          breakpoints={{
            0: {
              spaceBetween: -100,
            },
            320: {
              slidesPerView: 2,
              spaceBetween: -50,
            },
            375: {
              spaceBetween: -20,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: -80,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: -50,
            },
            768: {
              spaceBetween: 80,
            },
            1024: {
              spaceBetween: 120,
            },
            1250: {
              spaceBetween: 180,
            },
          }}
        >
          {landingCarouselData.map((value, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="card-carousel">
                  <div className="card-img">
                    <img
                      className="img-fluid"
                      src={value.image}
                      alt="slide_image"
                    />
                  </div>
                  <div className="game-details">
                    <div className="gameTitle">
                      <h3>{value.title} </h3>
                      <span className="spanBtn">{value.btn}</span>
                    </div>
                    <p>{value.detail}</p>
                    <button className="joinNowBtn">
                      Play Now <TiArrowRightThick size={20} />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <AllGamesSwiper />
      <div className=" ongoingGamesConatiner">
        <div className="ongoingHeading">
          <h1 className="mb-0">Ongoing Games</h1>
          <Link to="/ongoingGames">
            <p className="mb-0">View All</p>
          </Link>
        </div>
        <div className="ongoingSlider">
          <OnGoingGames />
        </div>
      </div>
<div className="RacingContainer">
          <h1><img src={Racing} loading="lazy"/>Racing</h1>
</div>
      <div className="allGameContainer">
        <div className="allGameHeading">
          <h1>All Games</h1>
          <Link to="/allGames">
            <p>View All</p>
          </Link>
        </div>
        <AllGamesCards numOfCards={6} />
      </div>

      <div className="latestFeedcontainer">
        <div className="latestFeedHeading">
          <h1 className="mb-0"> Latest Feed</h1>
          <Link to="/latestFeed">
            {" "}
            <p className="mb-0">View All</p>
          </Link>
        </div>
        <LatestFeedCards numOfCards={5} />
      </div>
    </div>
  );
}

export default Home;
