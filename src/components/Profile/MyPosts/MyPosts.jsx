import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts =() => {
        return (<div className={s}>

            <Post message='Hello'/>


            <Post message='Hello World!'/>
        </div>)
    }

export default MyPosts