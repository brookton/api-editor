import React, {Component} from 'react'

class NewForm extends Component {
  // Step 1: Update state to hold the values you'll be creating to match
  // Your API's POST requirements
  state={
    description: '',
    image: '',
    tag: '',
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  // Step 2. Change the this.setState function to match the state above
  handleSubmit = (event) => {
    event.preventDefault()
    const {addData, toggleNew} = this.props
    addData("apiData", this.state)
    toggleNew()
    this.setState({description: '', image: '', tag:''})
  }

  render(){
    // Step 3. Change the this.state destructuring wiht your new state values
    const {description, image, tag} = this.state
    const {showNew, toggleNew} = this.props

    // Step 4. Update the form below to be able to create and POST values
    return(
      <div>
      {showNew ?
            <div className="modal">
              <div className="modal-main">
                <form onSubmit={this.handleSubmit}>
                  <h3>Add New Data</h3>
                  <label className="modal-label">Description:</label>
                  <input className="modal-input" name="description" onChange={this.handleChange} value={description} required />
                  <label className="modal-label">Image URL:</label>
                  <input className="modal-input" name="image" onChange={this.handleChange} value={image} />
                  <label className="modal-label">Tags:</label>
                  <input className="modal-input" name="tag" onChange={this.handleChange} value={tag} />
                  <button className="button modal-button" type="submit">Add</button>
                  <button className="button modal-button" onClick={toggleNew}>Close</button>
                </form>
              </div>
            </div> :
            null}
      </div>
    )
  }
}

export default NewForm
