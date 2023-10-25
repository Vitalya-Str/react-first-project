import {reduxForm} from "redux-form";
import {creatField, Input} from "../common/FormControl/FormControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import style from "../common/FormControl/FormControl.module.css"


const LoginForm = ({handleSubmit, error, captchaUrl}) => {

   return (
      <form onSubmit={handleSubmit}>
         {creatField('email', Input, [required], 'Email')}
         {creatField('password', Input, [required], 'password', {type: 'password'})}
         {creatField('rememberMe', Input, [], null, {type: 'checkbox'}, 'remember me')}

         {error && <div className={style.commonError}> {error} </div>}

         {captchaUrl && <div><img src={captchaUrl}/></div>}

         {captchaUrl && <div>{creatField('captcha', Input, [required], "Symbols in input", {}, )}</div>}


         <div>
            <button>Login on</button>
         </div>
      </form>

   )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
   const onSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
   }
   if (props.isAuth) {
      return <Navigate to={'/profile'}/>
   }

   return (
      <div>
         <h1>Login on</h1>
         <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
      </div>
   )
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps, {login})(Login)