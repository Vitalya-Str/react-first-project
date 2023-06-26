import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import Music from "./components/Music/Music";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = (props) => {
   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
               <Routes>
                  <Route path='/dialogs' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                  <Route path='/profile' element={<Profile posts={props.posts}/>}/>
                  <Route path='/news' element={<News/>}/>
                  <Route path='/music' element={<Music/>}/>
                  <Route path='/setting' element={<Setting/>}/>
               </Routes>

            </div>
         </div>
      </BrowserRouter>);
}

export default App;
