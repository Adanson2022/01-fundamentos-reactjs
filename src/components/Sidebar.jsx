import { PencilLine } from "@phosphor-icons/react";

import styles from './Sidebar.module.css';

export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1563089145-599997674d42?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="" 
            />
        
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://e1.pxfuel.com/desktop-wallpaper/352/697/desktop-wallpaper-naruto-uzumaki-naruto-naruto-pinterest-naruto-profile.jpg" 
                />
                                
                <strong>Ádanson Fernando</strong>
                <span>Engenheiro de Computação</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}