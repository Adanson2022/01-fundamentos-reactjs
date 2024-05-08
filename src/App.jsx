import { Post } from './Post';
import { Header } from './components/Header';

import './styles.css';

export function App() {

  return (
    <div>
      <Header />

      <Post
        author="Bruno Mito"
        content="Estudante Engenharia de Computação."
      />

      <Post 
        author="Marcos"
        content="Estudante Engenharia de Computação."
      />

      <Post
        author="Thiago Mendonça"
        content="Estudante Engenharia de Computação."
      />
    </div>

  )
}
