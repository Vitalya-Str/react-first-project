import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import Music from "./components/Music/Music";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {

   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
               <Routes>
                  <Route path='/dialogs'
                         element={<DialogsContainer store={props.store}/>}/>

                  <Route path='/profile'
                         element={<Profile store={props.store}/>}/>

                  <Route path='/news' element={<News/>}/>
                  <Route path='/music' element={<Music/>}/>
                  <Route path='/setting' element={<Setting/>}/>
                  <Route path='/sidebar' element={<Sidebar/>}/>
               </Routes>

            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
