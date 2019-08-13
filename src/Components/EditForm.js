import React, { Component } from 'react'

class EditForm extends Component {
  // Step 1: update the state here, just as before, to reflect your API data
  constructor (props) {
    super(props)
    this.state = {
      description: props.description,
      image: props.image,
      tag: props.tag,
      id: props.id
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {editData, toggleEdit} = this.props
    editData("apiData", this.state)
    toggleEdit()
  }

  render () {
    // Step 2: Update the this.state destructure to reflect your corect data
    const {description, image, tag} = this.state
    const {showEdit, toggleEdit} = this.props
    // Step 3: Correct form inputs, etc. to reflect your API's data to update
    return (
      <div>
        {showEdit ?
        <div className="modal">
          <div className="modal-main">
            <form onSubmit={this.handleSubmit}>
              <h3>Edit Todo</h3>
              <label className="modal-label">Description:</label>
              <input className="modal-input" name="description" onChange={this.handleChange} value={description} />
              <label className="modal-label">Image:</label>
              <input className="modal-input" name="image" onChange={this.handleChange} value={image} />
              <label className="modal-label">Tags:</label>
              <input className="modal-input" name="tag" onChange={this.handleChange} value={tag} />
              <button className="button modal-button" type="submit">Edit</button>
              <button className="button modal-button" onClick={toggleEdit}>Close</button>
            </form>
          </div>
        </div>:
        null}
      </div>
    )
  }
}
export default EditForm
