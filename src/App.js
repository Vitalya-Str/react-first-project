import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import Music from "./components/Music/Music";
import Sidebar from "./components/Sidebar/Sidebar";
import UsersContainer from "./components/Users/UsersContainer"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component, lazy, Suspense} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./redux/app-reducer";
import Preloader from "./Preloader/Preloader";

// const DialogsContainer = lazy(() => delayForDemo(import('./components/Dialogs/DialogsContainer')));
// const ProfileContainer = lazy(() => delayForDemo(import('./components/Profile/ProfileContainer')));

// function delayForDemo(promise) {
//    return new Promise(resolve => {
//       setTimeout(resolve, 2000);
//    }).then(() => promise);
//
// }
class App extends Component {
   componentDidMount() {
      this.props.initializedApp()
   }

   render() {

      if (!this.props.initialized) {
         return <Preloader/>
      }

      return (
         <BrowserRouter>
            <div className='app-wrapper'>
               <HeaderContainer/>
               <Navbar/>
               <div className='app-wrapper-content'>

                  <Routes>
                     <Route path='/dialogs'
                            element={<DialogsContainer/>}/>
                     {/*<Route path='/dialogs'*/}
                     {/*       element={<Suspense fallback={<Preloader/>}>*/}
                     {/*          <DialogsContainer/>*/}
                     {/*       </Suspense>}/>*/}

                     <Route path='/profile/:userId?'
                            element={<ProfileContainer/>}/>
                     {/*<Route path='/profile/:userId?'*/}
                     {/*       element={<Suspense fallback={<h1>loading....</h1>}>*/}
                     {/*          <ProfileContainer/>*/}
                     {/*       </Suspense>}/>*/}
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

const mapStateToProps = (state) => ({
   initialized: state.app.initialized,
})

export default compose(connect(mapStateToProps, {initializedApp}))(App);
