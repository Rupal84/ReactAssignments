import React from 'react';
import './App.css';
import Book from './components/book';
export const books = [
  {
    "author": "Frank Herbert",
    "title": "Dune",
    "summary": "The story of a boy and a great family’s ambitious attempt to realize mankind’s most ancient and unattainable dream."
  },
  {
    "author": "Mur Lafferty",
    "title": "Six Wakes",
    "summary": "A crew of clones awakens aboard a space ship to find they're being hunted-and any one of them could be the killer."
  }, {
    "author": "Yann Martel",
    "title": "Life of Pi",
    "summary": " An inspirational tale of survival, endurance, resilience and faith"
  }

]



class App extends React.Component {
  constructor(props:any) {
    super(props);
    this.state = {
      showDescription: false
    }
  }
  render() {
  return (
    <div className="App">
     {getBooks()}
    </div>
  )
  };

  
}
const getBooks = ()=> {
  return books.map(book=><Book book={book}></Book>)
}



export default App;
