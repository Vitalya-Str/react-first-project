import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.item}>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Input</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hello'/>
                <Post message='Hello World!'/>
            </div>
        </div>
    )
}

export default MyPosts