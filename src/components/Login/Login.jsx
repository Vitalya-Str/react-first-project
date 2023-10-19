import {reduxForm} from "redux-form";
import {creatField, Input} from "../common/FormControl/FormControl";
import { required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import style from "../common/FormControl/FormControl.module.css"


const LoginForm = (props) => {

   return (
      <form onSubmit={props.handleSubmit}>
         {creatField('email', Input, [required], 'Email')}
         {creatField('password', Input, [required],'password', {type: 'password'})}
         {creatField('rememberMe', Input, [], null, {type: 'checkbox'}, 'remember me')}
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