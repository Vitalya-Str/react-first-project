import {connect} from "react-redux";
import {
   follow,
   setIsFetching,
   setCurrentPage,
   setTotalUsersCount,
   setUsers,
   unfollow, toggleFollowProgress
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../../Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersAPIContainer extends React.Component {
   componentDidMount() {
      this.props.setIsFetching(true)
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
         this.props.setIsFetching(false)
         this.props.setUsers(data.items)
         this.props.setTotalUsersCount(data.totalCount)
      })
   }

   setClickPage = (numberPage) => {
      this.props.setCurrentPage(numberPage)
      this.props.setIsFetching(true)
      usersAPI.getUsers(numberPage, this.props.pageSize).then(data => {
         this.props.setIsFetching(false)
         this.props.setUsers(data.items)
      })
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
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followProgress: state.usersPage.followProgress
   }
}

// const mapDispatchToProps = (dispatch) => {
//    return {
//       follow: (userId) => {
//          dispatch(followAC(userId))
//       },
//       unfollow: (userId) => {
//          dispatch(unfollowAC(userId))
//       },
//       setUsers: (users) => {
//          dispatch(setUsersAC(users))
//       },
//       setCurrentPage: (number) => {
//          dispatch(setCurrentPageAC(number))
//       },
//       setTotalUsersCount: (totalCount) => {
//          dispatch(setTotalUsersCountAC(totalCount))
//       },
//       setIsFetching: (isFetching) => {
//          dispatch(setIsFetchingAC(isFetching))
//       }
//
//    }
// }


export default connect(mapStateToProps, {
   follow,
   unfollow,
   setUsers,
   setCurrentPage,
   setTotalUsersCount,
   setIsFetching,
   toggleFollowProgress
})(UsersAPIContainer)