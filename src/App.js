import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import Music from "./components/Music/Music";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = (props) => {
   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header/>
            <Navbar friends={props.state.sidebar.friends}/>
            <div className='app-wrapper-content'>
               <Routes>
                  <Route path='/dialogs'
                         element={<Dialogs store={props.store} />}/>

                  <Route path='/profile'
                         element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>

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
