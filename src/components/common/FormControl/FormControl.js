import style from './FormControl.module.css'
import React from "react";
import {Field} from "redux-form";

export const ControlForm = ({input, meta, child, ...props}) => {

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
   const {input, meta, child, ...restProps} = props

   return (
      <ControlForm {...props} ><textarea {...input} {...restProps} /> </ControlForm>
   )
}
export const Input = (props) => {
   const {input, meta, child, ...restProps} = props

   return (
      <ControlForm {...props} ><input {...input} {...restProps} /> </ControlForm>
   )
}

export const creatField = (name, component, validate, placeholder, props = {}, text = "") => {
   return <div>
      <Field name={name} component={component} validate={validate}
             placeholder={placeholder} {...props}/> {text}
   </div>
}