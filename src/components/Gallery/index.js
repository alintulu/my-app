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
    const {elements} = this.props;
    const {search} = this.state;
    const filteredElements = {elements}.elements.students.filter(element => element.name.toLowerCase().includes(search));
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
              return  <span key={element.id} className="Element">
                        <Card name={element.name}/>
                      </span>
            })
          }
        </div>
      </div>
    );
  }
}

export default EditableGallery;