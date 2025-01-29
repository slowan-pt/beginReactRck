//Componente é um pedaço da aplicação que pode ser repetida (reaproveitável) com INF =!
//Componente é uma função que retorna HTML

//JSX - JavaScript + XML

import {Post} from "./Post"
export function App() {
  return (
    <div>
    <Post 
      author="Sloan Nascimento"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam corrupti temporibus dolore tenetur pariatur. Ut repudiandae voluptate quod quasi ea? Voluptatum, eum nemo natus repellendus sequi pariatur obcaecati tenetur?"
    />

    <Post 
      author="Sloan Nascimento"
      content="Testando 2º POST"
    />
    
    </div>
  )
  
}