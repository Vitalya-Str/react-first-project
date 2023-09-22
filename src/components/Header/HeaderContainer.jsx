import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getHeader, logout, setAuthUserData} from "../../redux/auth-reducer";
import {compose} from "redux";


class HeaderContainer extends React.Component {
   componentDidMount() {
      this.props.getHeader()
   }

   render() {
      return <Header {...this.props}/>
   }

}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login
})


// export default connect(mapStateToProps, {setAuthUserData, getHeader})(HeaderContainer)

export default compose(
   connect(mapStateToProps, {setAuthUserData, getHeader, logout}),
)(HeaderContainer)