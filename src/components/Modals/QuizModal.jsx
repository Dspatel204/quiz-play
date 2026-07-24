import { useEffect, useMemo, useState } from "react";
import Modal from "../../Modal";
import closeIcon from "../../Assets/images/close.png";
import "./Modal.css";

const quizData = {
  "kbc-quiz": {
    title: "KBC Demo Quiz",
    questions: [
      {
        question: "Who is known as the father of computers?",
        options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
        answer: 1,
      },
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "London"],
        answer: 2,
      },
      {
        question: "Which planet is closest to the sun?",
        options: ["Earth", "Venus", "Mercury", "Mars"],
        answer: 2,
      },
    ],
  },
  "science-quiz": {
    title: "Science Demo Quiz",
    questions: [
      {
        question: "What is H2O commonly known as?",
        options: ["Salt", "Water", "Oxygen", "Hydrogen"],
        answer: 1,
      },
      {
        question: "What force keeps us on the ground?",
        options: ["Magnetism", "Friction", "Gravity", "Electricity"],
        answer: 2,
      },
      {
        question: "What gas do plants absorb?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
        answer: 2,
      },
    ],
  },
  "photo-quiz": {
    title: "Photo Demo Quiz",
    questions: [
      {
        question: "What kind of quiz is this card?",
        options: ["History", "Photo", "Science", "Sports"],
        answer: 1,
      },
      {
        question: "What is the main focus of a photo quiz?",
        options: ["Visual clues", "Math problems", "Audio clues", "Science facts"],
        answer: 0,
      },
      {
        question: "Which item belongs to a photo quiz?",
        options: ["Image", "Audio", "Paragraph", "Spreadsheet"],
        answer: 0,
      },
    ],
  },
};

const QuizModal = ({ closeFn = () => null, open = false, quizId = "kbc-quiz" }) => {
  const quiz = quizData[quizId] || quizData["kbc-quiz"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!open) {
      setCurrentIndex(0);
      setSelectedAnswer(null);
      setScore(0);
      setProgress(0);
      setCompleted(false);
    }
  }, [open, quizId]);

  useEffect(() => {
    setProgress(Math.round(((currentIndex + 1) / quiz.questions.length) * 100));
    setSelectedAnswer(null);
  }, [currentIndex, quiz.questions.length]);

  const currentQuestion = quiz.questions[currentIndex];

  const handleSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;
    if (selectedAnswer === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
    if (currentIndex < quiz.questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const summary = useMemo(() => {
    return `${score} / ${quiz.questions.length}`;
  }, [score, quiz.questions.length]);

  if (!open) return null;

  return (
    <Modal open={open}>
      <div className="modal--mask quiz-modal-mask">
        <div className="modal-window quiz-modal-window">
          <div className="close-modal-div" onClick={closeFn}>
            <img src={closeIcon} alt="Close" />
          </div>
          <header className="modal-header-title">
            <h1>{quiz.title}</h1>
          </header>
          <div className="quiz-summary">
            <p>Progress: {progress}%</p>
            <p>Score: {score}</p>
          </div>
          {!completed ? (
            <div className="quiz-content">
              <p className="quiz-question">{currentQuestion.question}</p>
              <div className="quiz-options">
                {currentQuestion.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    type="button"
                    className={`quiz-option ${selectedAnswer === optionIndex ? "selected" : ""}`}
                    onClick={() => handleSelect(optionIndex)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="quiz-controls">
                <button type="button" className="secondary-btn" onClick={handlePrev} disabled={currentIndex === 0}>
                  Previous
                </button>
                <button
                  type="button"
                  className="submit-btn"
                  onClick={handleNext}
                  disabled={selectedAnswer === null}
                >
                  {currentIndex < quiz.questions.length - 1 ? "Next" : "Finish"}
                </button>
              </div>
            </div>
          ) : (
            <div className="quiz-results">
              <h2>Quiz Completed!</h2>
              <p>Your Score: {summary}</p>
              <p>Well done — you completed the demo quiz.</p>
              <button type="button" className="submit-btn" onClick={closeFn}>
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default QuizModal;
