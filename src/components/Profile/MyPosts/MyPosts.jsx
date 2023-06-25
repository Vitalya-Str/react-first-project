import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    const posts = [
        {id: 1, message: 'Hello', likeCounts: '1'},
        {id: 1, message: 'Hello World', likeCounts: '22'},
    ]

    const PostElement = posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>)

    return (
        <div className={s.item}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {PostElement}
            </div>
        </div>
    )
}

export default MyPosts