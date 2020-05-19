import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import { connect } from 'react-redux'


import fake from '../../data/fake.json';
import fake2 from '../../data/fake2.json';
import fake3 from '../../data/fak3.json';

const RadioButtons = (props) => {
    console.log("propely", props)
    const [selectedValue, setSelectedValue] = useState("a");

    const handleChange = event => {
        console.log(event.target.value);
        setSelectedValue(event.target.value);

        if ( event.target.value === "a" )  {
            props.dispatch({
              type: 'SHOW',
              show: fake
            })
          } else if ( event.target.value === "b" ) {
            props.dispatch({
              type: 'SHOW',
              show: fake2
            }) 
          } else if ( event.target.value === "c" ) {
            props.dispatch({
              type: 'SHOW',
              show: fake3
            }) 
          }
    };

    return (
      <div>
        <Radio checked={selectedValue === "a"} onChange={handleChange} value="a" name="images" /> Available now
        <Radio checked={selectedValue === "b"} onChange={handleChange} value="b" name="images" /> Currently building
        <Radio checked={selectedValue === "c"} onChange={handleChange} value="c" name="images" /> Pending requests
      </div>
    );
}


const mapStateToProps = (state) => {
  return {
    table: state.table
  }
}

const RadioButtonsContainer = connect(
  mapStateToProps,
  null
)(RadioButtons)

export default RadioButtonsContainer