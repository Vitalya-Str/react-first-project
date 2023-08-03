import s from './ProfileInfo.module.css'
import Preloader from "../../../Preloader/Preloader";
import ava from "../../../images/userPhoto.png"


const ProfileInfo = (props) => {
   if(!props.profile){
      return <Preloader/>
   }
   return (
      <div>
         <div>
            <img src='https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg'/>
         </div>
         <img src={props.profile.photos.large ? props.profile.photos.large: ava } width={200} height={200} />
         <div className={s.item}>ava + description</div>
      </div>
   )
}

export default ProfileInfo