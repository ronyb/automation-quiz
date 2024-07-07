import './App.css';
import React, { useState } from 'react';
import AppState from './AppState';
import ClientDetails from './ClientDetails';
import ClientDetailsForm from './components/ClientDetailsForm';

function App() {

  const [currentState, setCurrentState] = useState(AppState.ClientDetailsForm);
  const [clientDetails, setClientDetails] = useState(new ClientDetails("unknown_name", "unknown_role", "unknown_company", "unknown_email"));

  const handleClientDetailsFormSubmit = (clientDetails) => {
    setClientDetails(clientDetails);
    setCurrentState(AppState.Questions);
  };

  const handleSkip = () => {
    setCurrentState(AppState.Questions);
  };

  let content;
  if (currentState === AppState.ClientDetailsForm) {
    //content = "Client Details Form";
    content = <ClientDetailsForm onSubmit={handleClientDetailsFormSubmit} onSkip={handleSkip} />
  }
  else if (currentState === AppState.Questions) {
    
    content = "Question";

    /*
    content = <Question
                question={questions[currentQuestion].question}
                answers={questions[currentQuestion].answers}
                handleAnswer={handleAnswer}
                currentQuestion={currentQuestion}
                totalQuestions={questions.length}
                handlePrevious={handlePrevious}
              />*/
  }
  else if (currentState === AppState.Results) {
    content = "Results";
    //content = <Results questions={questions} answers={answers} score={score} clientDetails={clientDetails} onStartOver={handleStartOver} />
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
