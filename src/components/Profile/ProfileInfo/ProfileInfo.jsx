import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
   return (
      <div>
         <div>
            <img src='https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg'/>
         </div>
         <div className={s.item}>ava + description</div>
      </div>
   )
}

export default ProfileInfo