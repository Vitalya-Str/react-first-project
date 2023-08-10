import React from "react";

export class ProfileStatus extends React.Component {
   state = {
      editState: false,
   }

   activeEditState = () => {
      this.setState({
         editState: true,
      })
   }

   deActiveEditState = ()=>{
      this.setState({
         editState: false,
      })
   }
   render() {
      return <>
         {!this.state.editState &&
            <div>
               <span onDoubleClick={this.activeEditState}>{this.props.status}</span>
            </div>
         }
         {this.state.editState &&
            <div>
               <input autoFocus={true} onBlur={this.deActiveEditState} value={this.props.status}/>
            </div>
         }
      </>

   }
}