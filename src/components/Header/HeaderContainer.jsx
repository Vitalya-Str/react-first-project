import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getHeader, setAuthUserData} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";


class HeaderContainer extends React.Component {
   componentDidMount() {
      this.props.getHeader()
      // usersAPI.getHeader().then(data => {
      //    if (data.resultCode === 0) {
      //       const {id, email, login} = data.data
      //       this.props.setAuthUserData(id, email, login)
      //    }
      // })
   }

   render() {
      return <Header {...this.props}/>
   }

}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login
})


export default connect(mapStateToProps, {setAuthUserData, getHeader})(HeaderContainer)