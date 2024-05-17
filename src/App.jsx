import { Header } from './components/Header';
import { Post } from './Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Ádanson Fernando"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem officiis mollitia maxime, atque dolorum vero odio ut magnam beatae in minima quasi incidunt facere optio, minus similique laudantium eligendi nobis."
          />
          <Post
            author="Bruno Lima"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem officiis mollitia maxime, atque dolorum vero odio ut magnam beatae in minima quasi incidunt facere optio, minus similique laudantium eligendi nobis."
          />
        </main>
      </div>
    </div>

  )
}
