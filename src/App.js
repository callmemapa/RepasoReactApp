import React, {Component} from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//Componentes
import Task from './components/Task';
import Tittle from './components/Tittle';
import Layout from './components/Layout';
import TaskList from './components/Task-list';
import Input from './components/Input';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTask: "",
      tasks: []
    }
  }

  handleTaskChange = (event) => {
    this.setState({
      newTask: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let newTasks = this.state.tasks;
    newTasks.push(this.state.newTask)
    this.setState({
      newTask: "",
      task: newTasks
    })
  }

  handleDelete = (id) => {
    let newTasks = this.state.tasks;
    newTasks.splice(id,1)
    this.setState({
      tasks: newTasks,
    })
  }

  render() {
    return (
      <Layout>
        <Tittle/>
        <Input
          handleSubmit={this.handleSubmit}
          handleTaskChange={this.handleTaskChange}
          value={this.state.newTask}
        />
        <TaskList
          tasks={this.state.tasks}
          handleDelete={this.handleDelete}
        />
      </Layout>
    );
  }
}
export default App;
