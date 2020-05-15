import React, { Component } from 'react';
import Card from '../Card';
import '../../App.css';
import './Gallery.css';

class EditableGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  handleSearchChange = (event) => {
    this.setState({search: event.target.value.toLowerCase()});
    console.log(this.state)
  }

  render() {
    //const {elements} = this.props;
    const {search} = this.state;
    const filteredElements = this.props.images.filter(element => element.name.toLowerCase().includes(search));
    console.log("Hey look here", {filteredElements})
    return (
      <div>
        <input
          className="search"
          type="text"
          value={search}
          onChange={(event) => this.handleSearchChange(event)}
          placeholder="Search..."/>
        <div className="Elements">
          {
            filteredElements.map(element => {
              console.log({element}.element);
              return  <span key={element.id} className="Element">
                        <Card name={element.name} text={["docker pull ", {element}.element.pull]}/>
                      </span>
            })
          }
        </div>
      </div>
    );
  }
}

export default EditableGallery;