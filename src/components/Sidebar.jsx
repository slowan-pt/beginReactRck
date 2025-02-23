import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import {PencilLine} from '@phosphor-icons/react';

export function Sidebar() {

    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />
        
            <div className={styles.profile}>
                <Avatar  hasBorder src='/src/assets/avatar.jpg'/>
                <strong>Usuário: Sloan Nascimento</strong>
                <span>Cargo: Web Developer</span>
            </div>

            <footer>
               
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        
        </aside>
    );
}