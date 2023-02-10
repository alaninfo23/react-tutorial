/* Importando o componente React ## não entendi? */
import React, { Component } from "react"
/* Importando o componente Table */
import Table from './Table';
/* Importando o componente Form */
import Form from './Form'
/* Criando uma classe App extendida da Biblioteca 'Component' do React ?*/
class App extends Component {
  state = {
     characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
     ]
  };

  /* Função que remove uma linha, não entendi como funciona =(
     o pouco que entendi foi que ele pegou o estado e armazenou na const charaters?
     depois fez uma verificação mas não entendi como é..
  ) */
  removeCharacter = (index) => {
    const { characters } = this.state
    
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }

/* Aqui é onde renderiza tudo né? ele retorna uma div com a tabela, dados e botão remover? */
  render() {
    const { characters } = this.state
  
    return (
      <div className="container">
        <Table characterData={characters} 
        removeCharacter={this.removeCharacter}
         />
        <h3>Add New</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }

}
export default App;