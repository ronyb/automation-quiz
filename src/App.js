import './App.css';
import React, { useState } from 'react';
import AppState from './js/AppState';
import ClientDetails from './js/ClientDetails';
import ClientDetailsForm from './components/ClientDetailsForm';
import Question from './components/Question';
import Results from './components/Results';
import { questions } from './js/questions';

const App = () => {

  const [currentState, setCurrentState] = useState(AppState.ClientDetailsForm);
  const [clientDetails, setClientDetails] = useState(new ClientDetails("unknown_name", "unknown_role", "unknown_company", "unknown_email"));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);

  const handleClientDetailsFormSubmit = (clientDetails) => {
    setClientDetails(clientDetails);
    setCurrentState(AppState.Questions);
  };

  const handleSkip = () => {
    setCurrentState(AppState.Questions);
  };

  const handleAnswer = (answer) => {
    
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (answer === questions[currentQuestion].answers[0]) {
      setScore(score + 5);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
    else {
      setCurrentState(AppState.Results);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      
      if (answers[currentQuestion - 1] === questions[currentQuestion - 1].answers[0]) {
        setScore(score - 5);
      }

      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleStartOver = () => {
    setCurrentQuestion(0);
    setAnswers(Array(questions.length).fill(null));
    setScore(0);
    setCurrentState(AppState.ClientDetailsForm);
    setClientDetails(new ClientDetails("unknown_name", "unknown_role", "unknown_company", "unknown_email"));
  };

  let content;
  if (currentState === AppState.ClientDetailsForm) {
    //content = "Client Details Form";
    content = <ClientDetailsForm onSubmit={handleClientDetailsFormSubmit} onSkip={handleSkip} />
  }
  else if (currentState === AppState.Questions) {
    
    content = <Question
                question={questions[currentQuestion].question}
                answers={questions[currentQuestion].answers}
                handleAnswer={handleAnswer}
                currentQuestion={currentQuestion}
                totalQuestions={questions.length}
                handlePrevious={handlePrevious}
              />
  }
  else if (currentState === AppState.Results) {
    content = <Results questions={questions} answers={answers} score={score} clientDetails={clientDetails} onStartOver={handleStartOver} />
  }

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light p-4 rtl">
      <div className="card w-100" style={{ maxWidth: '600px' }}>
        <div className="card-body text-center">
          <img src={`${process.env.PUBLIC_URL}/matrix_topq.png`} alt="Matrix Top-Q" className="logo" /><br/><br/>
          <h1 className="mb-4 h2">מחשבון בגרות פרויקט אוטומציה</h1>
          
          {content}

        </div>
      </div>
    </div>
  );
}

export default App;
