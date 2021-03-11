import React from "react";

export default function Form(props){

    return(

    <div className="bookContainer">
        <form>
            <legend>New Book</legend>
            <label htmlFor="title">Title: </label>
                <input type="text" id="bookTitle" name="title" onInput={props.addBook}/><br/>
            <label htmlFor="year">Year:</label>
                <input type="text" id="bookYear" name="year" onChange={props.addBook}/><br/>
            <label htmlFor="genre">Genre:</label>
                <input type="text" id="bookGenre" name="genre" onChange={props.addBook}/><br/>
            <label htmlFor="synopsis">Synopsis:</label>
                <input type="text" id="bookSynopsis" name="synopsis" onChange={props.addBook}/><br/>
            <label htmlFor="status">Status:</label>
                <input type="text" id="bookStatus" name="status" onChange={props.addBook}/><br/>
            <button type="submit" id="btnBookAdd" onClick={() => props.message}>Add</button>
            <button type="submit" id="btnBookAdd" onClick={() => props.setForm(false)}>Cancel</button>
        </form>
    </div>
        


    );

}