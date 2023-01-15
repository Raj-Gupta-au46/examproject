import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Quizcomponent from './QuizComponent/Quizcomponent';
//  import Login from './QuizComponent/Login';
// import Register from './QuizComponent/Register';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Register/> */}
        {/* <Login/> */}
   <Quizcomponent/> 
  </React.StrictMode>
);



