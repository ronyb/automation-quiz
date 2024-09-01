import './App.css';
import React, { useState } from 'react';
import AppState from './js/AppState';
import ClientDetails from './js/ClientDetails';
import ClientDetailsForm from './components/ClientDetailsForm';
import Question from './components/Question';
import Results from './components/Results';
import { questions } from './js/questions';

const App = () => {

  const [currentAppState, setCurrentAppState] = useState(AppState.ClientDetailsForm);
  const [clientDetailsObj, setClientDetailsObj] = useState(new ClientDetails("unknown_name", "unknown_role", "unknown_company", "unknown_email"));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [userScore, setUserScore] = useState(0);

  const handleClientDetailsFormSubmit = (clientDetails) => {
    setClientDetailsObj(clientDetails);
    setCurrentAppState(AppState.Questions);
  };

  const handleSkip = () => {
    setCurrentAppState(AppState.Questions);
  };

  const handleAnswer = (answer) => {
    
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newAnswers);

    if (answer === questions[currentQuestionIndex].answers[0]) {
      setUserScore(userScore + 5);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    else {
      setCurrentAppState(AppState.Results);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      
      if (userAnswers[currentQuestionIndex - 1] === questions[currentQuestionIndex - 1].answers[0]) {
        setUserScore(userScore - 5);
      }

      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleStartOver = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(questions.length).fill(null));
    setUserScore(0);
    setCurrentAppState(AppState.ClientDetailsForm);
    setClientDetailsObj(new ClientDetails("unknown_name", "unknown_role", "unknown_company", "unknown_email"));
  };

  let content;
  if (currentAppState === AppState.ClientDetailsForm) {
    //content = "Client Details Form";
    content = <ClientDetailsForm onSubmit={handleClientDetailsFormSubmit} onSkip={handleSkip} />
  }
  else if (currentAppState === AppState.Questions) {
    
    content = <Question
                question={questions[currentQuestionIndex].question}
                answers={questions[currentQuestionIndex].answers}
                handleAnswer={handleAnswer}
                currentQuestion={currentQuestionIndex}
                totalQuestions={questions.length}
                handlePrevious={handlePrevious}
              />
  }
  else if (currentAppState === AppState.Results) {
    content = <Results questions={questions} answers={userAnswers} score={userScore} clientDetails={clientDetailsObj} onStartOver={handleStartOver} />
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
