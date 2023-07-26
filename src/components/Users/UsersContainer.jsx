import {connect} from "react-redux";
import Users from './Users'
import {followAC, setNumberPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";


const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
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
      setCurrentPage: (number)=>{
         dispatch(setNumberPageAC(number))
      },
      setTotalUsersCount: (totalCount)=>{
         dispatch(setTotalUsersCountAC(totalCount))
      }

   }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;