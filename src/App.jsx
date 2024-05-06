import { Post } from './Post';

import './styles.css';

export function App() {

  return (
    <div>
      <Post
        author="Bruno Mito"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam atque velit impedit! Libero ratione rem ipsum minus consequuntur aliquam, inventore ullam dolorum iste quod deleniti aut! Fugiat assumenda aliquid voluptates."
      />

      <Post 
        author="Marcos Hackeado"
        content="Engenheiro de Computação que conseguiu ter seu instagram hackeado."
      />
    </div>

  )
}
