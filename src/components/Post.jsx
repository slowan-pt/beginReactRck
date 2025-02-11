import styles from "./Post.module.css";

export function Post () {
    return (
        <article className={styles.Post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/slowan-pt.png" />
                    <div className={styles.authorInfo}>
                        <strong>Sloan Nascimento</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="11 de FEV às 04:51" dateTime="2025-05-23 04:49:20">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala Galera</p>
                <p>Acabei de subir mais um projeto</p>
                <p> <a href=""> jane.design/doctorcare</a></p>
                <p> <a href=""> #novoprojeto #nlw #rocketseat </a></p>

            </div>

        </article>
    )
}