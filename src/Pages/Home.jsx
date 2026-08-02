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
import AllGamesSwiper from "../components/AllGamesSwiper/AllGamesSwiper";
import { Link } from "react-router-dom";
import AllGamesCards from "../components/AllGamesCards/AllGamesCards";
import LatestFeedCards from "../components/LatestFeedCards/LatestFeedCards";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] transition-colors duration-300">
      <section className="relative containerr overflow-hidden">
        <div className="landingImg">
          <img src={landingImg} alt="landingImg" className="w-full" />
          <h1 className="heading animate-fade-in">
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
                  <div className="card-carousel animate-scale-up" style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}>
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
                      <button
                        className="joinNowBtn"
                        data-modal={`modal-quiz-${value.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        Play Now <TiArrowRightThick size={20} />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      <AllGamesSwiper />

      <section className="ongoingGamesConatiner container-max">
        <div className="ongoingHeading flex items-center justify-between">
          <h1 className="mb-0 text-2xl font-extrabold text-slate-800 dark:text-slate-100">Ongoing Games</h1>
          <Link to="/ongoingGames" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline transition-colors">
            View All
          </Link>
        </div>
        <div className="ongoingSlider mt-6">
          <OnGoingGames />
        </div>
      </section>

      <section className="RacingContainer container-max py-8">
        <h1 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100 flex items-center gap-3">
          <img src={Racing} loading="lazy" alt="Racing" className="w-8 h-8" />
          Racing
        </h1>
      </section>

      <section className="allGameContainer container-max">
        <div className="allGameHeading flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">All Games</h1>
          <Link to="/allGames" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline transition-colors">
            View All
          </Link>
        </div>
        <div className="mt-6">
          <AllGamesCards numOfCards={6} />
        </div>
      </section>

      <section className="latestFeedcontainer container-max">
        <div className="latestFeedHeading flex items-center justify-between">
          <h1 className="mb-0 text-2xl font-extrabold text-slate-800 dark:text-slate-100">Latest Feed</h1>
          <Link to="/latestFeed" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline transition-colors">
            View All
          </Link>
        </div>
        <div className="mt-6">
          <LatestFeedCards numOfCards={5} />
        </div>
      </section>
    </div>
  );
}

export default Home;
