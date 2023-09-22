import {Field, reduxForm} from "redux-form";
import {Input} from "../FormControl/FormControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import style from "./../FormControl/FormControl.module.css"


const maxLength30 = maxLengthCreator(30)
const LoginForm = (props) => {

   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field name={'email'} component={Input} validate={[required, maxLength30]} placeholder={'Email'}/>
         </div>
         <div>
            <Field name={'password'} component={Input} validate={[required, maxLength30]} type={'password'}
                   placeholder={'password'}/>
         </div>
         <div>
            <Field name={'rememberMe'} component={Input} type={'checkbox'}/> remember me
         </div>
         {
            props.error && <div className={style.commonError}> {props.error} </div>
         }
         <div>
            <button>Login on</button>
         </div>
      </form>

   )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
   const onSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe)

   }
   if (props.isAuth) {
      return <Navigate to={'/profile'}/>
   }

   return (
      <div>
         <h1>Login on</h1>
         <LoginReduxForm onSubmit={onSubmit}/>
      </div>
   )
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)