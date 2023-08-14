import React from "react";
import {setStatus} from "../../../redux/profile-reducer";

export class ProfileStatus extends React.Component {
   state = {
      editState: false,
      status: this.props.status,
   }

   activeEditState = () => {
      this.setState({
         editState: true,
      })
   }

   deActiveEditState = () => {
      this.setState({
         editState: false,
      })
      this.props.updateStatus(this.state.status)
   }

   onSetChange = (e) => {
      this.setState({
         status: e.currentTarget.value
      })

   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status
         })
      }
   }

   render() {
      return <>
         {!this.state.editState &&
            <div>
               <span onDoubleClick={this.activeEditState}>{this.props.status || '--------'}</span>
            </div>
         }
         {this.state.editState &&
            <div>
               <input onChange={this.onSetChange} autoFocus={true} onBlur={this.deActiveEditState}
                      value={this.state.status}/>
            </div>
         }
      </>

   }
}