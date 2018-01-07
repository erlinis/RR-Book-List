import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render(){
    return (
      <ul className='list-group col-sm-4'>
       {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  // Transform the state data into props so that
  // them we be available in this component
  return {
    books: state.books
  }
}

// Anything return from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch){
  // Wherenever selectBook is called, the result should be passed
  // to all reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Convert the BookList form a component to a container, it needs
// to now about this new dispatch method
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
