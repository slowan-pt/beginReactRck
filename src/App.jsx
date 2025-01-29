//Componente é um pedaço da aplicação que pode ser repetida (reaproveitável) com INF =!
//Componente é uma função que retorna HTML

//JSX - JavaScript + XML

import { Header } from "./components/header";
import {Post} from "./Post";
import './styles.css';
export function App() {
  return (
    <div>
      <Header />

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