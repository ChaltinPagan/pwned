import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      results: null,
      loading: false,
      prompt: false
    }
  }

  handleUserInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { userInput } = this.state;

    if (!userInput) {
      this.setState({
        prompt: true
      })
    } else {
      this.setState({ loading: true }, () => {
        axios.get(`/pwned/${userInput}`)
          .then(res => {
            setTimeout(() => {
              this.setState({
                results: res.data.count,
                loading: false
              })
            }, 3000);
          })
      })
    }
  }

  render() {
    const { prompt, results, loading } = this.state;
    return (
      <div id="home-page">
        <Header />

        <LoginPage /> 

        <Form onChange={this.handleUserInput} onClick={this.handleSubmit} />

        <Results loading={loading} results={results} prompt={prompt}/>
      </div>
    );
  }
}

export default App;
