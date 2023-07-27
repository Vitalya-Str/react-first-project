import {connect} from "react-redux";
import {
   followAC,
   setIsFetchingAC,
   setNumberPageAC,
   setTotalUsersCountAC,
   setUsersAC,
   unfollowAC
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../../Preloader/Preloader";


class UsersAPIContainer extends React.Component {
   componentDidMount() {
      this.props.setIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
         this.props.setIsFetching(false)
         this.props.setUsers(response.data.items)
         this.props.setTotalUsersCount(response.data.totalCount)
      })
   }

   setClickPage = (numberPage) => {
      this.props.setCurrentPage(numberPage)
      this.props.setIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`).then(response => {
         this.props.setIsFetching(false)
         this.props.setUsers(response.data.items)
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
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followAC(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users))
      },
      setCurrentPage: (number) => {
         dispatch(setNumberPageAC(number))
      },
      setTotalUsersCount: (totalCount) => {
         dispatch(setTotalUsersCountAC(totalCount))
      },
      setIsFetching: (isFetching) => {
         dispatch(setIsFetchingAC(isFetching))
      }

   }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)