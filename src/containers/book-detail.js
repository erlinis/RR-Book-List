import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render(){
      console.log("book Select");
      console.log(this);
    let currentBook = this.props.book;

    if (!currentBook) {
      return <div> Select a book to get its details </div>
    }

    return (
      <div>
        <h5> Details for: </h5>
        <h4>{currentBook.title}</h4>

        <div>Author: {currentBook.author}</div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
