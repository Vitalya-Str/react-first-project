import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

   const PostElement = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>)

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