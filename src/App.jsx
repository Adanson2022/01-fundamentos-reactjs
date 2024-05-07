import { Post } from './Post';

import './styles.css';

export function App() {

  return (
    <div>
      <Post
        author="Bruno Mito"
        content="Brunão do Angelim, comedor de KitKat."
      />

      <Post 
        author="Marcos Hackeado"
        content="Engenheiro de Computação que conseguiu ter seu instagram hackeado."
      />

      <Post
        author="Thiago Moedas"
        content="Homem que Dorme."
      />
    </div>

  )
}
