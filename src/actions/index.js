export function selectBook(book){

  // this is an ActionCreatorm it needs to return
  return {
    type: 'BOOK_SELECTED',
    book: book
  }
}
