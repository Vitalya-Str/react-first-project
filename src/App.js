import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import Music from "./components/Music/Music";
import Sidebar from "./components/Sidebar/Sidebar";
import UsersContainer from  "./components/Users/UsersContainer"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {

   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
               <Routes>
                  <Route path='/dialogs'
                         element={<DialogsContainer />}/>

                  <Route path='/profile/'
                         element={<ProfileContainer />}/>
                  <Route path='/users'
                         element={<UsersContainer />}/>
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
