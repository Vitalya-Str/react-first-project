import {connect} from "react-redux";
import {
   setCurrentPage,
   toggleFollowProgress, successUsers, follow, unfollow
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../../Preloader/Preloader";
import {compose} from "redux";
import {getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount, getUsers} from "../../redux/users-selector";


class UsersAPIContainer extends React.Component {
   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)

   }

   setClickPage = (numberPage) => {
      this.props.getUsers(numberPage, this.props.pageSize)
      this.props.setCurrentPage(numberPage)

   }


   render() {
      return <>
         {this.props.isFetching ? <Preloader/> : null}

         <Users totalUsersCount={this.props.totalUsersCount}
                users={this.props.users}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setClickPage={this.setClickPage}
                toggleFollowProgress={this.props.toggleFollowProgress}
                followProgress={this.props.followProgress}

         />
      </>
   }
}

const mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followProgress: state.usersPage.followProgress
   }
}

export default compose(
   connect(mapStateToProps, {
      follow,
      unfollow,
      setCurrentPage,
      toggleFollowProgress,
      getUsers: successUsers
   }),
)(UsersAPIContainer)