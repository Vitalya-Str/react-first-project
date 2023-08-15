import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {

   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field name={'Login'} component={'input'} placeholder={'Login'}/>
         </div>
         <div>
            <Field name={'Password'} component={'input'} placeholder={'password'}/>
         </div>
         <div>
            <Field name={'rememberMe'} component={'input'} type={'checkbox'}/> remember me
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