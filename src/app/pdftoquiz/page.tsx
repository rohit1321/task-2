// pages/index.js
"use client";

import React, { useState } from 'react';
import "../style/pdftoquiz.css";

const QuizPage = () => {
  const [activeButton, setActiveButton] = useState(20);

  const handleButtonClick = (value) => {
    setActiveButton(value);
  };

  return (
    <div className='background-gradient d-flex justify-content-center align-items-center'>
      <div className="text-center">
        <h1 className="mb-5">PDF To Quiz Generation</h1>
        <div className="card p-4" style={{ maxWidth: '500px', margin: 'auto' }}>
          <div className="card-body position-relative">
            <h5 className="card-title">Quiz Questions</h5>
            <button type="button" className="btn-close position-absolute top-0 end-0" aria-label="Close"></button>
            <p className="mt-4">How many questions would you like generate?</p>
            <div className="d-flex justify-content-around mb-3">
              {[5, 10, 20, 40].map((value) => (
                <button
                  key={value}
                  className={`btn btn-outline-secondary ${activeButton === value ? 'active' : ''}`}
                  onClick={() => handleButtonClick(value)}
                >
                  {value}
                </button>
              ))}
            </div>
            <p>What type of questions would you like generate?</p>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="multipleChoice" />
              <label className="form-check-label" htmlFor="multipleChoice">
                Multiple choice
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="trueFalse" />
              <label className="form-check-label" htmlFor="trueFalse">
                True or False
              </label>
            </div>
            <button className="btn-1 rounded-2 mt-4 w-100" style={{ background: 'linear-gradient(to right, #0000FF, #FF007F)' }}>
              Create ✨
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;