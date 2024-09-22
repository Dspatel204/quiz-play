import React from "react";
import Modal from "../../Modal";
// import { Modal } from "react-bootstrap";
import "./EntryModal.css";
import closeIcon from "../../Assets/images/close.png";
import gameImg from "../../Assets/images/QuizImages/scienceQuiz.png";
import { LuUsers, LuClock3 } from "react-icons/lu";
import { LiaMedalSolid, LiaTrophySolid } from "react-icons/lia";

const EntryModal = ({ closeFn = () => null, open = false }) => {
  return (
    <Modal open={open}>
      <div className=" modal--mask">
        <div className="entryModal" style={{position:"relative"}}>
        <div className="close-modal-icon" style={{position:"absolute", right:"20px", top:"10px"}} onClick={closeFn}>
            <img src={closeIcon} alt="" style={{cursor:"pointer"}} width="35px" />
          </div>
          <div className="entryContent">
            <div className="d-flex justify-content-center">
              <img className="gameimg" src={gameImg} alt="" width="170px" />
            </div>
            <div className="entry-content">
              <div className="d-flex justify-content-center align-items-center top-div">
                <LuUsers size={25} />
                <span>2</span>
              </div>
              <div className="d-flex mt-4 justify-content-between">
                <div className="entry-left">
                  <p className="prize-text gray">Prize Pool</p>
                  <p className="prize-number">100000</p>
                </div>
                <div className="entry-center elements-center">
                  <div className="liveBtn">
                    <span>
                      <LuClock3 />
                    </span>
                    <span className="ms-1">Live</span>
                  </div>
                  <p className="gray">Ends On 11:33 PM</p>
                </div>
                <div className="entry-right elements-center">
                  <p className="gray ">Entry Fee</p>
                  <button>₹ 10 </button>
                </div>
              </div>
              <div className="quiz-slot">
                <p className="quiz-slot-text mb-0">Quiz Slot/Entries</p>
                <input
                  type="range"
                  min="1"
                  max="1000"
                  value="0"
                  className="slider"
                  id="myRange"
                  readOnly
                />
                <p className="slot-filled">0 Filled of 0</p>
              </div>
              <div className="medalsTrophyMain">
                <p className="medals fs-5">
                  <LiaMedalSolid size={30} />
                  ₹100
                </p>
                <p className="trophy fs-5">
                  <LiaTrophySolid size={30} />
                  75%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EntryModal;
