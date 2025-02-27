import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { useState } from 'react';

/*
Informações NEC (que serão transformadas em objetos)
author: { avatar_url: "", name: "", role: ""}
publisherAt: Date
content: String

*/

export function Post ({author, publishedAt, content}) {
    //Estudar sobre ESTADO no React
    const [comments, setComments] = useState([
        1,
        2,
    ])

    const publishedAtDateFormatInFull = format(publishedAt, "d 'de' LLLL 'às' HH':'mm'h'", {locale: ptBR})
    const publishedAtDateFormatRelativeNow = formatDistanceToNow(publishedAt, {locale:ptBR, addSuffix: true})
    function handleCreateNewComment (){
        event.preventDefault();
        //Esstudar IMUTABILIDADE no React
        setComments([... comments, comments.length + 1]);
    }
/* 
Uma das fomas de manipular datas é com o INTL, mas dá pra usar o "npm i date-fns"
const publishedAtDateFormatInFull = new Intl.DateTimeFormat 
    ("pt-BR", {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
}).format(publishedAt);
*/
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedAtDateFormatInFull} dateTime={publishedAt.toISOString()}>
                   {publishedAtDateFormatRelativeNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph'){
                        return <p>{line.content}</p>
                    } else if (line.type === 'link'){
                        return <p><a href='#'>{line.content}</a></p>
                    }
                })}
               
            </div>
        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>  
            <textarea 
                placeholder="Deixe um comentário"
            />  
            <footer>
                <button type="submit">Publicar</button>
            </footer>
        </form>    

        <div className={styles.commentList}>
            {comments.map(comment => {
                return <Comment />
            })}
        </div>
        </article>
    )
}