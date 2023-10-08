import style from './FormControl.module.css'
import React from "react";

export const ControlForm = ({input, meta,child, ...props}) => {

   const hasError = meta.touched && meta.error;

   return (
      <div className={hasError ? style.error : ""}>
         <div>
            {props.children}
         </div>
         {hasError && <span> {meta.error} </span>}
      </div>
   )
}
export const Textarea = (props) => {
   const {input, meta,child, ...restProps} = props

   return (
      <ControlForm {...props} ><textarea {...input} {...restProps} /> </ControlForm>
   )
}
export const Input = (props) => {
   const {input, meta,child, ...restProps} = props

   return (
      <ControlForm {...props} ><input {...input} {...restProps} /> </ControlForm>
   )
}