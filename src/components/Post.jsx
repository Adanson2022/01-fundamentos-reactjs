import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}></div>
                <img className={styles.avatar} src="http://m.gettywallpapers.com/wp-content/uploads/2023/05/Pfp-of-Naruto.jpg" />
            </header>       
        </article>  
    )
}