import React from 'react';
import './App.css';

const books = [
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

function App() {
  return (
    <div className="App">
        {getBooks()}
    </div>
  );
}

const getBooks = ()=>{
  return books.map((book)=>{
    return (
      <div className="book">
        <p>{book.title}</p>
        <p>{book.author}</p>
        <p>{book.summary}</p>
        <button className="btn btn-primary">Show Details</button><br/>
        <button className="btn btn-danger">Hide Details</button>
      </div>

    )
  })
}

export default App;
