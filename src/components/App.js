import React, { useState, useEffect } from 'react';
import styles from '../style.scss';
import { postsApi } from '../service/post';


const App = () => {
    const [page, setPage] = useState(1);
    const [ newPosts, setNewPosts ] = useState([]);
    const {data: posts, error, isLoading} = postsApi.useGetAllPostsQuery(page, 5);

    const onClickEvent = (event) => {
        event.preventDefault();
        setPage(page + 1);
    }

    const scrollChange = (e) => {
        e.preventDefault();
        const { scrollHeight, scrollTop  } = e.target.documentElement;
        console.log(scrollHeight - (window.innerHeight + scrollTop));
        if ((scrollHeight - (window.innerHeight + scrollTop)) < 10) {
            setPage(page + 1);
        }
    }

    useEffect(() => {
        if (posts) {
            setNewPosts([...newPosts, ...posts]);
            document.addEventListener('scroll',scrollChange);
        }
        return () => {
            document.removeEventListener('scroll',scrollChange);
        }
    },[posts])

    return (
        <div className={styles.content}>
            <div className={styles.label}>
                {
                    isLoading ? <span>loading...</span>
                        : newPosts.map((post, index) => {
                            return(
                                <div key={index} style={{height: "300px"}}>{post.title}</div>
                            )
                        })
                }
            </div>
            <button className={styles.btn} onClick={onClickEvent}>{page && page}</button>
        </div>
    )
}

export default App