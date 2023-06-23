import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div><img src='https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg'/>
            </div>
            <div className={s.item}>ava + description</div>

            <MyPosts/>

        </div>
    )
}

export default Profile