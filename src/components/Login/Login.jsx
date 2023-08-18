import {Field, reduxForm} from "redux-form";
import {Input} from "../FormControl/FormControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const maxLength15 = maxLengthCreator(15)
const LoginForm = (props) => {

   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field name={'Login'} component={Input} validate={[required, maxLength15]} placeholder={'Login'}/>
         </div>
         <div>
            <Field name={'Password'} component={Input} validate={[required, maxLength15]} placeholder={'password'}/>
         </div>
         <div>
            <Field name={'rememberMe'} component={Input} type={'checkbox'}/> remember me
         </div>
         <div>
            <button>Login on</button>
         </div>
      </form>

   )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
   const onSubmit = (formData) => {
      console.log(formData)
   }

   return (
      <div>
         <h1>Login on</h1>
         <LoginReduxForm onSubmit={onSubmit}/>
      </div>
   )
}

export default Login