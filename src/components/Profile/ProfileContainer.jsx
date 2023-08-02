import React from "react";
import {connect} from "react-redux";
import {setTotalProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {usersAPI} from "../../api/api";


class ProfileContainer extends React.Component {


   componentDidMount() {

      let userId = this.props.router.params.userId;
      if (!userId) {
         userId = 2;
      }
      usersAPI.getProfile(userId).then(data => {
         this.props.setTotalProfile(data)
      })
   }

   render() {
      return (
         <Profile {...this.props} profile={this.props.profile}/>
      )
   }
}

const mapStateToProps = (state) => ({
   profile: state.profilePage.profile
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

export default connect(mapStateToProps, {setTotalProfile})(withRouter(ProfileContainer))