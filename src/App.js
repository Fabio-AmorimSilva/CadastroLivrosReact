import React from "react";
import {useState} from "react";
import FilterButton from "./components/filterbutton";
import Form from "./components/form";
import ShowMode from "./components/show"

function App(props) {


  //State to uses the values of books in data bank
  const [books, setBook] = useState(props.books);

  const bookList = books.map(book => (<ShowMode 
    title={book.title}
    year={book.year}
    author={book.author}
    genre={book.genre}
    synopsys={book.synopsys}
    status={book.status}

  />
     
  ));

  function addBook(e){
    const newBook = e.target.value;
    setBook([...books, newBook]);
  }

  
  return (
    <div className="App">
      <header className="App-header">

        <Form addBook={addBook}/>
        <FilterButton />
        {bookList}

      </header>
    </div>
  );
}

export default App;
