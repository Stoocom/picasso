import React, { useState, useEffect } from 'react';
import { postsApi } from '../service/post';
import { useDispatch, useSelector } from 'react-redux';
import { addPosts } from '../slices/postsSlice';
import Post from '../components/Post.js';
import styles from '../style.scss';
import { getAllPosts } from '../slices/postsSelector';

const Main = () => {
    const dispatch = useDispatch();
    const postsStore = useSelector(getAllPosts);
    const [page, setPage] = useState(1);
    const {data: posts, error, isLoading} = postsApi.useGetAllPostsQuery({ page, limit: 20 });

    const scrollChange = (e) => {
        e.preventDefault();
        const { scrollHeight, scrollTop  } = e.target.documentElement;
        if ((scrollHeight - (window.innerHeight + scrollTop)) < 10) {
            setPage(page + 1);
        }
    }

    useEffect(() => {
        if (posts) {
            //setNewPosts([...newPosts, ...posts]);
            dispatch(addPosts(posts));
            document.addEventListener('scroll',scrollChange);
        }
        return () => {
            document.removeEventListener('scroll',scrollChange);
        }
    },[posts])
    if (error) {
        return <div>Error of getting data, sorry.</div>
    }
    return (
        <div className={styles.content}>
            <div className={styles.label}>
            <h3 className={styles.left}>Posts</h3>
                {
                    isLoading ? <span>loading...</span>
                        : postsStore.map((post, index) => {

                            return (
                                <Post key={post.id} id={post.id} post={post}/>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default Main