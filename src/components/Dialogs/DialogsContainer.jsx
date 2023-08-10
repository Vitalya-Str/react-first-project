import {addMessageCreator, updateMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


// const DialogsContainer = (props) => {
//    const state = props.store.getState().dialogsPage;
//    const onSendMessage = () => {
//       props.store.dispatch(addMessageCreator())
//    };
//    const onNewMassageChange = (newMessageText) => {
//
//       props.store.dispatch(updateMessageCreator(newMessageText))
//    };
//
//    return (
//       <Dialogs onNewMassageChange={onNewMassageChange} onSendMessage={onSendMessage} dialogsPage={state}/>
//    )
// }

const mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onSendMessage: () => {
         dispatch(addMessageCreator())
      },

      onNewMassageChange: (newMessageText) => {
         dispatch(updateMessageCreator(newMessageText))
      },
   }

}

// const AuthRedirectComponent = withAuthRedirect(Dialogs)
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
//
// export default DialogsContainer;

export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect)(Dialogs)