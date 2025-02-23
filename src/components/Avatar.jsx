import styles from './Avatar.module.css';

export function Avatar ({hasBorder = true, src}) {
    return (
        //<img className={styles.avatar} src={props.src}

        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src} 
        />
    );
}  