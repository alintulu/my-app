import React from "react";
import Downshift from "downshift";
import './DropDown.css'
import { connect } from 'react-redux'

const MyDownPage = (props) =>  {


  const books = props.books;
  const cmssw = props.cmssw;

  const onChange = (selectedBook, cmssw) => {
    if (cmssw === true)  {
      props.dispatch({
        type: 'CHANGE',
        chosen_release: {selectedBook}.selectedBook
      }) 
    } else {
      alert('hey');
    }
  };

  return (
    <Downshift
      onChange={onChange}
      itemToString={books => (books ? books.name : "")}
    >
      {({
        getInputProps,
        getItemProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        highlightedItem,
        getLabelProps,
        getToggleButtonProps,
        toggleMenu,
        clearSelection,
      }) => (
        <div>
          <label
            style={{ marginTop: "1rem", display: "block" }}
            {...getLabelProps()}
          >
          </label>{" "}
          <br />
          <input 
            {...getInputProps({ 
              placeholder: props.text 
            })} 
          />
          {isOpen ? (
            <div className="downshift-dropdown">
              {books
                .filter(
                  item =>
                    !inputValue ||
                    item.release.toLowerCase().includes(inputValue.toLowerCase())
                )
                .map((item, index) => (
                  <div
                    className="dropdown-item"
                    {...getItemProps({ 
                      key: item.release,
                      index,
                      item,
                      isActive: highlightedIndex === index,
                      isSelected: selectedItem === item, })}
                    style={{
                      backgroundColor:
                        highlightedIndex === index ? "lightgray" : "white",
                      fontWeight: selectedItem === item ? "bold" : "normal"
                    }}
                  >
                    {item.release}
                  </div>
                ))}
            </div>
          ) : null}
        </div>
      )}
    </Downshift>
  );
}

const mapStateToProps = (state) => {
  return {
    downShift: state.downShift
  }
}

const DropDownContainer = connect(
  mapStateToProps,
  null
)(MyDownPage)

export default DropDownContainer
