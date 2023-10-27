import { Link, useParams } from 'react-router-dom';
import styles from './onePost.scss';
import { postsApi } from '../service/post';
import IconArrowLeft from '../static/icons/IconArrowLeft';

const OnePost = () => {
    const { id } = useParams();
    const {data: post, error, isLoading} = postsApi.useGetPostByIdQuery({ id });
  
    return post 
        ? <div className={styles.wrapper}>
            <h1>Post title: {post.title}</h1>
            <h2>Description</h2>
            <p style={{ fontSize: "20px"}}>{post.body}</p>
            <Link to={"/"} className={styles.btn}>
                <IconArrowLeft />
            </Link>
        </div> 
        : <div className={styles.wrapper}>
            <h2>Loading...</h2>
        </div>
}

export default OnePost;