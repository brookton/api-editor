import React, {Component} from 'react';
import '../Stylesheets/App.css';
import Container from './Container'

// Step 1: Enter your API URL here 
// IF AUTH API: add authorization tokens below
// Step 2: Item Component update
// Step 3: New Form Component update
// Step 5: Edit Form Component update
const APIURL = ""

class App extends Component {
  state = {
    apiData: []
  }

  componentDidMount = () => {
    this.fetchData()
  }
  
  fetchData = () => {
    fetch(`${APIURL}`, {
      method: "GET",
      headers: {
          // If auth is required set auth credentials in each function
          // Authorization: `Bearer ${"token"}`
      }
    })
    .then(response => response.json())
    .then(res => {
      // console.log("res", res)
      this.setState({
        apiData: res
      })
    })
    .catch(error => console.error('Error:', error))
  }

  createData = (type, item) => {
    const body = {...item}
    const newState = [item, ...this.state[type]]
    fetch(`${APIURL}`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",

          // If auth is required set auth credentials in each function
          // Authorization: `Bearer ${"token"}`
        },
        body: JSON.stringify(body)
      })
      .then(this.setState({[type]: newState}))
      .catch(error => console.error('Error:', error))
  }

  deleteData = (type, id) => {
    const body = {id}
    const newState = this.state[type].filter((object) => object.id !== id)
    fetch(`${APIURL}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",

          // If auth is required set auth credentials in each function
          // Authorization: `Bearer ${"token"}`
        },
        body: JSON.stringify(body)
      })
      .catch(error => (console.error(error)))
      .then(this.setState({[type]: newState}))
  }

  editData = (type, item) => {
    const body = {...item}
    const newState = this.state[type].filter((object) => object.id !== item.id)
    fetch(`${APIURL + '/' + item.id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",

          // If auth is required set auth credentials in each function
          // Authorization: `Bearer ${"token"}`
        },
        body: JSON.stringify(body)
      })
      .catch(error => console.error('Error:', error))
      .then(this.setState({[type]: [item, ...newState]}))
  }

  render(){
    const{apiData} = this.state
    return (
      <div className="App">
        <h1 className="login-text">API Editor</h1>
        <div id="author">
          Created by <a href='https://davidbrookton.com'>David Brookton</a>
        </div>
        <Container apiData={apiData} addData={this.addData} deleteData={this.deleteData} editData={this.editData}/>
      </div>
    )
  }
}

export default App;
