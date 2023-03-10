import React, { Component } from 'react';

/* Definindo estado inicial de algumas propriedades como vazias e 
atribuindo esse estado inicial ao state(acredio que será usado posteriormente) */
class Form extends Component {
    initialState = {
        name: '',
        job: '',
    }
    state = this.initialState
/* Função q será executado toda vez que uma alteração for feita em uma entrada. */
handleChange = (event) => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { name, job } = this.state;
  
    return (
      <form on>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange} />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange} />
          <input type="button" 
          value="Submit" 
          onClick={this.submitForm} />
      </form>
    );
  }
}
  
export default Form;