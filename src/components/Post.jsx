import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}></div>
                    <img className={styles.avatar} src="http://m.gettywallpapers.com/wp-content/uploads/2023/05/Pfp-of-Naruto.jpg" />
                    <div className={styles.authorInfo}>
                        <strong> Ádanson Fernando </strong>
                        <spam> Engenheiro de Computação </spam>
                    </div>

                    <time title="24 de junho às 16:36h" dateTime="24-06-2024 16:36"> Publicado a 1h </time>
            </header>

            <div className={styles.content}>
                <p> Fala galeraa 👋</p>
                <p> Acabei de subir mais um projeto no meu portifa. É um projeto que eu fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.</p>
                <p> 👉{' '}<a href="">jane.design/doctorcare</a> </p>
                <p> 
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>       
        </article>  
    )
}