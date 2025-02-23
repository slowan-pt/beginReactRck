import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post () {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src="/src/assets/avatar3.png" />
                    <div className={styles.authorInfo}>
                        <strong>Sloan Nascimento </strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="11 de FEV às 04:51" dateTime="2025-05-23 04:49:20">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala Galera </p>
                <p>Acabei de subir mais um projeto </p>
                <p> <a href=""> jane.design/doctorcare </a></p>
                <p> 
                    <a href="">#novoprojeto </a> {/*comentário: para dar espaço, ou dá um espaço no <a> ou {' '} */}
                    <a href="">#nlw </a>
                    <a href="">#rocketseat</a>
                </p>
            </div>
        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>  
            <textarea 
                placeholder="Deixe um comentário"
            />  
            <footer>
                <button type="submit">Publicar</button>
            </footer>
        </form>    

        <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
        </div>
        </article>
    )
}