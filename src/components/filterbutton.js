import React from "react";
import Form from "./form";
import {useState} from "react";

export default function FilterButton(props){

    const [showForm, setForm] = useState(false);

    const newBook = ( 
        <Form setForm={setForm} addBook={props.addBook}/>
    );

    const menu = (
        <div>
            <nav>
                <h1>Menu</h1>
                <div className="btnState">
                    <button className="toogleButton" onClick={() => setForm(true)}>New Book</button>
                    <button className="toggleButton">Reading</button>
                    <button className="toggleButton">Completed</button>
                    <button className="tooglebutton">List</button>
                </div>
            </nav>
        </div>
       

    );

    return(showForm ? newBook: menu);

}