/* Importando o componente React ## não entendi? */
import React, { Component } from 'react';

/* Função que retorna 2 colunas */
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

/* Função que preenche campos da coluna com dados */
const TableBody = (props) => {
/* Eu não entendi aqui cria uma função que recebe parametros row e index, armazena
na variavel rows, e retorna uma tabela com name, job e um botão deletar */
 const rows = props.characterData.map((row, index) => {
  return (
   <tr key={index}>
       <td>{row.name}</td>
       <td>{row.job}</td>
     <td>
        <button onClick={() => props.removeCharacter(index)}>Delete</button>
     </td>
   </tr>
  )
 })
 /* Aqui é onde retorna de fato a função acima? mas em que condição q ele retorna? */
  return <tbody>{rows}</tbody>
}

/* Aqui é a função de fato que retornar a tabela com os dados, para isso ela usa
esse parametro props para acessar os dados certos?
e ai cria uma const com 2 parametros e atribui ao props?
e em seguida retorna de fato a tabela com os dados e com a função remover?*/
const Table = (props) => {
  const { characterData, removeCharacter } = props

  return (
    <table>
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter} />
    </table>
  )
}
/* Devemos sempre exportar o component para que possa ser acessado por 
outro componente?
 */  
export default Table