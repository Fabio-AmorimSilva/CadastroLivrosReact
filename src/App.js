import React from "react";
import {useState} from "react";
import FilterButton from "./components/filterbutton";
import ShowMode from "./components/show"

function App(props) {

  //id count
  let id = 0;

  //State to uses the values of books in data bank
  const [books, ] = useState(props.books);

  const bookList = books.map(book => (<ShowMode 
    title={book.title}
    year={book.year}
    author={book.author}
    genre={book.genre}
    synopsys={book.synopsys}
    status={book.status}
    key={id++}
  />
     
  ));
  
  return (
    <div className="App">
      <header className="App-header">

        <FilterButton />
        <h2>Books list</h2>
        {bookList}

      </header>
    </div>
  );
}

export default App;
