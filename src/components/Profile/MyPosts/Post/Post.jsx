import s from './Post.module.css'

const Post = (props) => {
    return <div className={s}>
        <img className={s.img} src='https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676296296137285106.png'/>
        <div className={s.item}> {props.message} </div>

    </div>
}

export default Post