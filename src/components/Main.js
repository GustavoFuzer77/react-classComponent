import React, { Component } from "react";
import './Main.css';
import Form from './Form'
import Tarefas from './Tarefas'


export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1
  }

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))
    if (!tarefas) return
    this.setState({ tarefas })
  }

  componentDidUpdate(prevProp, prevState) {
    const { tarefas } = this.state;
    if (tarefas === prevState.tarefas) return;
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }

  handleDelete = (e, index) => {
    const { tarefas } = this.state
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas]
    })
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index]
    })

  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;
    const news = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...news, novaTarefa],
        novaTarefa: ''
      })
    } else {
      // const novasTarefas = [...tarefas];
      news[index] = novaTarefa;

      this.setState({
        tarefas: [...news],
        index: -1
      })
    }

  }


  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  render() {
    const { novaTarefa, tarefas } = this.state
    return (
      <div className="div-main">
        <h1>Lista de tarefas</h1>

        <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} novaTarefa={novaTarefa}/>
        <Tarefas tarefas={tarefas} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
      </div>
    );
  }
};

/*
  expor default class NOME extends Component(needed to import from "react"){

    Here is javaScript codes
    you can use state and setState from "component"

    state = {}
    this.setState = (event) => {}

    this = global function = components

    render(){
      return HTML/JSX
    }
  }
*/