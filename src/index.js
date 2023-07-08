
import reportWebVitals from './reportWebVitals';
import './index.css';
import state, {addPosts, subscribe, updatePostChange} from "./redux/state";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";


export const renderEntireTree=(state)=>{
   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(
      <React.StrictMode>
         <App state={state} addPosts={addPosts} updatePostChange={updatePostChange}/>
      </React.StrictMode>
   );
}

renderEntireTree(state);
subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

