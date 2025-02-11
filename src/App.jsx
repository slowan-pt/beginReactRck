//Componente é um pedaço da aplicação que pode ser repetida (reaproveitável) com INF =!
//Componente é uma função que retorna HTML

//JSX - JavaScript + XML

import { Header } from "./components/header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

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
          author="Sloan Nascimento"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam corrupti temporibus dolore tenetur pariatur. Ut repudiandae voluptate quod quasi ea? Voluptatum, eum nemo natus repellendus sequi pariatur obcaecati tenetur?"
        />

        <Post 
          author="Sloan Nascimento"
          content="Testando 2º POST"
        />
      </main>
    </div>
    
    </div>
  )
  
}