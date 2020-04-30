import React, { useState, useEffect } from 'react'

import Header from './components/Header'
function App() {
  // estado recebe duas variaveis: primeira é a variavel declarada e a segunda é uma função para alterar valor
  // da primeira variavel
  const [projects, setProjects] = useState(['Desenvolvimento NodeJs', 'FrontEnd com ReactJs'])

  function handleAddProject() {

    //o setProjects não pode alterar diretamente um dado, então preciso usar um spred para
    //pegar os primeiros dados da minha variavel e no segundo parametro estou add uma nova informação
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
  }


  return (
    <>
      <Header title="Projects" />
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  );
}
export default App;