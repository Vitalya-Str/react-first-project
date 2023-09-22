import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import Music from "./components/Music/Music";
import Sidebar from "./components/Sidebar/Sidebar";
import UsersContainer from  "./components/Users/UsersContainer"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";


class App extends Component {
   render() {

      return (
         <BrowserRouter>
            <div className='app-wrapper'>
               <HeaderContainer/>
               <Navbar/>
               <div className='app-wrapper-content'>
                  <Routes>
                     <Route path='/dialogs'
                            element={<DialogsContainer/>}/>

                     <Route path='/profile/:userId?'
                            element={<ProfileContainer/>}/>
                     <Route path='/login'
                            element={<Login/>}/>
                     <Route path='/users/'
                            element={<UsersContainer/>}/>
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
}

export default App;
