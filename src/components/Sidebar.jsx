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
                <img className={styles.avatar} src="https://media.licdn.com/dms/image/D4D35AQGR5NSLCX3qtw/profile-framedphoto-shrink_800_800/0/1676822270968?e=1716930000&v=beta&t=JT1I6eztv9LmOC9ostK-Z7pyazs_McGRwlRpzh76ocY" 
                />
                                
                <strong>Ádanson Fernando</strong>
                <span>Engenheiro de Computação</span>
            </div>

            <footer>
                <a href='#'>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}