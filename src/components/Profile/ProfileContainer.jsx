import React from "react";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {
   componentDidMount() {

      let userId = this.props.router.params.userId;
      if (!userId) {
         userId = 2;
      }
      this.props.getProfile(userId)
      // usersAPI.getProfile(userId).then(response => {
      //    this.props.setTotalProfile(response.data)
      // })
   }

   render() {
      
      if(!this.props.isAuth) return <Navigate to='/login'/>

      return (
         <Profile {...this.props} profile={this.props.profile}/>
      )
   }
}

const mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
})

function withRouter(Component) {
   function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
         <Component
            {...props}
            router={{location, navigate, params}}
         />
      );
   }

   return ComponentWithRouterProp;
}

const AuthRedirectComponent =  withAuthRedirect(ProfileContainer)
export default connect(mapStateToProps, { getProfile})(withRouter(AuthRedirectComponent))