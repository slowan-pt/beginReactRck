//Componente é um pedaço da aplicação que pode ser repetida (reaproveitável) com INF =!
//Componente é uma função que retorna HTML

//JSX - JavaScript + XML

import {Post} from "./Post"
export function App() {
  return (
    <div>
    <Post  />
    <Post  />
    <Post  />
    <Post  />
    <Post  />
    <Post  />
    </div>
  )
}