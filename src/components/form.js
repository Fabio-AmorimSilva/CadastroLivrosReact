import React from "react";
import {useState} from "react";

export default function Form(props){
    
    const [books, setBook] = useState(props.books);    

    function addBook(e){
        setBook({
            ...books, 
            [e.target.name]: e.target.value,
        })
    }

    function message(){
        alert("Livro adicionado a biblioteca!");        
    }

    

    return(

        <form>
            <legend>New Book</legend>
            <label htmlFor="title">Title: </label>
                <input type="text" id="bookTitle" name="title" onInput={addBook}/><br/>
            <label htmlFor="year">Year:</label>
                <input type="text" id="bookYear" name="year" onChange={addBook}/><br/>
            <label htmlFor="genre">Genre:</label>
                <input type="text" id="bookGenre" name="genre" onChange={addBook}/><br/>
            <label htmlFor="synopsis">Synopsis:</label>
                <input type="text" id="bookSynopsis" name="synopsis" onChange={addBook}/><br/>
            <label htmlFor="status">Status:</label>
                <input type="text" id="bookStatus" name="status" onChange={addBook}/><br/>
            <button type="submit" id="btnBookAdd" onClick={() => addBook}>Add</button>
            <button type="submit" id="btnBookAdd" onClick={() => props.setForm(false)}>Cancel</button>
        </form>

        


    );

}