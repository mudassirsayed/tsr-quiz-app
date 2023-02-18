import React, { useState } from "react";

function Home({ data }) {
  const [questions, setQuestions] = useState(data);
  return (
    <>
      <section id="quiz-main" className="quiz-main section-bg">
        <div className="container">
          <div className="section-title">
            <h2>TSR QUIZ</h2>
            <div className="underline"></div>
            <p>Please attempt all the questions and submit it.</p>
          </div>
          {questions?.questions &&
            questions?.questions?.map((question) => {
              return (
                <>
                  <div className="row d-flex">
                    <div className="col-lg-12">
                      <div className="que d-flex align-items-start mb-3">
                        <div className="que-info" key={question.question}>
                          <h4 className="mb-3">
                            {question.id}. {question.question}
                          </h4>
                          {question.options.map((option) => (
                            <>
                              <div className="d-flex flex-column gap-3">
                                <div
                                  className="question d-flex gap-3"
                                  key={option.id}
                                >
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name={question.question}
                                    value={option.id}
                                    id={option.id}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={option.id}
                                  >
                                    {option.text}
                                  </label>
                                </div>
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          <div className="d-flex justify-content-center align-items-center mt-4">
            <button type="button" className="btn btn-primary">
              SUBMIT
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
