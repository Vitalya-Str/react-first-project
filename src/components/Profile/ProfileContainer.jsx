import React from "react";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
   componentDidMount() {

      let userId = this.props.router.params.userId;
      if (!userId) {
         userId = this.props.authorizedUserId;
      }
      this.props.getProfile(userId)
      // usersAPI.getProfile(userId).then(response => {
      //    this.props.setTotalProfile(response.data)
      // })
      this.props.getStatus(userId)

   }

   render() {

      return (
         <Profile {...this.props}
                  profile={this.props.profile}
                  status={this.props.status}
                  updateStatus={this.props.updateStatus}/>
      )
   }
}

const mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   authorizedUserId: state.auth.userId,
   isAuth: state.auth.isAuth,
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

// const AuthRedirectComponent =  withAuthRedirect(ProfileContainer)
// export default connect(mapStateToProps, { getProfile})(withRouter(AuthRedirectComponent))


export default compose(
   connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
   withRouter,
   withAuthRedirect
)(ProfileContainer)