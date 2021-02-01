import React from "react";


export default function Form(props){

    return(

        <form>

            <label htmlFor="book">Insert the book</label><br/>
                <input type="text" id="bookAdd" name="book" /><br/>
                <input type="checkbox" className="bookState" name="reading"/> 
                <label htmlFor="reading">Reading</label>
                <input type="checkbox" className="bookState" name="completed"/>
                <label htmlFor="completed">Completed</label>
                <input type="checkbox" className="bookState" name="list"/>
                <label htmlFor="list">List</label><br/>
            <button type="submit" id="btnBookAdd" onClick={() => props.addBook}>Add</button>
        </form>

    );

}