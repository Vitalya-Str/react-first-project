import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
   {id: 1, message: 'Hello', likeCounts: '1'},
   {id: 1, message: 'Hello World', likeCounts: '22'},
]

const dialogs = [
   {id: '1', name: 'Kama'},
   {id: '2', name: 'Julia'},
   {id: '3', name: 'Artem'},
   {id: '4', name: 'Vitalya'}
]

const messages = [
   {message: 'Hello Wold!',},
   {message: 'How old are you?',},
   {message: 'What is your name?',},
   {message: 'YO!',}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <App posts={posts} dialogs={dialogs} messages={messages}/>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

