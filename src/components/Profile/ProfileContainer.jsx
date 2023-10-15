import React from "react";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, updateStatus} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

   refreshComponent() {
      let userId = this.props.router.params.userId;
      if (!userId) {
         userId = this.props.authorizedUserId;
         if (!userId) {
            this.props.history.push("/Login");
         }
      }
      this.props.getProfile(userId)
      this.props.getStatus(userId)
   }

   componentDidMount() {
      this.refreshComponent()
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.router.params.userId != prevProps.router.params.userId) {
         this.refreshComponent()
      }

   }

   render() {

      return (
         <Profile {...this.props}
                  isOwner={!this.props.router.params.userId}
                  profile={this.props.profile}
                  status={this.props.status}
                  updateStatus={this.props.updateStatus}
                  savePhoto={this.props.savePhoto}
         />
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
   connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto}),
   withRouter,
   withAuthRedirect
)(ProfileContainer)