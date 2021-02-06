import React from "react";
import {useState} from "react";


export default function Show(props){

    const [edit, setEdit] = useState(false);
    const [, setView] = useState(true);

    const editBook = (

        <form id="bookForm">
            <label htmlFor="title">Title: </label>
                <input type="text" name="title"/><br/>
            <label htmlFor="year">Year: </label>
                <input type="number" name="year"/><br/>
            <label htmlFor="author">Author: </label>
                <input type="text" name="author"/><br/>
            <label htmlFor="genre">Genre: </label>
                <input type="text" name="genre"/><br/>
            <label htmlFor="sinop">Sinopsys</label>
                <textarea name="sinop"></textarea><br/>
            <label htmlFor="status">Status: </label>
                <input type="text" name="status"/><br/>
            <button type="submit" id="btnSubmit" onSubmit={() => setView(false)} onClick={() => setEdit(true)}>Save</button><br/>
            <button type="submit" id="btnCancel" onSubmit={() => setView(true)} onClick={() => setEdit(false)}>Cancel</button><br/>        
        </form>

    );

    const viewBook = (

        <div className="booksView">
            <p>Title: {props.title}</p>
            <p>Year: {props.year}</p>
            <p>Author: {props.author}</p>
            <p>Genre: {props.genre}</p>
            <p>Synopsys: {props.synopsys}</p>
            <p>Status: {props.status}</p>
            <button type="submit" id="btnCancel" onSubmit={() => setView(false)} onClick={() => setEdit(true)}>Edit</button><br/>        
        </div>

    );

    return( edit ? editBook : viewBook);

}