// pages/index.js
import React from 'react';
import "../style/quiz-generate.css";

const QuizPage = () => {
  const questions = [
    {
      id: 1,
      question: "What did Lencho hope for after the hailstorm?",
      options: [
        "A) Money from God",
        "B) A new tractor",
        "C) A good harvest",
        "D) Rainy weather"
      ]
    },
    {
      id: 2,
      question: "Lencho compared raindrops to new coins because he believed they would bring wealth.",
      options: [
        "A) True",
        "B) False"
      ]
    }
  ];

  return (

    <div className=" background-gradient">
      <div className="container question-section">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h1 className="flex-grow-1 text-center">Quiz Generated</h1>
          <button className="btn1 rounded-2 px-5 py-2">Download</button>
        </div>

        {questions.map((q) => (
          <div className="card mb-3" key={q.id}>
            <div className="card-body">
              <h5 className="card-title">{q.id}. {q.question}</h5>
              <form>
                {q.options.map((option, index) => (
                  <div className="form-check" key={index}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`question${q.id}`}
                      id={`option${q.id}-${index}`}
                    />
                    <label className="form-check-label" htmlFor={`option${q.id}-${index}`}>
                      {option}
                    </label>
                  </div>
                ))}
              </form>
              <div className="mt-3 d-flex justify-content-between align-items-center">
                <div>
                  <button className="btn btn-link p-0 me-2">
                    <img src="/quiz-icons/like icon.svg" alt="Thumbs Up" />
                  </button>
                  <button className="btn btn-link p-0 me-2">
                    <img src="/quiz-icons/dislike icon.svg" alt="Thumbs Down" />
                  </button>
                  <span>Help us improve by rating questions!</span>
                </div>
                <div>
                  <button className="btn btn-link p-0 me-2">
                    <img src="/quiz-icons/search icon.svg" alt="Search" />
                  </button>
                  <button className="btn btn-link p-0 me-2">
                    <img src="/quiz-icons/pen icon.svg" alt="Edit" />
                  </button>
                  <button className="btn btn-link p-0">
                    <img src="/quiz-icons/delete icon.svg" alt="Delete" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>

  );
};

export default QuizPage;