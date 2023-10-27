import { Link } from "react-router-dom";
import styles from '../style.scss';
import IconArrowRight from "../static/icons/IconArrowRight";

const Post = ({id, post}) => {
    return (<div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
    <div className={styles.post}>{post.id + " "}{post.title}</div>
        <Link to={`/post/${post.id}`} className={styles.btn}>
            <IconArrowRight/>
        </Link>
</div>)
}

export default Post;