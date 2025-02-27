import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { useState } from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';

/*
Informações NEC (que serão transformadas em objetos)
author: { avatar_url: "", name: "", role: ""}
publisherAt: Date
content: String

*/

export function Post ({author, publishedAt, content}) {
    //Estudar sobre ESTADO no React
    const [comments, setComments] = useState([
        'Post muito bacana, hein?!'
    ])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedAtDateFormatInFull = format(publishedAt, "d 'de' LLLL 'às' HH':'mm'h'", {locale: ptBR})
    const publishedAtDateFormatRelativeNow = formatDistanceToNow(publishedAt, {locale:ptBR, addSuffix: true})
    function handleCreateNewComment (){
        event.preventDefault();

        //Programação Declarativa no React
         
        
        // //Programação Imperativa
        //Para pegar o valor do conteúdo de uma textarea
        const newCommentText = event.target.comment.value
        //Estudar IMUTABILIDADE no React
        setComments([... comments, newCommentText]);
        //Limpar a textarea
        //event.target.comment.value = '';

        //Limpar a textArea - Programação declarativa
        setNewCommentText('');
    }

    function handleNewCommentChange (){
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete) {
        //IMUTABILIDADE -> as variáveis não sofrem mutação, nós criamos uma novo valor (um novo espaço na memória)
        //Filter -> método que percorre todos os comentários e, se retornar TRUE = manter na lista; FALSE = apagar da lista
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment != commentToDelete;
        })
        setComments(commentsWithoutDeleteOne);
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
                        return <p key={line.content} >{line.content}</p>
                    } else if (line.type === 'link'){
                        return <p key={line.content} ><a href='#'>{line.content}</a></p>
                    }
                })}
               
            </div>
        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>  
            
            <textarea
                name='comment' 
                placeholder="Deixe um comentário"
                value={newCommentText}
                onChange={handleNewCommentChange}
            />  
            <footer>
                <button type="submit">Publicar</button>
            </footer>
        </form>    

        <div className={styles.commentList}>
            {comments.map(comment => {
                return (
                    <Comment key={comment} 
                    content={comment} 
                    onDeleteComment={deleteComment}
                    />
                )
            })}
        </div>
        </article>
    )
}