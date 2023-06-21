import s from './Profile.module.css'
const Profile = ()=>{
    return <div className={s.content}>
        <div> <img  src='https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg'/>
        </div>
        <div>ava + description</div>
        <div> My posts</div>
        <div>New post</div>
        <div className={s.item}>Post 1</div>
        <div className={s.item}>Post 2</div>

    </div>
}

export default Profile