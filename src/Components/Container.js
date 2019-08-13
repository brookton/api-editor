import React, {Component} from 'react'
import Item from './Item'
import NewForm from './NewForm'

class Container extends Component {
  state = {
    showNew: false
  }

  toggleNew = () => {
    this.setState({showNew: !this.state.showNew})
  }

  render(){
    const {showNew} = this.state
    const apiData = this.props.apiData.map((data) => {
      return <Item key={Math.floor(Math.random() * 1000000)} {...data} deleteData={this.props.deleteData} editData={this.props.editData} />
    })
    return(
      <div className="">
        <button className="button-add" onClick={this.toggleNew}>Add a New Datapoint</button>
        <NewForm addData={this.props.addData} toggleNew={this.toggleNew} showNew={showNew}/>
        <div className="data-card-list">
          {apiData}
        </div>
      </div>
    )
  }
}

export default Container
