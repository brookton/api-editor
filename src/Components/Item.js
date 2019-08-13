import React, {Component} from 'react'
import EditForm from './EditForm'

class Item extends Component {
  state={
    showEdit: false,
  }

  toggleEdit = () => {
    this.setState({showEdit: !this.state.showEdit})
  }

  render(){
    // STEP 1: Open console to read your data point props (keys, etc)
    // uncomment the line below to check
    // console.log("Here are your props", this.props)

    // STEP 2: Update the prop destructuring below with the correct values
    // from your API
    const {id, description, image, tag, deleteData} = this.props
    const {showEdit} = this.state
    // replace {description} with your data's title value
    // replace {image} and <img> with a relevant <p>{data}</p>
    // Replace Tag label and {tag} with your data's values
    // Create as many as necessary
    return(
      <div>
        <div className="data-card">
          <h4 className="data-title">
            {description}
          </h4>
          <img className="data-content" src={image} alt="data content"></img>
          {/* <p className="data-content">id {id}</p> */}
          <p className="data-content">Tags:</p>
          <p className="data-content tags">{tag}</p>
          <button className="button-edit" onClick={this.toggleEdit}>Edit</button>
          <button className="button-delete" onClick={() => deleteData("apiData", id)}>Delete</button>
          <EditForm {...this.props} toggleEdit={this.toggleEdit} showEdit={showEdit}/>
        </div>
      </div>
    )
  }
}
export default Item
